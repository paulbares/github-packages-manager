<template>
  <div id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label>organization</label>
          <md-input v-model="githubInfo.organization"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>repository</label>
          <md-input v-model="githubInfo.repository"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>token</label>
          <md-input v-model="githubInfo.token"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>Page size</label>
          <md-input type="number" v-model.number="pageSize" maxlength="3"></md-input>
        </md-field>
      </div>
    </div>
    <md-button @click="fetch">Fetch</md-button>
    <md-button class="md-accent" @click="showDialog = true" :disabled="!deleteEnabled">Delete</md-button>

    <h3>{{ treeData.length }} packages</h3>

    <Tree id="my-tree-id" ref="my-tree-ref"
          :custom-options="treeOptions"
          :custom-styles="treeStyles"
          :nodes="treeData"></Tree>

    <div v-if="getCheckedVersionsByPackage()" class="md-layout md-gutter">
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Are you absolutely sure?</md-dialog-title>
        <md-content class="md-scrollbar">
          <span style="padding: 0px 24px; color: rgb(255,0,0);">
            The following packages will be deleted and will no longer be accessible.
          </span>
          <md-list v-for="[packageName, versions] of Object.entries(getCheckedVersionsByPackage())" :key="packageName">
            <md-subheader>{{ packageName }}</md-subheader>
            <md-list-item v-for="version in versions" :key="version.id">
              <span class="md-list-item-text">{{ version.version }}</span>
            </md-list-item>
          </md-list>
        </md-content>
        <div class="md-layout md-gutter md-alignment-center-right">
          <div class="md-layout-item">
            <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
          </div>
          <div class="md-layout-item">
            <md-button class="md-primary md-raised" @click="onConfirm">Confirm</md-button>
          </div>
        </div>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import Tree from 'vuejs-tree'
import {getPackages, getPackageVersions, deletePackageVersions} from "./utils/graphql";
// import {getPackages, getPackageVersions, deletePackageVersions} from "./utils/graphql.mock";

const NIL = {};
const TREE_REF = 'my-tree-ref'

export default {
  name: 'App',
  components: {
    Tree,
  },
  data: function () {
    return {
      treeData: [],
      githubInfo: {
        organization: '',
        repository: '',
        token: '',
      },
      deleteEnabled: false,
      showDialog: false,
      pageSize: 10,
    }
  },
  computed: {
    treeOptions() {
      return {
        treeEvents: {
          expanded: {
            state: true,
            fn: this.onNodeExpended,
          },
          selected: {
            state: true,
            fn: this.onNodeSelected,
          },
          checked: {
            state: true,
            fn: this.onNodeChecked,
          },
        },
      }
    },
    treeStyles() {
      return {
        tree: {
          height: 'auto',
          overflowY: 'visible',
          display: 'inline-block',
        },
        selectIcon: {
          class: 'fa fa-plus',
          style: {
            color: '#070909'
          },
          active: {
            class: 'fa fa-plus',
            style: {
              color: '#2ECC71'
            }
          }
        },
      }
    },
  },
  beforeMount() {
    this.initTree()
  },
  methods: {
    fetch() {
      this.initTree()
    },
    async onConfirm () {
      this.showDialog = false
      this.deleteEnabled = false
      await this.deleteCheckedPackages()
      await this.initTree()
    },
    async initTree() {
      if(!Object.entries(this.githubInfo).every(e => e[1])){
        console.log("Please fill in the form")
        return
      }

      // Init the tree with package names
      const packages = await getPackages(this.githubInfo)
      const tree = []
      for (const pack of packages) {
        const n = {
          id: pack.id,
          text: pack.name + " [" + pack.versions.totalCount + "]",
          name: pack.name,
          definition: pack.name,
          checkable: true,
          expandable: true,
          root: true,
          state: {
            checked: false,
            expanded: false,
            selected: false
          },
          nodes: [NIL], // to make the expand arrow appear
        }
        tree.push(n)
      }
      this.treeData = tree
      this.$refs[TREE_REF].collapseAllNodes()
      this.$refs[TREE_REF].uncheckAllNodes()
    },
    async deleteCheckedPackages() {
      const checkedNodes = this.getCheckedVersionsByPackage()
      for (const [packageName, versions] of Object.entries(checkedNodes)) {
        await deletePackageVersions(this.githubInfo, packageName, versions)
      }
    },
    getCheckedVersionsByPackage() {
      if (!this.$refs[TREE_REF]) {
        return
      }

      let checkedNodes = this.$refs[TREE_REF].getCheckedNodes(['packageName', 'id', 'name', 'root'], false)
      checkedNodes = checkedNodes.filter(n => n.id !== undefined && !n.root) // there is a bug that results in having NIL on the list
      const result = {}
      for (const n of checkedNodes) {
        if (n.id === this.getPlusId(n.packageName) || n.root) {
          continue
        }

        const k = n.packageName
        result[k] = result[k] || []
        result[k].push({'id': n.id, 'version': n.name})
      }
      return result
    },
    onNodeChecked(nodeId) {
      // By default, when a parent is checked, its children are also checked but no event is sent.
      // When a root node is checked, state of the delete button depends on its state
      const node = this.findNode(nodeId)
      if (node.root) {
        this.deleteEnabled = node.state.checked && node.nodes.some(n => n !== NIL)
        return
      }
      const checkedNodes = this.getCheckedVersionsByPackage()
      for (const packageName in checkedNodes) {
        if (checkedNodes[packageName].length > 0) {
          // At least one is checked, that's enough
          this.deleteEnabled = true
          return
        }
      }
      this.deleteEnabled = false
    },
    async onNodeSelected(nodeId) {
      const node = this.findNode(nodeId)
      const rootNode = this.findRootNode(nodeId)
      const packageVersions = await getPackageVersions(this.githubInfo, this.pageSize, rootNode.name, node.endCursor)
      this.appendNewNodes(rootNode, packageVersions)
    },
    async onNodeExpended(nodeId) {
      // Call from tree roots which correspond to package names
      const node = this.treeData.find(n => n.id === nodeId)
      const packageVersions = await getPackageVersions(this.githubInfo, this.pageSize, node.name)
      this.appendNewNodes(node, packageVersions)
    },
    appendNewNodes(packageNode, packageVersions) {
      const children = packageNode.nodes.filter(n => n !== NIL && n.id !== this.getPlusId(packageNode.name)) // remove unwanted elements
      const newChildren = []
      children.forEach(c => newChildren.push(c))
      for (const packageVersion of packageVersions.versions) {
        if(children.find(c => c.id === packageVersion.id)) {
          continue
        }
        newChildren.push(this.createNewNode(
            packageVersion.id,
            packageVersion.version,
            packageNode.name,
            true,
            false
        ))
      }
      if (packageVersions.hasNextPage) {
        // Add new element
        newChildren.push({
          ...this.createNewNode(
              this.getPlusId(packageNode.name),
              "...",
              packageNode.name,
              false,
              true
          ),
          endCursor: packageVersions.endCursor
        })
      }
      packageNode.nodes = newChildren // to update the view
    },
    getPlusId(packageName) {
      return packageName + "+"
    },
    // Tree utility methods
    createNewNode(nodeId, nodeName, packageName, checkable, selectable) {
      return {
        id: nodeId,
        text: nodeName,
        name: nodeName,
        packageName,
        definition: nodeName,
        checkable,
        selectable,
        state: {
          checked: false,
          expanded: false,
          selected: false
        },
      }
    },
    findRootNode(nodeId) {
      for (const n of this.treeData) {
        if (n.id === nodeId || this.findRec(n.nodes, nodeId)) {
          return n // itself
        }
      }
    },
    findRec(nodes, nodeId) {
      for (const n of nodes) {
        if (n.id === nodeId) {
          return n;
        } else {
          let found
          if (n.nodes && n.nodes.length > 0 && (found = this.findRec(n.nodes, nodeId))) {
            return found; // stop here
          }
        }
      }
    },
    findNode(nodeId) {
      return this.findRec(this.treeData, nodeId)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-left: 5px;
  margin-right: 5px;
}

.row_data > span.capitalize {
  text-transform: none !important;
}

.md-content {
  overflow: auto;
}
</style>

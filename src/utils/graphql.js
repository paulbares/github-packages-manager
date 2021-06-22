import {GraphQLClient, gql} from 'graphql-request'

const endpoint = 'https://api.github.com/graphql'

// eslint-disable-next-line no-unused-vars
function createClient(token) {
    return new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
}

export async function getPackages(githubInfo) {
    const query = gql`
	{
	  organization(login: "${githubInfo.organization}") {
	    createdAt
	    repository(name: "${githubInfo.repository}") {
	      packages(first: 100) {
	        totalCount
	        nodes {
	          id
	          name
	          packageType
	          versions {
	            totalCount
	          }
	        }
	      }
	    }
	  }
	}
  `

    try {
        const data = await createClient(githubInfo.token).request(query)
        const result = []
        for (const node of data.organization.repository.packages.nodes) {
            if (node.versions.totalCount != 0) {
                result.push(node)
            }
        }
        return result
    } catch (err) {
        alert(err)
        throw err
    }
}

export async function getPackageVersions(githubInfo, pageSize, packageName, afterArg) {
    let argsVersion = `first: ${Math.min(100, pageSize)}` // max is 100
    if (afterArg) {
        argsVersion += `, after: "${afterArg}"`
    }
    const query = gql`
    {
      organization(login: "${githubInfo.organization}") {
        createdAt
        repository(name: "${githubInfo.repository}") {
          packages(first: 1, names: "${packageName}") {
            totalCount
            nodes {
              versions(${argsVersion}) {
                totalCount
                nodes {
                  id
                  version
                }
                pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
              }
            }
          }
        }
      }
    }
  `;
    try {
        const data = await createClient(githubInfo.token).request(query)
        return {
            versions: data.organization.repository.packages.nodes[0].versions.nodes,
            'hasNextPage': data.organization.repository.packages.nodes[0].versions.pageInfo.hasNextPage,
            'endCursor': data.organization.repository.packages.nodes[0].versions.pageInfo.endCursor,
        }
    } catch (err) {
        alert(err)
        throw err
    }
}


export async function deletePackageVersions(githubInfo, packageName, versions) {
    const previewGraphQLClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${githubInfo.token}`,
            accept: 'application/vnd.github.package-deletes-preview+json'
        },
    })

    try {
        await Promise.all(versions.map(v => deletePackage(previewGraphQLClient, v.id)))
    } catch (err) {
        alert(err)
        throw err
    }
}

async function deletePackage(client, packageVersionId) {
    const query = gql`
          mutation {
            deletePackageVersion(input:{packageVersionId:\"${packageVersionId}\"}) {
              success
            }
          }
      `;
    await client.request(query)
}
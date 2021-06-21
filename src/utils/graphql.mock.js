// This file is for local testing purpose

const numberOfVersions = 50
const versionsByPackageName = {
    'a.name': createPackageVersions('a.name'),
    'b.name': createPackageVersions('b.name'),
    'c.name': createPackageVersions('c.name'),
    'd.name': createPackageVersions('d.name'),
}

// eslint-disable-next-line no-unused-vars
export async function getPackages(githubInfo) {
    const result = []
    for (const [packageName, versions] of Object.entries(versionsByPackageName)) {
        if (versions.length > 0) {
            result.push({
                id: packageName.replace(".name", ""),
                name: packageName,
                versions: {
                    totalCount: versions.length
                }
            })
        }
    }
    return result
}

export async function getPackageVersions(githubInfo, pageSize, packageName, afterArg = 0) {
    const result = []
    const end = Math.min(pageSize + afterArg, versionsByPackageName[packageName].length);
    for (let i = afterArg; i < end; i++) {
        result.push(versionsByPackageName[packageName][i])
    }
    return {
        versions: result,
        'hasNextPage': end - 1 < numberOfVersions,
        'endCursor': end,
    }
}

export async function deletePackageVersions(githubInfo, packageName, versionsToDelete) {
    const newVersions = []
    for(const v of versionsByPackageName[packageName]) {
        if(versionsToDelete.find(e => e.version === v.version)) {
            continue
        }
        newVersions.push(v)
    }
    versionsByPackageName[packageName] = newVersions
}

function createPackageVersions(packageName) {
    const result = []
    for (let i = 0; i < numberOfVersions; i++) {
        result.push({
            id: packageName + "_" + i,
            version: "version " + i,
        })
    }
    return result
}
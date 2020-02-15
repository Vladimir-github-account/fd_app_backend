export default function checkRolePermission(firstQueryElement, otherQueryElements, permissionsTree) {
    if (Array.isArray(firstQueryElement)) {
        return firstQueryElement.every(elem => checkRolePermission(elem, otherQueryElements, permissionsTree));
    } else {
        switch (permissionsTree[firstQueryElement]) {
            case true:
                return true;
            case undefined:
            case false:
                return false;
            default: {
                permissionsTree = permissionsTree[firstQueryElement];
                firstQueryElement = otherQueryElements[0];
                otherQueryElements = otherQueryElements.slice(1);
                return checkRolePermission(firstQueryElement, otherQueryElements, permissionsTree)
            }
        }
    }
}
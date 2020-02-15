import { PERMISSIONS_TREE } from '../../constants'
import checkRolePermission from './checkRolePermission'

export default function checkPermission(query) {
    const permissionsTree = PERMISSIONS_TREE;
    const rolesArr = query[0];
    const otherQueryElements = query.slice(1);
    return rolesArr.some(elem => checkRolePermission(elem, otherQueryElements, permissionsTree));
}
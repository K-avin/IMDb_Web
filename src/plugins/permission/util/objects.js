import { isMatch } from './matcher';

export function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

export function isFile(object) {
    if (typeof window === 'undefined') {
        return false
    }
    if (typeof File !== 'function' || typeof FileList !== 'function') {
        return false
    }
    return object instanceof File || object instanceof FileList;
}

/**
 * Check if permissions exist
 * @param {Array} permissions
 * @param {Array|string} permission
 * @returns {boolean}
 */
export function is(permissions, permission) {
    if (typeof permission === 'string' && permission.match(/[*!]/)) {
        return permissions.filter((w) => isMatch(w, permission)).length > 0;
    }
    return Array.isArray(permission) ? permission.some((w) => is(permissions, w)) : permissions.includes(permission);
}

/**
 * Check if permissions exist
 * @param {Array} permissions
 * @param {Array} permission
 * @returns {boolean}
 */
export function isAll(permissions, permission) {
    var r = true;
    if(Array.isArray(permission)) {
        for (const per in permission) {            
            r = isAll(permissions, permission[per]);
            if(!r) {
                break;
            }
        }
        return r;
    }

    return r && permissions.includes(permission);
}

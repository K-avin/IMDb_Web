export function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

export function isObject(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
}
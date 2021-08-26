import { is, isAll, isArray } from "./util";

class Permission {
  constructor(options = {}) {
    const defaults = { ...options };
    this.permissions = [];
    this.options = defaults;
  }

  /**
   * Add new permission message for given attribute
   *
   * @param  {string} attribute
   * @param  {string} key
   * @return {void}
   */
  add(permission) {
    if (!this.has(permission)) {
      this.permissions.push(permission);
    }
  }

  /**
   * Determine if any permissions exists for the given field or object.
   *
   * @param {string|null|Array} field
   */
  has(field) {
    if (arguments.length > 1) {
      var per = [];
      for (var i = 0; i < arguments.length; i++) {
        per.push(arguments[i]);
      }
        return this.has(per);
    }

    if (isArray(field)) {
      return isAll(this.permissions, field);
    }

    var res = field.split("|");

    return is(this.permissions, res);
  }

  /**
   * Get all permissions
   * @returns {{}}
   */
  all() {
    return this.permissions;
  }

  /**
   * Fill the permission object
   * @param permissions
   */
  fill(permissions) {
    permissions.map((permission) => {
      this.add(permission.name);
    });
  }

  /**
   * Flush permission
   */
  flush() {
    this.permissions = [];
  }
}

export default new Permission();

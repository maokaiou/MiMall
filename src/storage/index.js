// storage封装
const STORAGE_KEY = "mall";
export default {
  // 设置值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      // 每一次对局部进行修改以后都要重新将修改后的数据以前的模块
      return this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      // 每一次对局部进行修改以后都要重新将修改后的数据以前的模块
      return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取值
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取浏览器下的sessionStorage
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  // 删除值
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      delete val[module][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};

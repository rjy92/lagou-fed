class MyPlugin {
  constructor(options) {
    console.log("Plugin被创建了");
    console.log(options);
    this.options = options;
  }
  apply (compiler) {}
  }
  module.exports = MyPlugin;
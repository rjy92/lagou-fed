// const {
//     getOptions,
//     parseQuery,
//     stringifyRequest,
//     urlToRequest,
//     isUrlRequest,
//   } = require("loader-utils");
  
//   const { validate } = require("schema-utils");
  
//   const schema = require("./schema.json");
  
  module.exports = function (source) {
    // const options = getOptions(this);
  
    // const params = parseQuery("?param1=foo");
    // //转为相对路径
  
    // const file_url = "../src/index.js";
    // if (isUrlRequest(file_url)) {
    //   //将url转换成适合webpack环境的模块请求
    //   const request = urlToRequest(file_url);
    //   console.log(request, "request");
    // }
    // console.log(params, options, "queryssss");
  
    // const configuration = { name: "cleanlog-loader", baseDataPath: "options" };
  
    // validate(schema, options, configuration);
    // console.log(this.cacheable, "cacheable");
  
    // if (this.cacheable) {
    //   this.cacheable(true);
    // }
  
    let result = source.replace(/console\.log\(.*\);?\n?/g, "");
    //   console.log(result, "result");
    return result;
  };
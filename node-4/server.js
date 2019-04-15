



var http = require("http");
var url = require("url"); //引入新的node内置模块
//使用函数包裹，来暴露
function start(route,handle) {
  function onRequest(request, response) {
    //把请求url的地址截取并传入路由
    var pathname = url.parse(request.url).pathname;
    //定义空变量
    var postData = "";
    
    //调用request对象（流）的方法
    request.setEncoding("utf8");  //把上送的post数据编译
    request.addListener("data", postDataChunk=>{
      postData += postDataChunk;
    });
    request.addListener("end", ()=>{
      route(handle, pathname, response, postData);
    });
  }
  http.createServer(onRequest).listen(8888);
}
// CommonJs规范的模块化暴露的2种方法
// exports.start = start;
module.exports={
  start
}





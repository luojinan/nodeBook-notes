



var http = require("http");
var url = require("url"); //引入新的node内置模块
//使用函数包裹，来暴露
function start(route,handle) {
  function onRequest(request, response) {
    //把请求url的地址截取并传入路由
    var pathname = url.parse(request.url).pathname;
    route(handle,pathname,response);
  }
  http.createServer(onRequest).listen(8888);
}
// CommonJs规范的模块化暴露的2种方法
// exports.start = start;
module.exports={
  start
}





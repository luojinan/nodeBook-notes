// import http from "http"		//这种写法写法需要babel编译
var http = require("http")

/*
 *var server = http.createServer()    //使用http模块创建服务器
 *server.listen(8888)                 //给创建的服务器添加端口
*/

/*
http.createServer((req,res)=>{
  console.log("浏览器发起请求");
  res.writeHead(200,{"Content-Type":"text/plain"})
  res.write("Hello World")
  res.end()
}).listen(8888)
console.log("开启服务器之后");
*/

function onRequest(request, response) {
  console.log("浏览器发起请求");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequest).listen(8888)
console.log("开启服务器之后");

function mount(response) {
	console.log("执行对应请求的响应--初始化渲染页面");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("执行对应请求的响应--初始化渲染页面");
	response.end();
}
 
function upload(response) {
  console.log("执行对应请求的响应--上传");
	response.writeHead(200, {"Content-Type": "text/plainl"});
	response.write("执行对应请求的响应--上传");
	response.end();
}
 
module.exports={
	mount,
	upload
}





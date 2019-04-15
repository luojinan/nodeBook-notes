var querystring = require("querystring");

function mount(response,postData) {
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
 
function upload(response,postData) {
  console.log("执行对应请求的响应--上传");
	response.writeHead(200, {"Content-Type": "text/plainl"});
	response.write(`you send postData: ${postData} 
	queryString: ${querystring.parse(postData).text}`);
	response.end();
}
 
module.exports={
	mount,
	upload
}





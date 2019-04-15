var fs = require("fs");
var formidable = require("formidable");

function mount(response) {
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/photo" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
//上传图片node页面
function photo(response,request) {
  var form = new formidable.IncomingForm();
  form.parse(request, function(error, fields, files) {
    // fs.renameSync(files.upload.path, "./tmp/test.png");  //重命名图片
    var is = fs.createReadStream(files.upload.path);
    var os = fs.createWriteStream("./tmp/test.png");
    // var os = fs.createWriteStream("D:\\deskTop\\项目\\node_try\\tmp\\test.png");
    is.pipe(os);
    is.on('end',function(){
        fs.unlinkSync(files.upload.path);
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}
 
module.exports={
	mount,
  photo,
  show
}





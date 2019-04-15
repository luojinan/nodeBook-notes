

function route(handle,pathname,response) {
  console.log("从server.js中获取到的请求url" + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
}

module.exports = {
	route
};




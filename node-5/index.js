

// var server = require("./server");
// server.start(router.route);


// es6的解构赋值
var {start} = require("./server");
var {route} = require("./router");
var requestHandlers = require("./requestHandlers");

// 模块方法封装成对象
var handle = {
	'/' : requestHandlers.mount,
	'/mount' : requestHandlers.mount,
	'/photo' : requestHandlers.photo,
	'/show' : requestHandlers.show
}
start(route,handle);





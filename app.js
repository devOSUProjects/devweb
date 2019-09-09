const http = require('http');
const url = require('url');
const fs = require('fs');

var indexhtml = "";
var css = "";
var contacts = "";
var js = "";
var dogs = "";
var next = "";
var handlebars = "";



fs.readFile('./index.html', function(err, data) {
	if(err) {
		console.log('Error reading index.html');
	}
	indexhtml = data;});

fs.readFile('./css/style.css', function(err, data) {
	if(err) {
		console.log('Error: CSS file was not sent');
	}
	css = data;});

fs.readFile('./contacts.html', function(err, data) {
	if(err) {
		console.log('Error reading contacts.html');
	}
	contacts = data;});

fs.readFile('./js/main.js', function(err, data) {
	if(err) {
		console.log('Error reading main.js');
	}
	js = data;});

fs.readFile('./dogs.html', function(err, data) {
	if(err) {
		console.log('Error reading dogs.html');
	}
	dogs = data;});

fs.readFile('./js/next.js', function(err, data) {
	if(err) {
		console.log('Error reading next.js');
	}
	next = data;});

fs.readFile('./js/handlebars.js', function(err, data) {
	if(err) {
		console.log('Error reading handlebars.js');
	}
	handlebars = data;});


function requestHandler(req, res) {
	if(req.url=='/' || req.url=='/index.html') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(indexhtml);
		res.end();
	}

	else if(req.url=='/css/style.css') {
		res.writeHeader(200, {'Content-Type': 'text/css'});
		res.write(css);
		res.end();
	}

	else if(req.url=='/contacts.html') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(contacts);
		res.end();
	}
		
	else if(req.url=='/js/main.js') {
		res.writeHeader(200, {'Content-Type': 'application/javascript'});
		res.write(js);
		res.end();
	}

	else if(req.url=='/dogs.html') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(dogs);
		res.end();
	}


	else if(req.url=='/js/next.js') {
		res.writeHeader(200, {'Content-Type': 'application/javascript'});
		res.write(next);
		res.end();
	}

	else if(req.url=='/js/handlebars.js') {
		res.writeHeader(200, {'Content-Type': 'application/javascript'});
		res.write(handlebars);
		res.end();
	}
	

}


const server = http.createServer(requestHandler);

var portnum;

if(process.env.PORT != undefined) {
	console.log('Listening on port %d...', process.env.PORT);
	portnum = process.env.PORT;
}

else {
	console.log('Listening on port 80...');
	portnum = 80;
}

server.listen(portnum);

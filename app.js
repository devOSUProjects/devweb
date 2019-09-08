const http = require('http');
const url = require('url');
const fs = require('fs');

var indexhtml = "";
var css = "";



fs.readFile('./index.html', function(err, data) {
	if(err) {
		console.log('There was an error');
	}
	indexhtml = data;});

fs.readFile('./css/style.css', function(err, data) {
	if(err) {
		console.log('Error: CSS file was not sent');
	}
	css = data;});

function requestHandler(req, res) {
	if(req.url=='/') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write(indexhtml);
		res.end();
	}

	else if(req.url=='/css/style.css') {
		res.writeHeader(200, {'Content-Type': 'text/css'});
		res.write(css);
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

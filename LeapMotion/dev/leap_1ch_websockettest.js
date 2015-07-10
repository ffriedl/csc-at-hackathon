var Leap = require('leapjs');
var dgram = require('dgram');

var client = dgram.createSocket("udp4");

var position="";


/*
Leap.loop(function(frame) {

	  frame.hands.forEach(function(hand, index) {
	    if(index==0)
	    	{
	    		console.log("Position"+hand.screenPosition());
	    		console.log("Roll"+hand.roll());
	    	}
	  });
	  
	}).use('screenPosition', {scale: 0.25});*/




var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    // process HTTP request. Since we're writing just WebSockets server
    // we don't have to implement anything.
});
server.listen(1338, function() { });

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    var controller = new Leap.Controller()
    controller.loop(function(frame) {
    	frame.hands.forEach(function(hand, index) {
    		
    		
    	    if(index==0)
    	    	{
    	    		if(position!="DOWN"&&hand.roll()<-0.5) {
    		    		var message = new Buffer("DOWN");
    		    		console.log("DOWN");
    		    		position="DOWN";

    		    		client.send(message, 0, message.length, 11000, "192.168.229.125", function(err) {
    		    			}); 

    		    		connection.send("DOWN");
    		    		}
    	    		else if(position!="UP"&&hand.roll()>0.5) {
    		    		var message = new Buffer("UP");
    		    		console.log("UP");
    		    		position="UP";

    		    		client.send(message, 0, message.length, 11000, "192.168.229.125", function(err) {
    		    			}); 
    		    		connection.send("UP");
    		    		}
    	    	}
    	  });
    });
    
    
    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        console.log(message);
  
    	
    });

    connection.on('close', function(connection) {
        // close user connection
    });
    
    
});

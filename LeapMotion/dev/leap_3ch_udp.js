var Leap = require('leapjs');
var dgram = require('dgram');

var client = dgram.createSocket("udp4");

var position="";
var rot="";
var fwd="";

var controller = new Leap.Controller()
controller.loop(function(frame) {
	frame.hands.forEach(function(hand, index) {
		
		//console.log(hand.palmPosition[1]);
	    if(index==0)
    	{
    		if(position!="DOWN"&&hand.palmPosition[1]<160) {
	    		var message = new Buffer("DOWN");
	    		console.log("DOWN");
	    		position="DOWN";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(position!="UP"&&hand.palmPosition[1]>240) {
	    		var message = new Buffer("UP");
	    		console.log("UP");
	    		position="UP";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(position!="MID"&&160<hand.palmPosition[1]&&hand.palmPosition[1]<240) {
	    		var message = new Buffer("MID");
	    		console.log("MID");
	    		position="MID";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    	}
	    
	    if(index==0)
    	{
    		if(rot!="TRIGHT"&&hand.yaw()<-0.4) {
	    		var message = new Buffer("TRIGHT");
	    		console.log("TRIGHT");
	    		rot="TRIGHT";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(rot!="TLEFT"&&hand.yaw()>0.4) {
	    		var message = new Buffer("TLEFT");
	    		console.log("TLEFT");
	    		rot="TLEFT";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(rot!="TMID"&&-0.4<hand.yaw()&&hand.yaw()<0.4) {
	    		var message = new Buffer("TMID");
	    		console.log("TMID");
	    		rot="TMID";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    	}
	    
	    
	    if(index==0)
    	{
    		if(fwd!="FWD"&&hand.pitch()<-0.4) {
	    		var message = new Buffer("FWD");
	    		console.log("FWD");
	    		fwd="FWD";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(fwd!="BACK"&&hand.pitch()>0.4) {
	    		var message = new Buffer("BACK");
	    		console.log("BACK");
	    		fwd="BACK";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    		else if(fwd!="FMID"&&-0.4<hand.pitch()&&hand.pitch()<0.4) {
	    		var message = new Buffer("FMID");
	    		console.log("FMID");
	    		fwd="FMID";

	    		client.send(message, 0, message.length, 11000, "169.254.81.160", function(err) {
	    			}); 
	    		}
    	}
	  });
});
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




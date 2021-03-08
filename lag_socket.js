var socket = io.connect(window.location.hostname);
var timeout_messages_count = 10;

var i;
var gtg = true;
var gtgv = 0;
var tmc = timeout_messages_count;

setInterval(() => {
    if (gtgv <= 10) {
        gtg = false;
        setTimeout(function() { console.log("gtg set to true")}, 1500);
        gtg = true;
        gtgv = 0;
    }
    
    else if (gtgv == 0) {
        for (i = 0; i < tmc; i++) {
            gtgv += 1;
            socket.emit('new_message', {message : "Hell Incoming!"})
            socket.emit('change_username', {username : "Devil's Trident"})
        }
    }
}, 1500)
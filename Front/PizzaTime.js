var typingArea = document.querySelector('input');
  var msgBox = document.getElementById("tchat");
  
  typingArea.addEventListener('keyup', (e) => {
      if(e.keyCode === 13){
          let usermsg = document.createElement('p');
          let newmsg = document.createElement('p');
  
          usermsg.textContent = e.target.value;
          newmsg.textContent = "Prend un chevre miel, fait moi confiance. C'est commander."

          typingArea.value = '';
          usermsg.className = 'UserMsg';
          newmsg.className = 'BotMsg';
          msgBox.append(usermsg);
          msgBox.append(newmsg);
      }
  });


var io = require('socket.io');
var express = require('express');
 
var app = express.createServer();
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res, next){
  res.render('./public/index.html');
});
app.listen(80);

var socket = io.listen(app, {
    flashPolicyServer: false,
    transports: ['websocket', 'flashsocket', 'htmlfile', 'xhr-multipart', 'xhr-polling', 'jsonp-polling']
  });
import { server as WebSocketServer } from "websocket";
import http, { IncomingMessage } from 'http';
import { UserManager } from "./UserManager";
import { InitMessageType, SupportedMessage, UpvoteMessage, UpvoteMessageType, UserMessage, UserMessageType } from "./messages";

var server  = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    
    autoAcceptConnections: false
});

function originIsAllowed(origin: string) {
 
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        //Todo add rate limitting logic here
        if (message.type === 'utf8') {
            try {
                messageHandler(JSON.parse(message.utf8Data));
            } catch(e) {

            }
            // console.log('Received Message: ' + message.utf8Data);
            // connection.sendUTF(message.utf8Data);
        }
          
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

function messageHandler(message: IncomingMessage) {
    if (message.type = IncomingMessage)
}
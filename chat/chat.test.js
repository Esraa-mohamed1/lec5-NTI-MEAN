import { expect } from "chai";

import { io as Client } from "socket.io-client";
import { createServer } from "http";
import { app } from "../app.js";
import { Server } from "socket.io";

describe("socket io chat unit test", () => {

  let io, clientSocket, serverSocket;
  const port = 5001;


  
  before((done) => {
//index
    const httpServer = createServer(app);
    io = new Server(httpServer);
    httpServer.listen(port, () => {
      console.log(`Test server is running on port ${port}`);





clientSocket = Client("http://localhost:" + port); 
        io.on("connect", (socket) => {
        serverSocket = socket;

        socket.on("sendMessage", (data) => {
          console.log("Message received on server:", data);
          io.emit("receiveMessage", data);
        });
      });
      clientSocket.on('connect',done);
    });
  }); 
  after(() => {
    io.close();
    clientSocket.close();
  });


  it("should send realtimemessages to all clients", (done) => {
    const testMessage = "Hello, Socket.IO!";

    clientSocket.on("receiveMessage", (data) => {



      expect(data).to.deep.equal(testMessage);
      done();
    });

    clientSocket.emit("sendMessage", testMessage, (err) => {
      if (err) {
        done(err);
      }
    });





  });});  






    
  

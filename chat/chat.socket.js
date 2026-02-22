import { Server } from "socket.io";

export const intiSocket = (server) => {


  const io = new Server(server, {
    
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  console.log("Socket is initialized");




  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("sendMessage", (data) => {
      console.log("Message received:", data);
      io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
};

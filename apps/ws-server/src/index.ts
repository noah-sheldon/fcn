import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  console.log("Client connected");

  // Send a welcome message
  socket.send("Hi there, you are connected to the server");
});

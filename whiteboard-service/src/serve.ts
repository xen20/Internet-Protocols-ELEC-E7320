import http from "http";
import app from "./app";
import { Server } from "socket.io";

// /**
//  * Start Express server.
//  */
// const server = app.listen(app.get("port"), () => {
//     console.log(
//         " App is running at http://localhost:%d in %s mode",
//         app.get("port"),
//         app.get("env")
//     ); 
//     console.log("  Press CTRL-C to stop\n");
// });

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("create", (arg) => {
    console.log(arg);
  })  
});

server.listen(app.get("port"), () => {
  console.log(
    " App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;

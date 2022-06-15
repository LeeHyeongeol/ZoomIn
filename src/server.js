import express from "express";
import http from "http"
import SocketIO from 'socket.io';
import WebSocket from "ws"

const app = express();

console.log("hello");

app.set("view engine", "pug")
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));


// app.listen(4000, handleListen);

//http와 wss 서버를 둘 다 실행시킬 수 있다.
//함께 만들기 원한다면 이렇게 하고 아니라면 하나만 해도 됨!
// const server = http.createServer(app);
const httpServer = http.createServer(app)
const wsServer = SocketIO(httpServer)
// const wss = new WebSocket.Server({ server })

function handleConnection(socket) {
  console.log(socket)
}

//서버와 ws을 연결하고 socket을 통해 연결하자.
// wss.on("connection", (socket) => {
//   console.log("Connected to Browser ✅")
//   socket.on("close", () => console.log("Disconnected from the Browser ❌"))
//   socket.on("message", (message) => {
//     console.log(message)
//   })
//   socket.send("hello!!!")
// })

const handleListen = () => console.log("Listening on http://localhost:3000")
httpServer.listen(3000, handleListen);

//socket.io는 websocket의 프레임워크다.




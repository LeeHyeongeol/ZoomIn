import express from "express";
import http from "http"
import WebSocket from "ws"

const app = express();

console.log("hello");

app.set("view engine", "pug")
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

app.get("/", (req, res) =>
  res.render("home")
)
const handleListen = () => console.log("Listening on ws://localhost:3000")
app.listen(3000, handleListen);

//http와 wss 서버를 둘 다 실행시킬 수 있다.
//함께 만들기 원한다면 이렇게 하고 아니라면 하나만 해도 됨!
// const server = http.createServer(app);
const wss = new WebSocket.Server()

server.listen(3000, handleListen);




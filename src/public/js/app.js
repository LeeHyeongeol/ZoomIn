// const socket = new WebSocket(`ws://${window.location.host}`)
//io function은 socket.io를 실행하는 서버를 찾아서 연결해준다.
const socket = io();

const welcome = document.getElementById("welcome")
const form = welcome.querySelector("form")

function handleRoomSubmit(e) {
  e.preventDefault()
  const input = form.querySelector("input")
  socket.emit("enter-room", { payload: input.value }, () => {
    console.log("server is done!!")
  })
  input.value = ""
}

form.addEventListener("submit", handleRoomSubmit)



// socket.addEventListener("open", () => {
//   console.log("Connected to Server ✅")
// })

// socket.addEventListener("message", (message) => {
//   console.log("New message: ", message.data)
// })

// socket.addEventListener("close", () => {
//   console.log("Disconnected from Server ❌")
// })

// setTimeout(() => {
//   socket.send("hello from the browser")
// }, 10000)
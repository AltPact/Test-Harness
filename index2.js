const http = require("http");
const { client } = require("websocket");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const app = require("express")();
app.get("/", (req,res)=> res.sendFile(__dirname + "/index2.html"))
const port = 3099;
app.listen(port, ()=>console.log(`Listening on http port ${port}!`))
const websocketServer = require("websocket").server
//websocket is the server that's being user
const httpServer = http.createServer();
httpServer.listen(3000, () => console.log(`Listening.. on ${port}`))
const wsServer = new websocketServer({
    "httpServer": httpServer
})
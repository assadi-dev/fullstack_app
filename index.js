const http = require("http");
const app = require("./server/app");

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => console.log(`server listening on port : ${port} `));
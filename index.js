const http = require("http");
const fs = require("fs");

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

const data = fs.readFileSync("quotes.json", "utf-8");
const parsedData = JSON.parse(data).quotes;

const server = http.createServer((req, res) => {
  if (req.url === "/quotes") {
      res.writeHead(200, {'Content-Type' : 'application/json'})
    res.end(
      JSON.stringify(parsedData[generateRandomInteger(parsedData.length)])
    );
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(4000, () => {
  console.log("Server listening at port 4000");
});

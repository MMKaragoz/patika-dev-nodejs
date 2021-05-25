const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO INDEX</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO ABOUT</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO CONTACT</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>ERROR 404 THE PAGE COULD NOT BE FOUND</h2>");
  }

  res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});

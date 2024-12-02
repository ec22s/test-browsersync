const http = require("http");
const fs = require("fs");
const path = require("path");

require('dotenv').config();
const port = process.env.PORT_SERVER;
const publicDir = `./${process.env.PUBLIC_DIR}/`;
const indexFile = process.env.INDEX_FILE;

const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".gif": "image/gif",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".wav": "audio/wav",
  ".webm": "video/webm",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};

function routeHandler(request, response) {
  const requestPath = request.url;
  const filePath = publicDir + (requestPath === "/" ? indexFile : requestPath);
  const extName = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == "ENOENT") {
        response.writeHead(404);
        response.end(`Not found: ${requestPath}`);
      } else {
        response.writeHead(500);
        response.end(`Unexpected error: ${error.code}`);
      }
    } else {
      response.writeHead(200, {
        "Cache-Control": "no-store",
        "Content-Type": contentType
      });
      response.end(content, "utf-8");
    }
  });
}

http.createServer((request, response) => {
  routeHandler(request, response);
}).listen(port, () => {
  console.log(new Date, `Listening on localhost port ${port}`);
});

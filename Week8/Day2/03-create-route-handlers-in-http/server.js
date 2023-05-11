const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line


    // define route handlers here

    // GET /
    if (req.method === "GET" && req.url === "/") {
      const responseBody = "Dog Club";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(responseBody);
    }

    // GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      const responseBody = "Dogs index";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(responseBody);
    }

    // GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith("/dogs/")) {
      let urlArray = req.url.split("/");
      if (urlArray.length === 3) {
        let dogID = Number(urlArray[2]);
        if (dogID < nextDogId) {
          const responseBody = `Dog details for dogId: ${dogID}`
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          return res.end(responseBody);
        }
      }
    }

    // GET /dogs/new
    if (req.method === 'GET' && req.url === "/dogs/new") {
      const responseBody = "Dog create form page";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(responseBody);
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      res.statusCode = 302;
      let newDogID = getNewDogId();
      res.setHeader("Location", `/dogs/${newDogID}`);
      return res.end();
    }

    // POST /dogs/:dogId
    if (req.method === 'POST' && req.url.startsWith("/dogs/")) {
      let urlArray = req.url.split("/");
      if (urlArray.length === 3) {
        let dogID = Number(urlArray[2]);
        if (dogID < nextDogId) {
          res.statusCode = 302;
          res.setHeader("Location", req.url);
          return res.end();
        }
      }
    }


    // GET /dogs/:dogId/edit
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      let urlArray = req.url.split('/');
      if (urlArray.length === 4 && urlArray[3] === 'edit') {
        let dogID = urlArray[2];
        let responseBody = `Dog edit form page for dogId: ${dogID}`;
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end(responseBody);
      }
    }
    //


    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
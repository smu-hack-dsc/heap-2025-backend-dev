//* Demo of Node server

// (1) Imports http from the global scope
const http = require("http");

// (2) Creates a server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    // Business logic goes here
    const myMessage = "Hello, World!";

    // Response
    res.end(JSON.stringify({ message: myMessage }));
});

// (3) Starts the server on port 8000
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

//?
//?
//? How to run:
//? 1. CD into this directory
//?    - cd .\1_introduction\demos\
//? 2. Run the script
//?    - node 2_demo_server
//? 3. Test in the browser
//?    - http://localhost:8000
//? 4. Stop the server
//?    - Ctrl + C

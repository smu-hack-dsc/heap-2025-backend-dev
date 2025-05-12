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

// (3) Starts the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//?
//?
//? How to run:
//? 1. CD into this directory
//?    - cd .\1_introduction\demos\
//? 2. Run the script
//?    - node demo_server
//? 3. Test in the browser
//?    - http://localhost:3000
//? 4. Stop the server
//?    - Ctrl + C

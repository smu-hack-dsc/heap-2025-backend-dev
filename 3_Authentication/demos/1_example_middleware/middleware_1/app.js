const express = require("express");

const PORT = 8000;
const app = express();

let counter = 0;

function printConsoleLog(message) {
    console.log(`${counter++} - ${message}`);
}

//* Middleware 1
app.use((req, res, next) => {
    printConsoleLog("Request received");
    next(); //? Proceed to the next middleware or route handler
    printConsoleLog("End of request");

    //? (RECAP)
    //* Previously in node.js, we would write the following:
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Hello World</h1>");
    // res.end();

    //* In Express, we can use the res object directly
    res.send("Hello World");
});

//* Middleware 2
app.use((req, res, next) => {
    printConsoleLog("Processing request");
});

//? (RECAP)
//* Previously in node.js, we would create a server like this:
// const http = require("http");
// const server = http.createServer(app);
// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

//* In Express, we can directly use the app instance to listen on a port
app.listen(PORT, () => {
    console.log(`[SYSTEM] Server started on port ${PORT}...`);
});

//?
//?
//? First time setup
//? 1. CD into this directory
//?    - cd .\3_Authentication\demos\1_example_middleware\middleware_1
//? 2. Install dependencies
//?    - npm install
//? 3. (Optional) View package.json
//?
//? How to run:
//? 1. CD into this directory
//?    - cd .\3_Authentication\demos\1_example_middleware\middleware_1
//? 2. Run the script
//?    - npm run start
//? 3. Test in the browser
//?    - http://localhost:8000
//? 4. Stop the server
//?    - Ctrl + C

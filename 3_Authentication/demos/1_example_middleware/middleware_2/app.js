const express = require("express");

const PORT = 8000;
const app = express();

let reqCounter = 0;
let counter = 0;

function printConsoleLog(message) {
    console.log(`${reqCounter}.${counter++} - ${message}`);
}

//* Middleware 1
app.use((req, res, next) => {
    reqCounter++;
    console.log(`\nRequest number: ${reqCounter}`);

    printConsoleLog("Start of first middleware");
    next(); //? Proceed to the next middleware or route handler
    printConsoleLog("End of first middleware");

    //! Last server console log
    printConsoleLog("End of all middlewares\n");
});

//* Middleware 2
app.use("/second", function (req, res, next) {
    printConsoleLog("Start of second middleware");
    next(); //? Proceed to the next middleware or route handler
    printConsoleLog("End of second middleware");
});

//* Middleware 3
app.use("/", function (req, res, next) {
    printConsoleLog("Start of third middleware");

    res.send("Hello world!"); //? Send a response to the client

    printConsoleLog("End of third middleware");
});

app.listen(PORT, () => {
    console.log(`[SYSTEM] Server started on port ${PORT}...`);
});

//?
//?
//? First time setup
//? 1. CD into this directory
//?    - cd \3_Authentication\demos\1_example_middleware\middleware_2
//? 2. Install dependencies
//?    - npm install
//? 3. (Optional) View package.json
//?
//? How to run:
//? 1. CD into this directory
//?    - cd .\3_Authentication\demos\1_example_middleware\middleware_2
//? 2. Run the script
//?    - npm run start
//? 3. Test in the browser
//?    - http://localhost:8000
//?    - http://localhost:8000/second
//? 4. Stop the server
//?    - Ctrl + C

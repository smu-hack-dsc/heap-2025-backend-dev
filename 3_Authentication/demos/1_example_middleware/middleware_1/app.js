const express = require("express");

const PORT = 8000;
const app = express();

let counter = 0;

//* Print Helper Function
function printConsoleLog(message) {
    console.log(`${counter++} - ${message}`);
}

//* Middleware 1
app.use((req, res, next) => {
    printConsoleLog("Request received");
    next(); //? Proceed to the next middleware or route handler
    printConsoleLog("End of request");

    //! Returns to requester (Client)
    res.send("Hello World");
});

//* Middleware 2
app.use((req, res, next) => {
    printConsoleLog("Processing request");
});

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

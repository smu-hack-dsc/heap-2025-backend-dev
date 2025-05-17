const express = require("express");

const PORT = 8000;
const app = express();

//! Change the secret token to any string you want to use for authentication
const secretToken = "my-secret-token";

//* Authentication middleware
// - Not allowed leads to status:401 with message 'Unauthorized'
// - Allowed leads will continue to the next middleware or route handler
app.use("/", (req, res, next) => {
    //? Check if the authorization header is present and matches the secret token
    const isAuthenticated =
        req.headers["authorization"] === `Bearer ${secretToken}`;

    if (isAuthenticated) {
        next(); //? Proceed to the next middleware or route handler
    } else {
        res.status(401).send("Unauthorized");
    }
    console.log("Request received");
});

//* Route handlers - START
app.get("/hello", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
app.get("/bye", (req, res) => {
    res.send("<h1>Bye bye</h1>");
});
//* Route handlers - END

//* Fallback middleware for handling 404 errors
app.use("/", (req, res) => {
    res.send(`
        <h1>
            This path does not exist.
            <br/>
            <br/>
            Try <a href="/hello">/hello</a>
            <br/>
            <br/>
            Try <a href="/bye">/bye</a>
        <h1/>`);
});

app.listen(PORT, () => {
    console.log(`[SYSTEM] Server started on port ${PORT}...`);
});

//?
//?
//? First time setup
//? 1. CD into this directory
//?    - cd .\3_Authentication\demos\2_example_auth
//? 2. Install dependencies
//?    - npm install
//? 3. (Optional) View package.json
//?
//? How to run:
//? 1. CD into this directory
//?    - cd .\3_Authentication\demos\2_example_auth
//? 2. Run the script
//?    - npm run start
//? 3. Test in the browser
//?    - http://localhost:8000
//?    - http://localhost:8000/hello
//?    - http://localhost:8000/bye
//? 4. Stop the server
//?    - Ctrl + C

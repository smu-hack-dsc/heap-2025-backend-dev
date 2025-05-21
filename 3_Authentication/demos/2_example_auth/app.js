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
app.get("/wheee", (req, res) => {
    const isAuthenticated =
        req.headers["authorization"] === `Bearer ${secretToken}`;

    if (isAuthenticated) res.send("<h1>WHEEEEEEEEEEEEEEEE :D</h1>");
    else
        res.send(
            `<h1>
                You are not allowed!!!
                <sub>whooo</sub>
            </h1>`
        );
});
app.get("/whooo", (req, res) => {
    res.send("<h1>Used to be all 'Wheeee!' But now he's all 'Whooo'.</h1>");
});
//* Route handlers - END

//* Fallback middleware for handling 404 errors
app.use("/", (req, res) => {
    const spaces = "&nbsp;&nbsp;&nbsp;&nbsp;";
    res.send(`
        <h1>
            Are you a <sup>wheee</sup> or a <sub>whooo</sub> person?
            <br/><br/>
            ${spaces}<a href="/wheee">/wheee</a>
            <br/><br/>
            ${spaces}<a href="/whooo">/whooo</a>
            <br/><br/>
            The <sup>WHEEE</sup> balances the <sub>whooo</sub>
            <br/>
            ${spaces}WheeWhooWheeWhoo
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
//?    - http://localhost:8000/wheee
//?    - http://localhost:8000/whooo
//? 4. Stop the server
//?    - Ctrl + C

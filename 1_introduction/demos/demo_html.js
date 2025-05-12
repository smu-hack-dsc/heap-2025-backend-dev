//* Demo of Node server returning HTML
const http = require("http");

const server = http.createServer((req, res) => {
    // (1) Set headers for HTML response
    res.setHeader("Content-Type", "text/html");

    // (2) Set headers for HTML response
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'>");
    res.write("<body>");
    res.write("<h1>Hello World</h1>");
    res.write("</body>");
    res.write("</html>");

    // (2 - Alt) Alternatively, write in one go
    // res.write(getHTML());

    // (3) End the response
    // - This will end the response and send it to the client
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

function getHTML() {
    return `
        <!DOCTYPE html>
        <html>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>`;
}

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

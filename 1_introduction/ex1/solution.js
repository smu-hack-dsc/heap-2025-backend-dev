//* Exercise 1: Project Information Server

// Follow the instructions in the comments to complete the code.
//! (1) Import http from the global scope
const http = require("http");

//! (2) Create a server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    //! (2.1) Store and retrieve your project information
    const projectInfo = getProjectInfo();
    res.end(JSON.stringify(projectInfo));
});

//! (3) Starts the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//* Write your helper function here
function getProjectInfo() {
    const projectTitle = "Backend Workshop";
    const projectDescription = "dotHack Backend Workshop to teach beginners";
    const teamMembers = ["Terris", "Syahmi"];

    return { projectTitle, projectDescription, teamMembers };
}

//?
//?
//? Instructions:
//? 1. CD into this directory
//?    - cd .\1_introduction\ex1\
//? 2. Run the script
//?    - node solution
//? 3. Test in the browser
//?    - http://localhost:3000
//? 4. Stop the server
//?    - Ctrl + C

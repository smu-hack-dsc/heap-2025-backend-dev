//* Exercise 2: Project Information Web Server

// Follow the instructions in the comments to complete the code.
const http = require("http");

const server = http.createServer((req, res) => {
    //! (1) Set headers for HTML response

    //! (2) Store and retrieve your project information
    //! - Done for you
    const projectInfo = getProjectInfo();

    //! (3) Get, write, and return HTML
    //! - Get is done for you
    const HTML = getHTML(res, projectInfo);
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

//* Write your helper function here
function getProjectInfo() {
    const projectTitle = "Backend Workshop";
    const projectDescription = "dotHack Backend Workshop to teach beginners";
    const teamMembers = [
        "Terris",
        "Syahmi",
        "Sean",
        "Kai Xun",
        "Minn",
        "Dong Kiat",
    ];

    return { projectTitle, projectDescription, teamMembers };
}

//?
//?
//? Instructions:
//? 1. CD into this directory
//?    - cd .\1_introduction\ex2\
//? 2. Run the script
//?    - node solution
//? 3. Test in the browser
//?    - http://localhost:8000
//? 4. Stop the server
//?    - Ctrl + C
//?

//* Provided helper function
function getHTML(res, projectInfo) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Project Information</title>
            </head>
            ${getStyleCSS()}
            <body>
                <h1>My Project Information</h1>
                <h2>${projectInfo.projectTitle}</h2>
                <p>${projectInfo.projectDescription}</p>
                <br />
                <h3>Team Members</h3>
                <ul>
                    ${projectInfo.teamMembers
                        .map((member) => `<li>${member}</li>`)
                        .join("")}
                </ul>
            </body>
        </html>
        `;
}

function getStyleCSS() {
    return `
    <style>
        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            user-select: none;
            animation: fadeIn 1s ease-in-out;
            min-height: 100vh;
            /* Animated gradient background */
            background: linear-gradient(
                135deg,
                #f5f7fa,
                #c3cfe2,
                #ffffff,
                #c3cfe2,
                #f5f7fa
            );
            background-size: 400% 400%;
            animation: fadeIn 1s ease-in-out,
                gradientMove 15s ease-in-out infinite;
        }

        @keyframes gradientMove {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        h1,
        h2,
        h3 {
            text-align: center;
            color: #2c3e50;
            margin-top: 1rem;
            transition: color 0.3s ease;
        }
        h1:hover,
        h2:hover,
        h3:hover {
            color: #2980b9;
        }
        p {
            max-width: 600px;
            margin: 1rem auto;
            font-size: 1.1rem;
            line-height: 1.6;
            padding: 0 1rem;
            text-align: center;
            transition: transform 1s ease;
        }
        p:hover {
            transform: scale(1.5);
            color: #2980b9;
        }
        ul {
            max-width: 400px;
            margin: 1rem auto 2rem auto;
            padding: 0;
            list-style-type: none;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: black;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
        }
        ul:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        li {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #eee;
            background: white;
            transition: background-color 0.3s ease, color 0.3s ease,
                transform 0.3s ease;
        }
        li:last-child {
            border-bottom: none;
        }
        li:hover {
            background-color: #2980b9;
            font-weight: bold;
            color: white;
            transform: translateX(10px);
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @media (max-width: 600px) {
            p,
            ul {
                max-width: 90%;
            }
            h1 {
                font-size: 1.5rem;
            }
            h2,
            h3 {
                font-size: 1.2rem;
            }
        }
    </style>
    `;
}

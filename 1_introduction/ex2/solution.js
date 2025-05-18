//* Exercise 2: Project Information Web Server

// Follow the instructions in the comments to complete the code.
const http = require("http");

const server = http.createServer((req, res) => {
    //! (1) Set headers for HTML response
    res.setHeader("Content-Type", "text/html");

    //! (2) Store and retrieve your project information
    const projectInfo = getProjectInfo();

    //! (3) Get, write, and return HTML
    const HTML = getHTML(projectInfo);
    res.write(HTML);
    res.end();
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

//* Write your helper function here
function getProjectInfo() {
    const projectTitle = "Expedition 33";
    const projectDescription = "When One Falls. We Continue.";
    const teamMembers = ["Gustave", "Maelle", "Lune", "Sciel"];

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
function getHTML(projectInfo) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${projectInfo.projectTitle}</title>
            ${getStyleCSS()}
        </head>
        <body>
            <video id="bg-video" autoplay muted loop playsinline>
                <source src="https://motionbgs.com/media/7744/expedition-33.960x540.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="content">
                <div>
                    <h1>${projectInfo.projectTitle}</h1>
                    <p>${projectInfo.projectDescription}</p>
                </div>
                <div>
                    <h3>Expedition Team</h3>
                    <ul>
                        ${projectInfo.teamMembers
                            .map((member) => `<li>${member}</li>`)
                            .join("")}
                    </ul>
                </div>
            </div>
        </body>
        </html>
    `;
}

function getStyleCSS() {
    return `
    <style>
        html, body {
            height: 100dvh;
            margin: 0;
            padding: 0;
            user-select:none;
        }
        body {
            min-height: 100vh;
            min-width: 100vw;
            overflow-x: hidden;
            position: relative;
            display: flex;
            align-content: center;
            align-items: center;
        }
        #bg-video {
            position: fixed;
            top: 50%;
            left: 50%;
            min-width: 100vw;
            min-height: 100vh;
            width: auto;
            height: auto;
            z-index: -1;
            transform: translate(-50%, -50%);
            object-fit: cover;
            object-position: center center;
            background: #000;
            opacity: 95%;
        }
        .content {
            width: 80%;
            max-width: 800px;
            position: relative;
            z-index: 1;
            margin: 0 auto;
            padding: 5rem 1.5rem;
            background: rgba(0, 0, 0, 0.55);
            border-radius: 18px;
            box-shadow: 0 8px 1000px 0 rgb(36, 36, 39);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            color: #fff;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            transition: 1s;
        }
        .content:hover {
            box-shadow: 0 8px 1px 0 rgb(36, 36, 39);
        }
        h1, h2, h3 {
            text-align: center;
            color: #e6e6e6;
            margin-top: 1rem;
            margin-bottom: 1rem;
            transition: color 0.5s;
        }
        p {
            max-width: 600px;
            margin: 1rem auto;
            font-size: 1.15rem;
            line-height: 1.6;
            text-align: center;
            transition: 1s;
        }
        p:hover {
            transform: scale(1.5);
            color: #000000;
            font-weight: bold;
            -webkit-text-stroke: 0.5px #ffffff;
        }
        ul {
            max-width: 400px;
            margin: 1rem auto 2rem auto;
            padding: 0;
            list-style-type: none;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            background: rgba(20, 20, 20, 0.7);
            overflow: hidden;
            transition: box-shadow 0.3s;
        }
        ul:hover {
            box-shadow: 0 8px 16px rgba(0,0,0,0.25);
        }
        li {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #444;
            background: transparent;
            color: #fff;
            transition: background-color 0.3s, color 0.3s, transform 0.3s;
        }
        li:last-child {
            border-bottom: none;
        }
        li:hover {
            background-color: #ffffff;
            color: #222;
            font-weight: bold;
            transform: translateX(10px);
        }
        @media (max-width: 700px) {
            p, ul {
                max-width: 95vw;
            }
            h1 {
                font-size: 1.5rem;
            }
            h2, h3 {
                font-size: 1.2rem;
            }
        }
        @media (max-width: 500px) {
            .content {
                padding: 1rem 0.5rem;
            }
            h1, h2, h3 {
                font-size: 1.1rem;
            }
        }
    </style>
    `;
}

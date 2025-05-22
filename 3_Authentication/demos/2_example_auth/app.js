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

    if (isAuthenticated) res.send(getHTML("WHEEE"));
    else
        res.send(
            `<h1>
                You are not allowed!!!
                <sub>whooo</sub>
            </h1>`
        );
});
app.get("/whooo", (req, res) => {
    res.send(getHTML("WHOOO"));
});
//* Route handlers - END

//* Fallback middleware for handling 404 errors
app.use("/", (req, res) => {
    res.send(getHTML("Home"));
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

//* Provided helper function
function getHTML(route) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Expedition 33</title>

            ${getStyleCSS()}
        </head>
        <body>
            <video id="bg-video" autoplay muted loop playsinline>
                <source src="https://motionbgs.com/media/7744/expedition-33.960x540.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="app-container">
            ${
                route === "Home"
                    ? getHTMLHome()
                    : route === "WHEEE"
                    ? getHTMLWHEEE()
                    : route === "WHOOO"
                    ? getHTMLWHOOO()
                    : `
                    <h1>
                        You are not allowed!!!
                        <sub>whooo</sub>
                    </h1>`
            }
            </div>
        </body>
        </html>
    `;
}

function getHTMLHome() {
    return `
        <div id="home">
            <!-- Header -->
            <header>
                <div class="subtitle">CLAIR OBSCUR</div>
                <h1>EXPEDITION 33</h1>
                <div class="tagline"><span>«</span> WHEEE OR WHOOO? <span>»</span></div>
                <div class="separator"></div>
            </header>
            
            <!-- Main content -->
            <main>
                <section class="path-selection">
                <div class="section-header">
                    <div class="separator-line"></div>
                    <h2>Choose Your Path</h2>
                    <div class="separator-line"></div>
                </div>
                
                <div class="path-grid">
                    <div class="path-card">
                    <div class="path-card-border"></div>
                    <a href="/wheee" class="path-card-content">
                        <h3>WHEEE</h3>
                        <div class="path-card-footer">
                        <span class="path-label">/wheee</span>
                        <span class="path-arrow">»</span>
                        </div>
                    </a>
                    </div>
                    
                    <div class="path-card">
                    <div class="path-card-border"></div>
                    <a href="/whooo" class="path-card-content">
                        <h3>WHOOO</h3>
                        <div class="path-card-footer">
                        <span class="path-label">/whooo</span>
                        <span class="path-arrow">»</span>
                        </div>
                    </a>
                    </div>
                </div>
                </section>
                
                <section class="bottom-section">
                <div class="quote-container">
                    <div class="quote">
                    <p>"The <span>WHEEE</span> balances the <span>WHOOO</span>"</p>
                    <p class="quote-author">— WheeWhooWheeWhoo</p>
                    </div>
                </div>
                </section>
            </main>
            </div>
        </div>
    `;
}

function getHTMLWHEEE() {
    return `
        <div id="wheee">
            <!-- Header -->
            <header>
                <a href="/" class="back-link">« BACK</a>
                <h1 class="purple-gradient">WHEEEEEEEEEEE</h1>
                <div class="separator"></div>
            </header>
            
            <!-- Main content -->
            <main>
                <div class="content-box">
                <h2>WHEEEEEEEEEEEEEEEE :D</h2>
                <div class="quote-container">
                    <div class="quote">
                    <p>"Time for a <span>swim swim</span>"</p>
                    <p class="quote-author">— Esquie</p>
                    </div>
                </div>
                </div>
                
                <div class="button-container">
                <a href="/" class="action-button">Return to Expedition</a>
                </div>
            </main>
            </div>
        </div>
    `;
}

function getHTMLWHOOO() {
    return `
        <div id="whooo" class="page">
            <!-- Header -->
            <header>
                <a href="/" class="back-link">« BACK</a>
                <h1 class="blue-gradient">WHOOO</h1>
                <div class="separator"></div>
            </header>
            
            <!-- Main content -->
            <main>
                <div class="content-box">
                <h2>
                    You used to be all 'Wheeee!'
                    <br/>
                    But now you're all 'Whooo'
                </h2>
                <div class="quote-container">
                    <div class="quote">
                    <p>"I can be sad, even rad, <span>but never mad</span>"</p>
                    <p class="quote-author">— Esquie</p>
                    </div>
                </div>
                </div>
                
                <div class="button-container">
                <a href="/" class="action-button">Return to Expedition</a>
                </div>
            </main>
            </div>
        </div>
    `;
}

function getStyleCSS() {
    return `
    <style>
        /* Base styles */
        @font-face {
            font-family: "Expedition Serif";
            src: url("https://fonts.cdnfonts.com/css/times-new-roman") format("woff2");
            font-weight: normal;
            font-style: normal;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
            transition: all 0.3s ease;
        }

        body {
            background-color: #000;
            color: #fff;
            font-family: "Times New Roman", serif;
            line-height: 1.6;
            overflow-x: hidden;
        }

        a {
            color: inherit;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        /* Layout */
        .app-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 50px;
        }
        
        #home, #wheee, #whooo {
            padding: 50px;
            background-color: rgba(0, 0, 0, 0.6);
            min-height: 85dvh
        }

        /* Typography */
        h1 {
            font-size: 4rem;
            font-weight: bold;
            letter-spacing: -0.025em;
            margin-bottom: 0.5rem;
            background: linear-gradient(to bottom, #ffecd1, #d4af37, #aa8a3a);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-align: center;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: rgba(217, 165, 66, 0.9);
            text-align: center;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
            color: #d9a542;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .subtitle {
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(217, 165, 66, 0.8);
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .tagline {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 0.5rem;
            color: rgba(217, 165, 66, 0.8);
            font-size: 1.25rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .purple-gradient {
            background: linear-gradient(to bottom, #d8b8ff, #a855f7, #7e22ce);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .blue-gradient {
            background: linear-gradient(to bottom, #bfdbfe, #3b82f6, #1d4ed8);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        /* Background */
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
            opacity: 40%;
        }

        /* Header */
        header {
            margin-bottom: 2rem;
            text-align: center;
            position: relative;
        }

        .back-link {
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: rgba(217, 165, 66, 0.8);
            margin-bottom: 0.5rem;
            display: inline-block;
        }

        .back-link:hover {
            color: rgba(217, 165, 66, 1);
        }

        /* Separator */
        .separator {
            height: 1px;
            width: 100%;
            margin: 1.5rem 0;
            opacity: 0.7;
            background-image: url("https://www.expedition33.com/images/global/sep-gold.png");
        }

        .separator-line {
            height: 1px;
            flex: 1;
            opacity: 0.7;
            background-image: url("https://www.expedition33.com/images/global/sep-gold.png");
        }

        /* Path Selection */
        .path-selection {
            margin-bottom: 3rem;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            position: relative;
        }

        .section-header h2 {
            padding: 0 1rem;
            background-color: #000;
            position: relative;
        }

        .path-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
            max-width: 800px;
            margin: 0 auto;
        }

        .path-card {
            position: relative;
            group-hover-border-opacity: 0.7;
            transition: all 0.3s ease;
        }

        .path-card-border {
            position: absolute;
            inset: -1px;
            border: 1px solid rgba(217, 165, 66, 0.4);
            border-radius: 0.125rem;
            transition: all 0.3s ease;
        }

        .path-card:hover .path-card-border {
            border-color: rgba(217, 165, 66, 0.7);
        }

        .path-card-content {
            display: block;
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(4px);
            padding: 2rem;
            border-radius: 0.125rem;
            transition: all 0.3s ease;
        }

        .path-card:hover .path-card-content {
            background-color: rgba(0, 0, 0, 0.7);
        }

        .path-card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(217, 165, 66, 0.3);
            padding-top: 1rem;
        }

        .path-label {
            font-size: 1.25rem;
            color: rgba(217, 165, 66, 0.8);
        }

        .path-card:hover .path-label {
            color: rgba(212, 175, 55, 1);
        }

        .path-arrow {
            color: rgba(217, 165, 66, 0.8);
            transition: transform 0.3s ease;
        }

        .path-card:hover .path-arrow {
            transform: translateX(0.5rem);
        }

        /* Quote */
        .quote-container {
            display: flex;
            justify-content: center;
        }

        .quote {
            border-left: 2px solid rgba(217, 165, 66, 0.3);
            padding: 1rem 1.5rem;
            max-width: 30rem;
            background-image: linear-gradient(
                90deg,
                rgba(217, 165, 66, 0.1) 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }

        .quote p {
            color: rgba(217, 165, 66, 0.8);
            font-style: italic;
            font-family: "Times New Roman", serif;
            margin: 0px !important;
        }

        .quote span {
            color: #d9a542;
            font-weight: 500;
        }

        .quote-author {
            font-size: 0.875rem;
            color: rgba(217, 165, 66, 0.5);
            margin-top: 0.5rem;
        }

        /* Bottom section */
        .bottom-section {
            padding-top: 1rem;
        }

        .action-button {
            margin: 0 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: rgba(217, 165, 66, 0.8);
            border: 1px solid rgba(217, 165, 66, 0.4);
            padding: 0.75rem 2rem;
            transition: all 0.3s ease;
        }

        .action-button:hover {
            border-color: rgba(217, 165, 66, 0.7);
            color: rgba(212, 175, 55, 1);
            
            // Animate pulse
            animation-delay: 0.5s;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-name: pulse;
        }

        .button-container {
            display: flex;
            justify-content: center;
            margin-top: 3rem;
        }

        /* Content box */
        .content-box {
            max-width: 1000px;
            margin: 0 auto;
            border: 1px solid rgba(217, 165, 66, 0.4);
            border-radius: 0.125rem;
            padding: 4rem 2rem;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
        }

        .content-box:hover {
            border-color: rgba(217, 165, 66, 0.7);
        }

        .content-box h2 {
            margin-bottom: 1.5rem;
        }

        .content-box p {
            color: rgba(217, 165, 66, 0.8);
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1.125rem;
        }

        .content-box:hover h2,
        .content-box:hover p,
        .content-box:hover span {
            color: rgba(212, 175, 55, 1);
        }

        /* Animations */
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        /* Responsive styles */
        @media (min-width: 768px) {
            h1 {
                font-size: 5rem;
            }

            .path-grid {
                grid-template-columns: 1fr 1fr;
            }
        }
    </style>
    `;
}

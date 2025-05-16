const express = require("express");
const cors = require("cors");
require("./models/connection");

// PORT for the server
const PORT = 8000;
const app = express();

// Warn if Supabase credentials are not set
if (process.env.SUPABASE_URL === "YOUR_SUPABASE_URL" || process.env.SUPABASE_KEY === "YOUR_SUPABASE_KEY") {
    console.warn("[WARNING] Supabase URL or Key not set in environment variables!");
}

// To allow express to parse JSON data
app.use(express.json());
// For CORS support
app.use(cors());

// Check if the server is running
app.get("/health", (req, res) => {
    return res.status(200).json({
        message: "Server is up and running!",
    });
});

// Importing routers for your application
app.use("/", require("./routers/taskRouter"));

// Start the server
app.listen(PORT, () => {
    console.log(`[SYSTEM] Server started on port ${PORT}...`);
});
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { clerkClient, requireAuth, getAuth } = require("@clerk/express");

const PORT = 8000;
const app = express();

if (
    process.env.CLERK_PUBLISHABLE_KEY === "YOUR_CLERK_PUBLISHABLE_KEY" ||
    process.env.CLERK_SECRET_KEY === "YOUR_CLERK_SECRET_KEY"
) {
    console.warn("[WARNING] Clerk is not set in environment variables!");
}

app.use(express.json());
app.use(cors());

// Use requireAuth() to protect this route
// If user isn't authenticated, requireAuth() will redirect to '/'
app.get("/protected", requireAuth(), async (req, res) => {
    console.log("Accessing protected route...");

    // Use `getAuth()` to get the user's `userId`
    const { userId } = getAuth(req);

    // Use Clerk's JavaScript Backend SDK to get the user's User object
    const user = await clerkClient.users.getUser(userId);

    return res.json({ user });
});

app.use("/", (req, res, next) => {
    res.send("homepage");
    console.log("homepage");
});

// Start the server
app.listen(PORT, () => {
    console.log(`[SYSTEM] Server started on port ${PORT}...`);
});

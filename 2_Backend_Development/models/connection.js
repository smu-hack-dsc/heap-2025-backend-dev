const { createClient } = require("@supabase/supabase-js");

// Exercise 2: Connecting your server to DB

// Temporary placeholder, delete this line after creating a .env file
const supabase = createClient(
  "https://your-supabase-url.supabase.co",
  "your-supabase-key"
);

// TODO: To create a .env file that contains the following variables, and comment off below line:
// - SUPABASE_URL
// - SUPABASE_KEY
// const supabase = createClient(
//   process.env.SUPABASE_URL || "YOUR_SUPABASE_URL",
//   process.env.SUPABASE_KEY || "YOUR_SUPABASE_KEY"
// );

module.exports = supabase;
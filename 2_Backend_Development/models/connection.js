const { createClient } = require("@supabase/supabase-js");

// Exercise 3: Connecting your server to DB

// TODO: To create a .env file that contains the following variables:
// - SUPABASE_URL
// - SUPABASE_KEY
const supabase = createClient(
  process.env.SUPABASE_URL || "YOUR_SUPABASE_URL",
  process.env.SUPABASE_KEY || "YOUR_SUPABASE_KEY"
);

module.exports = supabase;
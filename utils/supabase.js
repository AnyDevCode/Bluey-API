const Supabase = require("@supabase/supabase-js");

const supabase = Supabase.createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = supabase;

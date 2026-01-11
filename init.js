// init.js - Handles Supabase Connection
// Developer: Abd-Alrahman.Gamal (01001395058)

const SUPABASE_URL = 'https://egyzqazuxtmhiloecdpt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneXpxYXp1eHRtaGlsb2VjZHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNzA5ODYsImV4cCI6MjA4MDg0Njk4Nn0.RUFQbeOlyMgW2eohTdafDrisUt41bnQMNvOf4TJ1sgE';

// Create the client globally so all pages can use it
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Supabase Connected Successfully via init.js");
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://kyuhhaybrwwhtqwckgyw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dWhoYXlicnd3aHRxd2NrZ3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNzUwNTMsImV4cCI6MjAwODk1MTA1M30.Uw28t6GBsJ10yq0sossKkNbwHZX3Ie1wwFoG6SnIYuU"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


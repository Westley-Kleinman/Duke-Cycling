# Supabase Database Setup

## Current Status
- ✅ GitHub Secret: `NEXT_PUBLIC_SUPABASE_ANON_KEY` is configured
- ❌ Database Table: Needs to be created/configured

## Database Schema Required

The application expects a `rides` table with the following structure:

```sql
CREATE TABLE rides (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  type VARCHAR(50) NOT NULL,
  pace VARCHAR(10) NOT NULL,
  location VARCHAR(255) NOT NULL,
  route VARCHAR(255) NOT NULL,
  distance VARCHAR(50) NOT NULL,
  notes TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Setup Instructions

1. Go to your Supabase project: https://supabase.com/dashboard/projects
2. Navigate to the SQL Editor
3. Run the CREATE TABLE statement above
4. Set up Row Level Security (RLS):

```sql
-- Enable RLS
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;

-- Allow public to read approved rides
CREATE POLICY "Public can view approved rides" ON rides
  FOR SELECT USING (approved = true);

-- Allow public to insert rides (for submissions)
CREATE POLICY "Public can insert rides" ON rides
  FOR INSERT WITH CHECK (true);
```

5. Test the deployment by submitting a ride

## Verification

After setting up the database, submitted rides should appear immediately on the website.

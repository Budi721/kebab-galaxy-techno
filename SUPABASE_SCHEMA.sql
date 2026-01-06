-- Kebab Galaxy Landing Page - Supabase Schema
-- Run this SQL in your Supabase SQL Editor

-- Table: brand (single row for brand profile)
CREATE TABLE IF NOT EXISTS brand (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  brand_name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  address TEXT,
  google_maps_embed_url TEXT,
  whatsapp_link TEXT,
  instagram_link TEXT,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: menu (menu items)
CREATE TABLE IF NOT EXISTS menu (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default brand data
INSERT INTO brand (brand_name, tagline, description, address, whatsapp_link, instagram_link)
VALUES (
  'Kebab Galaxy',
  'Kebab Lezat untuk Anda',
  'Kebab Galaxy menyajikan kebab lezat dengan cita rasa autentik. Dibuat dengan bahan-bahan pilihan dan resep rahasia yang telah teruji.',
  'Jl. Contoh No. 123, Jakarta',
  'https://wa.me/6281234567890',
  'https://instagram.com/kebabgalaxy'
)
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS) - allow public read access
ALTER TABLE brand ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on brand" ON brand
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on menu" ON menu
  FOR SELECT USING (true);

-- Insert sample menu items (optional - remove if you want to add manually)
INSERT INTO menu (name, description, price, category, image_url)
VALUES
  ('Kebab Regular', 'Kebab dengan daging sapi pilihan, sayuran segar, dan saus spesial', 25000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Kebab Jumbo', 'Kebab ekstra besar dengan daging double dan topping lengkap', 35000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Kebab Spicy', 'Kebab dengan level pedas yang bisa disesuaikan', 28000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Minuman Es Jeruk', 'Es jeruk segar untuk menemani kebab Anda', 8000, 'Minuman', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800'),
  ('Minuman Es Teh', 'Es teh manis segar', 5000, 'Minuman', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800')
ON CONFLICT DO NOTHING;




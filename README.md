# Kebab Galaxy Landing Page

Modern minimal landing page untuk brand Kebab Galaxy menggunakan Next.js App Router, Tailwind CSS, shadcn/ui, dan Supabase.

## 🎨 Brand Information

- **Brand Name**: Kebab Galaxy
- **Primary Color**: Yellow (dominant)
- **Accent Color**: Red

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- Supabase account (gratis)

### Installation

1. Clone repository ini
2. Install dependencies:

```bash
npm install
# atau
yarn install
```

3. Setup environment variables:

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Setup Supabase database (lihat bagian Supabase Setup di bawah)

5. Run development server:

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🗄️ Supabase Setup

### 1. Buat Supabase Project

1. Kunjungi [https://app.supabase.com](https://app.supabase.com)
2. Buat project baru
3. Copy **Project URL** dan **anon/public key** dari Settings > API
4. Masukkan ke file `.env.local`

### 2. Buat Database Tables

Jalankan SQL berikut di Supabase SQL Editor:

```sql
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
);

-- Enable Row Level Security (RLS) - allow public read access
ALTER TABLE brand ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on brand" ON brand
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access on menu" ON menu
  FOR SELECT USING (true);
```

### 3. Insert Sample Menu Data

```sql
-- Insert sample menu items
INSERT INTO menu (name, description, price, category, image_url)
VALUES
  ('Kebab Regular', 'Kebab dengan daging sapi pilihan, sayuran segar, dan saus spesial', 25000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Kebab Jumbo', 'Kebab ekstra besar dengan daging double dan topping lengkap', 35000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Kebab Spicy', 'Kebab dengan level pedas yang bisa disesuaikan', 28000, 'Kebab', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800'),
  ('Minuman Es Jeruk', 'Es jeruk segar untuk menemani kebab Anda', 8000, 'Minuman', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800'),
  ('Minuman Es Teh', 'Es teh manis segar', 5000, 'Minuman', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800');
```

## 📁 Project Structure

```
/app
  /page.tsx              # Main landing page (Server Component)
  /layout.tsx            # Root layout with metadata
  /globals.css           # Global styles with Tailwind
  /components
    Hero.tsx             # Hero section with brand name, tagline, CTA
    MenuSection.tsx       # Dynamic menu display from Supabase
    ProfileSection.tsx    # About/Profile section with description & address
    LocationSection.tsx  # Google Maps embed
    Footer.tsx           # Footer with social links
    /ui                  # shadcn/ui components
      button.tsx
      card.tsx
      badge.tsx
  /lib
    supabase.ts          # Supabase client (server-side)
    types.ts             # TypeScript types for menu & brand data
/lib
  utils.ts               # Utility functions (cn helper)
```

## 🎨 Customization

### Brand Colors

Warna brand sudah dikonfigurasi di `tailwind.config.ts`:

- **Primary (Yellow)**: `brand-primary` - `#FCD34D`
- **Accent (Red)**: `brand-accent` - `#EF4444`

Untuk mengubah warna, edit `tailwind.config.ts`:

```typescript
brand: {
  primary: {
    DEFAULT: "#YOUR_YELLOW_COLOR",
    // ...
  },
  accent: {
    DEFAULT: "#YOUR_RED_COLOR",
    // ...
  },
}
```

### Logo

Untuk menambahkan logo:

1. Letakkan file logo di folder `public/` (misalnya `public/logo.png`)
2. Edit `app/components/Hero.tsx` dan ganti placeholder dengan:

```tsx
<Image
  src="/logo.png"
  alt={brand.brand_name}
  width={200}
  height={200}
  className="object-contain"
/>
```

### Google Maps Embed URL

Untuk mendapatkan Google Maps embed URL:

1. Buka Google Maps dan cari lokasi toko
2. Klik "Share" > "Embed a map"
3. Copy iframe src URL
4. Paste ke field `google_maps_embed_url` di tabel `brand` di Supabase

## 📚 Reference Components

Project ini menggunakan pola desain dari folder `reference_component/`:

- Hero patterns: `reference_component/templates/primer/.../Hero.tsx`
- Footer patterns: `reference_component/templates/primer/.../Footer.tsx`
- Card/Product patterns: `reference_component/react/components/ecommerce/`

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase
- **Language**: TypeScript

## 📝 Notes

- Semua data (menu dan brand) diambil dari Supabase
- Tidak ada authentication - data bersifat public read-only
- Server Components digunakan untuk data fetching
- Design mengikuti pola modern minimal dengan brand colors (yellow/red)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Other Platforms

Project ini bisa di-deploy ke platform apapun yang support Next.js:
- Netlify
- Railway
- AWS Amplify
- dll

## 📄 License

MIT




// TypeScript types for Supabase data

export interface Menu {
  id: string
  name: string
  description: string | null
  price: number
  category: string | null
  image_url: string | null
  created_at?: string
  updated_at?: string
}

export interface Brand {
  id: string
  brand_name: string
  tagline: string | null
  description: string | null
  address: string | null
  google_maps_embed_url: string | null
  whatsapp_link: string | null
  instagram_link: string | null
  logo_url: string | null
  created_at?: string
  updated_at?: string
}




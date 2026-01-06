import { supabase } from '@/app/lib/supabase'
import { Menu, Brand } from '@/app/lib/types'
import { Hero } from '@/app/components/Hero'
import { FeaturesSection } from '@/app/components/FeaturesSection'
import { HighlightsSection } from '@/app/components/HighlightsSection'
import { MenuSection } from '@/app/components/MenuSection'
import { TestimonialsSection } from '@/app/components/TestimonialsSection'
import { ProfileSection } from '@/app/components/ProfileSection'
import { LocationSection } from '@/app/components/LocationSection'
import { Footer } from '@/app/components/Footer'

/**
 * Main Landing Page
 * 
 * Server Component that fetches data from Supabase
 * Fetches brand and menu data in parallel
 */
export default async function Home() {
  // Check if Supabase is configured
  const isSupabaseConfigured = 
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && 
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let brand: Brand
  let menuItems: Menu[] = []

  if (isSupabaseConfigured) {
    try {
      // Fetch brand and menu data in parallel
      const [brandResult, menuResult] = await Promise.all([
        supabase
          .from('brand')
          .select('*')
          .single(),
        supabase
          .from('menu')
          .select('*')
          .order('category', { ascending: true })
          .order('name', { ascending: true }),
      ])

      brand = brandResult.data || {
        id: '',
        brand_name: 'Kebab Galaxy',
        tagline: 'Kebab Lezat untuk Anda',
        description: null,
        address: null,
        logo_url: null,
        google_maps_embed_url: null,
        whatsapp_link: null,
        instagram_link: null,
      }

      menuItems = menuResult.data || []
    } catch (error) {
      // Fallback if Supabase query fails
      console.error('Error fetching data from Supabase:', error)
      brand = {
        id: '',
        logo_url: null,
        brand_name: 'Kebab Galaxy',
        tagline: 'Kebab Lezat untuk Anda',
        description: 'Kebab Galaxy menyajikan kebab lezat dengan cita rasa autentik.',
        address: null,
        google_maps_embed_url: null,
        whatsapp_link: null,
        instagram_link: null,
      }
    }
  } else {
    // Fallback data when Supabase is not configured
    brand = {
      id: '',
      logo_url: null,
      brand_name: 'Kebab Galaxy',
      tagline: 'Kebab Lezat untuk Anda',
      description: 'Kebab Galaxy menyajikan kebab lezat dengan cita rasa autentik. Dibuat dengan bahan-bahan pilihan dan resep rahasia yang telah teruji.',
      address: null,
      google_maps_embed_url: null,
      whatsapp_link: null,
      instagram_link: null,
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Hero brand={brand} />
      <FeaturesSection />
      <HighlightsSection />
      <MenuSection menuItems={menuItems} />
      <TestimonialsSection />
      <ProfileSection brand={brand} />
      <LocationSection brand={brand} />
      <Footer brand={brand} />
    </main>
  )
}




import { Brand } from '@/app/lib/types'

interface LocationSectionProps {
  brand: Brand
}

/**
 * Location Section Component
 * 
 * Design: Embedded Google Maps iframe
 * Responsive container with proper aspect ratio
 */
export function LocationSection({ brand }: LocationSectionProps) {
  if (!brand.google_maps_embed_url) {
    return null
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lokasi Kami
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Kunjungi toko kami
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <iframe
              src={brand.google_maps_embed_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}




import { Brand } from '@/app/lib/types'

interface ProfileSectionProps {
  brand: Brand
}

/**
 * Profile/About Section Component
 * 
 * Reference patterns from:
 * - reference_component/react/components/marketing/sections/content-sections/centered.jsx
 * 
 * Design: Centered content section with brand description and address
 * Clean typography with proper spacing
 */
export function ProfileSection({ brand }: ProfileSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-brand-primary/5 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tentang{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              {brand.brand_name || 'Kebab Galaxy'}
            </span>
          </h2>
        </div>
        
        {brand.description && (
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-xl leading-8 text-gray-700">{brand.description}</p>
          </div>
        )}
        
        {brand.address && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Alamat Kami
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {brand.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}




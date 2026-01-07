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
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-brand-primary/5 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl sm:w-64 sm:h-64"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl sm:w-64 sm:h-64"></div>
      </div>

      <div className="relative mx-auto max-w-3xl text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Tentang{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              {brand.brand_name || 'Kebab Galaxy'}
            </span>
          </h2>
        </div>
        
        {brand.description && (
          <div className="mt-6 max-w-2xl mx-auto sm:mt-8 lg:mt-10">
            <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:text-xl">{brand.description}</p>
          </div>
        )}
        
        {brand.address && (
          <div className="mt-8 max-w-2xl mx-auto sm:mt-10 lg:mt-12">
            <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100 sm:rounded-2xl sm:p-8">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 sm:text-xl">
                <span className="text-xl sm:text-2xl">📍</span>
                Alamat Kami
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                {brand.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}




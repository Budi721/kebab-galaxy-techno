import { UtensilsCrossed, Clock, Award, Heart } from 'lucide-react'

/**
 * Features/Benefits Section Component
 * 
 * Highlights key benefits dengan icons dan copywriting yang menarik
 * Design dengan brand colors (yellow/red)
 */
export function FeaturesSection() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Bahan Premium',
      description: 'Kami hanya menggunakan daging dan sayuran segar pilihan terbaik untuk setiap kebab kami.',
      color: 'from-brand-primary to-brand-primary-dark'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Dibuat fresh setiap hari, tidak ada yang disimpan semalam. Kualitas terjamin!',
      color: 'from-brand-accent to-brand-accent-dark'
    },
    {
      icon: Award,
      title: 'Resep Autentik',
      description: 'Resep rahasia turun temurun yang telah teruji dan disukai ribuan pelanggan.',
      color: 'from-brand-primary to-brand-primary-dark'
    },
    {
      icon: Heart,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap kebab dibuat dengan penuh cinta dan perhatian untuk memberikan pengalaman terbaik.',
      color: 'from-brand-accent to-brand-accent-dark'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Mengapa Pilih{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Kebab Galaxy?
            </span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            Kami berkomitmen memberikan pengalaman kuliner terbaik dengan kualitas premium
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 sm:rounded-2xl sm:p-8"
              >
                {/* Icon dengan gradient background */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} shadow-lg sm:h-16 sm:w-16 sm:rounded-xl`}>
                  <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                
                <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-6 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


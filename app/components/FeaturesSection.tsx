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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Pilih{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Kebab Galaxy?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Kami berkomitmen memberikan pengalaman kuliner terbaik dengan kualitas premium
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon dengan gradient background */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
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


/**
 * Highlights/Stats Section Component
 * 
 * Menampilkan key statistics dengan visual yang menarik
 * Design dengan brand colors untuk emphasis
 */
export function HighlightsSection() {
  const stats = [
    {
      number: '1000+',
      label: 'Pelanggan Setia',
      description: 'Lebih dari 1000 pelanggan puas',
      icon: '👥'
    },
    {
      number: '4.9',
      label: 'Rating Bintang',
      description: 'Dari ratusan review',
      icon: '⭐'
    },
    {
      number: '5+',
      label: 'Tahun Berpengalaman',
      description: 'Melayani dengan dedikasi',
      icon: '🏆'
    },
    {
      number: '100%',
      label: 'Fresh Daily',
      description: 'Selalu fresh setiap hari',
      icon: '🔥'
    }
  ]

  return (
    <section className="relative bg-gradient-to-br from-brand-primary/10 via-white to-brand-accent/10 py-24 sm:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kebab Galaxy dalam{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Angka
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Bukti nyata kualitas dan dedikasi kami dalam menyajikan kebab terbaik
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{stat.icon}</div>
              
              {/* Number dengan gradient */}
              <div className="text-4xl font-extrabold bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent sm:text-5xl">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="mt-2 text-lg font-semibold text-gray-900">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="mt-1 text-sm text-gray-600">
                {stat.description}
              </div>

              {/* Hover effect decorative element */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/**
 * Testimonials/Reviews Section Component
 * 
 * Menampilkan customer testimonials dengan star ratings
 * Design dengan cards dan brand colors untuk visual interest
 */
export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Setia',
      content: 'Kebab Galaxy adalah yang terbaik! Rasanya autentik dan selalu fresh. Sudah jadi langganan selama 2 tahun.',
      rating: 5,
      avatar: '👨'
    },
    {
      name: 'Sari Indah',
      role: 'Food Enthusiast',
      content: 'Dagingnya empuk, sayurannya segar, dan saosnya bikin ketagihan. Worth it banget harganya!',
      rating: 5,
      avatar: '👩'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Pelanggan',
      content: 'Kualitas premium dengan harga yang reasonable. Pelayanannya juga cepat dan ramah. Recommended!',
      rating: 5,
      avatar: '👨‍💼'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Kata{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Pelanggan Kami
            </span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            Pengalaman nyata dari pelanggan yang telah merasakan kelezatan Kebab Galaxy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:mt-8 sm:gap-6 lg:mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 sm:rounded-2xl sm:p-8"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl text-brand-primary sm:text-2xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                <p>&quot;{testimonial.content}&quot;</p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-xl sm:h-12 sm:w-12 sm:text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 sm:text-base">{testimonial.name}</div>
                  <div className="text-xs text-gray-600 sm:text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-3 right-3 text-4xl font-serif text-brand-primary/10 sm:top-4 sm:right-4 sm:text-6xl">
                &quot;
              </div>

              {/* Hover effect decorative element */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA untuk review */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
            Sudah pernah mencoba?{' '}
            <a
              href="#"
              className="font-semibold text-brand-accent hover:text-brand-accent-dark transition-colors"
            >
              Berikan review Anda →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}


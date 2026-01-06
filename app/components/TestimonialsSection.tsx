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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kata{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Pelanggan Kami
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Pengalaman nyata dari pelanggan yang telah merasakan kelezatan Kebab Galaxy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-brand-primary">⭐</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg leading-8 text-gray-700">
                <p>&quot;{testimonial.content}&quot;</p>
              </blockquote>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-brand-primary/10">
                &quot;
              </div>

              {/* Hover effect decorative element */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA untuk review */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
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


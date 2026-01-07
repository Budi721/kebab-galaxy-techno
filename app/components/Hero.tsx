"use client"

import { Brand } from '@/app/lib/types'
import { Button } from '@/app/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface HeroProps {
  brand: Brand
}

/**
 * Enhanced Hero Section Component
 * 
 * Features:
 * - Compelling copywriting dengan emotional appeal
 * - Gradient background dengan brand colors
 * - Decorative elements dan visual interest
 * - Feature highlights untuk value proposition
 * - Better typography hierarchy
 */
export function Hero({ brand }: HeroProps) {
  const features = [
    'Bahan Pilihan Premium',
    'Resep Autentik & Rahasia',
    'Fresh Setiap Hari',
    'Pesan Langsung via WhatsApp'
  ]

  useEffect(() => {
    console.log(brand)
  }, [brand])

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-primary/20 via-white to-brand-accent/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Content Section */}
            <div className="relative z-10">
              {/* Badge/Tag */}
              <div className="inline-flex items-center rounded-full bg-brand-primary/20 px-3 py-1.5 text-xs font-semibold text-brand-primary-dark mb-4 sm:px-4 sm:py-2 sm:text-sm sm:mb-6">
                <span className="mr-2">⭐</span>
                Kebab Terfavorit di Kota
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl font-extrabold tracking-normal leading-tight pb-2 text-gray-900 sm:text-5xl sm:leading-tight sm:pb-2 lg:text-6xl xl:text-7xl overflow-visible">
                <span className="block">Rasakan Kelezatan</span>
                <span className="block bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
                  {brand.brand_name || 'Kebab Galaxy'}
                </span>
              </h1>

              {/* Subheadline dengan copywriting yang menarik */}
              <p className="mt-4 text-base leading-7 text-gray-700 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl xl:text-2xl">
                {brand.tagline || 'Kebab Lezat dengan Cita Rasa Autentik yang Membuat Anda Ketagihan!'}
              </p>

              {/* Value Proposition */}
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
                Dibuat dengan bahan-bahan pilihan premium dan resep rahasia yang telah teruji. 
                Setiap gigitan adalah perjalanan rasa yang tak terlupakan.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 sm:mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0">
                      <Check className="h-4 w-4 text-brand-accent sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 sm:text-sm lg:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                {brand.whatsapp_link && (
                  <a
                    href={brand.whatsapp_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="w-full text-base px-6 py-5 bg-brand-accent hover:bg-brand-accent-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:w-auto sm:text-lg sm:px-8 sm:py-6"
                    >
                      🛒 Pesan Sekarang via WhatsApp
                    </Button>
                  </a>
                )}
                <a
                  href="#menu"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-base px-6 py-5 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 sm:w-auto sm:text-lg sm:px-8 sm:py-6"
                  >
                    Lihat Menu
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-col gap-4 text-xs text-gray-600 sm:mt-10 sm:flex-row sm:items-center sm:gap-6 sm:text-sm lg:gap-8 lg:mt-12">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">⭐</span>
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span>Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">👥</span>
                  <span className="font-semibold text-gray-900">1000+</span>
                  <span>Pelanggan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🔥</span>
                  <span className="font-semibold text-gray-900">Fresh</span>
                  <span>Daily</span>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="relative mt-8 sm:mt-10 lg:mt-0">
              <div className="relative mx-auto w-full max-w-lg">
                {/* Main Image Container dengan decorative elements */}
                <div className="relative">
                  {/* Decorative circle */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-primary rounded-full opacity-20 blur-xl sm:-top-6 sm:-right-6 sm:w-24 sm:h-24"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-accent rounded-full opacity-20 blur-xl sm:-bottom-6 sm:-left-6 sm:w-32 sm:h-32"></div>
                  
                  {/* Main image placeholder dengan gradient border */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-brand-primary/30 to-brand-accent/20 p-4 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8">
                    <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-brand-primary/40 to-brand-accent/30 flex items-center justify-center overflow-hidden sm:rounded-2xl">
                      {/* Logo/Image - use logo_url if available, otherwise show placeholder */}
                      {brand.logo_url ? (
                        <div className="relative w-full h-full p-8">
                          <Image
                            src={brand.logo_url}
                            alt={brand.brand_name || 'Logo'}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="text-5xl font-bold text-white drop-shadow-lg mb-2 sm:text-6xl sm:mb-3 lg:text-8xl lg:mb-4">
                            {brand.brand_name?.charAt(0) || 'KG'}
                          </div>
                          <div className="text-lg font-bold text-white drop-shadow sm:text-xl lg:text-2xl">
                            {brand.brand_name || 'Kebab Galaxy'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-1/4 -left-2 w-12 h-12 bg-brand-primary/30 rounded-full blur-sm animate-pulse sm:-left-4 sm:w-16 sm:h-16"></div>
                  <div className="absolute bottom-1/4 -right-2 w-14 h-14 bg-brand-accent/30 rounded-full blur-sm animate-pulse delay-300 sm:-right-4 sm:w-20 sm:h-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


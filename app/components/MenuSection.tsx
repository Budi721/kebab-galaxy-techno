import { Menu } from '@/app/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import Image from 'next/image'

interface MenuSectionProps {
  menuItems: Menu[]
}

/**
 * Menu Section Component
 * 
 * Reference patterns from:
 * - reference_component/react/components/ecommerce/components/product-lists/card_with_full_details.jsx
 * - reference_component/react/components/ecommerce/components/product-lists/simple.jsx
 * 
 * Design: Card-based grid layout for menu items
 * Shows: name, description, price, category, and image
 */
export function MenuSection({ menuItems }: MenuSectionProps) {
  if (menuItems.length === 0) {
    return (
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Menu
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Menu akan segera tersedia
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="menu" className="relative bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Jelajahi{' '}
            <span className="bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
              Menu Kami
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Pilihan kebab lezat dengan berbagai varian untuk memenuhi selera Anda
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white"
            >
              {/* Image with overlay effect */}
              {item.image_url && (
                <div className="relative aspect-h-4 aspect-w-3 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 sm:aspect-none sm:h-64 overflow-hidden">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </CardTitle>
                  {item.category && (
                    <Badge variant="default" className="flex-shrink-0">
                      {item.category}
                    </Badge>
                  )}
                </div>
                {item.description && (
                  <CardDescription className="line-clamp-2 mt-2 text-gray-600">
                    {item.description}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-brand-primary-dark to-brand-accent bg-clip-text text-transparent">
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                  <div className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </CardContent>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


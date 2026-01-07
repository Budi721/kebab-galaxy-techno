import { Brand } from '@/app/lib/types'
import { MessageCircle, Instagram } from 'lucide-react'

interface FooterProps {
  brand: Brand
}

/**
 * Footer Component
 * 
 * Reference patterns from:
 * - reference_component/templates/primer/tailwindui-primer/primer-ts/src/components/Footer.tsx
 * 
 * Design: Minimal footer with social links (WhatsApp, Instagram)
 * Brand colors applied to social icons
 */
export function Footer({ brand }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20 xl:pb-32 xl:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            {brand.whatsapp_link && (
              <a
                href={brand.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-brand-accent"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-xs font-medium sm:text-sm">WhatsApp</span>
              </a>
            )}
            {brand.instagram_link && (
              <a
                href={brand.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-brand-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-xs font-medium sm:text-sm">Instagram</span>
              </a>
            )}
          </div>
          {/* Copyright */}
          <div className="text-center text-xs text-gray-600 sm:text-sm">
            <p>
              &copy; {currentYear} {brand.brand_name || 'Kebab Galaxy'}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}




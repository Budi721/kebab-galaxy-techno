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
    <footer className="relative bg-white pb-20 pt-16 sm:pb-32 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {brand.whatsapp_link && (
              <a
                href={brand.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-brand-accent"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm font-medium">WhatsApp</span>
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
                <Instagram className="h-6 w-6" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            )}
          </div>
          {/* Copyright */}
          <div className="text-center text-sm text-gray-600">
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




"use client"

import { Check, ExternalLink, Mail, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  product: [
    { label: "Games", href: "#games" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#" },
    { label: "Download", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: ExternalLink, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "#", label: "Email" },
  { icon: Share2, href: "#", label: "Share" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">GameHub</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your ultimate gaming platform. Discover, play, and connect with
              millions of gamers worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t px-4 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GameHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

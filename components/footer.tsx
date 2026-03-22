import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TS</span>
              </div>
              <span className="font-bold text-xl">TechStore</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your one-stop shop for the latest electronics and gadgets. Quality products, competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=Audio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/products?category=Computers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Computers
                </Link>
              </li>
              <li>
                <Link href="/products?category=Wearables" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Wearables
                </Link>
              </li>
              <li>
                <Link href="/products?category=Gaming" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>Programmer's email: ramadanmariam330@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>Programmer's number:+20 1030551352</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <span>support@techstore.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Egypt, Assiut, Al-Rehab, WE Applied Technology School</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

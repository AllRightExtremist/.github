import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-400 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-700">
                <span className="font-black text-white text-lg">ARE</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">All Right</h3>
                <h4 className="text-xs font-semibold text-stone-400 leading-tight">Extremist</h4>
              </div>
            </div>
            <p className="text-sm max-w-md">
              Clothing for country guys who don't apologize for who they are.
              Quality gear with a message. Made in the USA.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=t-shirts" className="hover:text-amber-500 transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hoodies" className="hover:text-amber-500 transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop?category=hats" className="hover:text-amber-500 transition-colors">
                  Hats
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-500 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-500 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-500 transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} All Right Extremist. All rights reserved.</p>
          <p>Made with pride in the USA 🇺🇸</p>
        </div>
      </div>
    </footer>
  );
}

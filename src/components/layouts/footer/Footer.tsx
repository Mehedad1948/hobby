import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Logo Placeholder (Replace with your actual image/svg) */}
            <div className="mb-6 flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary-main"
              >
                <path
                  d="M2 24L10 8L16 18L24 4L28 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="26" cy="22" r="3" fill="currentColor" />
              </svg>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed text-sm">
              The starting point for your next project with Minimal UI Kit, built
              on the newest version of Material-UI ©, ready to be customized to
              your style.
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="text-secondary-main hover:opacity-80 transition-opacity">
                <Facebook size={20} strokeWidth={2} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-secondary-main hover:opacity-80 transition-opacity">
                <Instagram size={20} strokeWidth={2} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-secondary-main hover:opacity-80 transition-opacity">
                <Linkedin size={20} strokeWidth={2} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-secondary-main hover:opacity-80 transition-opacity">
                <Twitter size={20} strokeWidth={2} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Middle Column: Company Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wide">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 text-sm text-gray-900 font-medium">
          <p>© 2026. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

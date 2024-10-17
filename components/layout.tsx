"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from '@/components/ui/language-switcher';

import Logo from '/public/logo/logo.svg';  // Import the SVG as a React component

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
        <div className="flex flex-col min-h-screen">
          <header className="absolute top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20 py-8">
                <Link href="/" className="flex items-center space-x-2">
                  {/* Update to use the imported SVG component */}
                  <Logo className="w-[200px] h-[63px] text-white"/>
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/use-cases" className="text-sm hover:text-gray-300 transition-colors">
                    Use Cases
                  </Link>
                  <Link href="/pricing" className="text-sm hover:text-gray-300 transition-colors">
                    Pricing
                  </Link>
                </nav>
                {/* Request demo
                <div className="hidden md:block">
                  <Button asChild variant="secondary"
                          className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out">
                    <Link href="/request-demo">Request a Demo</Link>
                  </Button>
                </div>
                */}

                <LanguageSwitcher />
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-6 w-6"/>
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/use-cases"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
                      Use Cases
                    </Link>
                    <Link href="/pricing"
                          className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
                      Pricing
                    </Link>
                    <Link href="/request-demo"
                          className="block px-3 py-2 rounded-md text-base font-medium text-black bg-white hover:bg-gray-200">
                      Request a Demo
                    </Link>
                  </div>
                </div>
            )}
          </header>

          <main className="pt-20 flex-grow">
            {children}
          </main>

          <footer className="mt-auto py-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                <div className="md:w-1/4">
                  <h3 className="text-sm font-semibold mb-4 text-gray-400">Contact Us</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href="tel:+4915773596517" className="hover:text-white transition-colors">+49 15773596517</a>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href="mailto:info@semanticmap.com" className="hover:text-white transition-colors">info@semanticmap.com</a>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 mt-1" />
                      <span>North Rhine-Westphalia,<br />Germany</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/4">
                  <h3 className="text-sm font-semibold mb-4 text-gray-400">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</Link></li>
                    <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                  </ul>
                </div>
                <div className="md:w-1/4">
                  <h3 className="text-sm font-semibold mb-4 text-gray-400">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/data_privacy" className="text-gray-300 hover:text-white transition-colors">Data Privacy Policy</Link></li>
                    <li><Link href="/data_privacy" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                    <li><Link href="/imprint" className="text-gray-300 hover:text-white transition-colors">Imprint</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  {/* Footer logo with correct color */}
                  <Logo className="w-[100px] h-[31px] text-custom-gray" />


                </div>
                <div className="text-sm text-gray-400 text-center md:text-right">
                  © {new Date().getFullYear()} Semantic Map Inc. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
  )
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [showGalleries, setShowGalleries] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      label: 'Galleries',
      dropdown: [
        { href: '/gallery/nature', label: 'Nature & Landscapes' },
        { href: '/gallery/abstract', label: 'Abstract & Expressions' },
        { href: '/gallery/portraits', label: 'Portraits & Figures' },
        { href: '/gallery/murals', label: 'Murals & Walls' },
      ],
    },
    {
      label: 'Styles',
      dropdown: [
        { href: '/', label: 'Acrylic' },
        { href: '/', label: 'Watercolor' },
        { href: '/', label: 'Oil Painting' },
        { href: '/', label: 'Mixed Media' },
      ],
    },
    {
      label: 'Shop Prints',
      dropdown: [
        { href: '/shop/limited-edition', label: 'Limited Editions', description: 'Exclusive signed art prints' },
        { href: '/shop/open-edition', label: 'Open Editions', description: 'Affordable decor prints' },
        { href: '/shop/custom-orders', label: 'Custom Orders', description: 'Made-to-order pieces' },
      ],
    },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/img/logo/logo.jpg"
                alt="Artist Logo"
                width={60}
                height={30}
                priority
              />
            </Link>
            <div className="hidden sm:flex sm:space-x-6 ml-6">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => {
                      if (item.label === 'Galleries') setShowGalleries(true);
                      else if (item.label === 'Styles') setShowStyles(true);
                      else if (item.label === 'Shop Prints') setShowShop(true);
                    }}
                    onMouseLeave={() => {
                      if (item.label === 'Galleries') setShowGalleries(false);
                      else if (item.label === 'Styles') setShowStyles(false);
                      else if (item.label === 'Shop Prints') setShowShop(false);
                    }}
                  >
                    <button className="uppercase font-semibold text-sm hover:text-rose-600">
                      {item.label}
                    </button>
                    {(item.label === 'Galleries' && showGalleries) ||
                    (item.label === 'Styles' && showStyles) ||
                    (item.label === 'Shop Prints' && showShop) ? (
                      <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md z-10">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            <div className="font-medium">{dropdownItem.label}</div>
                            {dropdownItem.description && (
                              <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="uppercase font-semibold text-sm hover:text-rose-600"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Favorite icon as a link */}
            <Link
              href="/favorite"
              aria-label="Favorites"
              className="text-rose-600 hover:text-rose-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-rose-600"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>

            <Link
              href="/studio"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-md transition"
            >
              Visit My Studio
            </Link>
            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden inline-flex items-center p-2 text-gray-500 hover:text-rose-600"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-4 pb-3">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index}>
                <button
                  onClick={() => {
                    if (item.label === 'Galleries') setShowGalleries(!showGalleries);
                    else if (item.label === 'Styles') setShowStyles(!showStyles);
                    else if (item.label === 'Shop Prints') setShowShop(!showShop);
                  }}
                  className="block w-full text-left py-2 font-semibold uppercase text-gray-800"
                >
                  {item.label}
                </button>
                {(item.label === 'Galleries' && showGalleries) ||
                (item.label === 'Styles' && showStyles) ||
                (item.label === 'Shop Prints' && showShop) ? (
                  <div className="pl-4">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        className="block py-1 text-sm text-gray-700 hover:text-rose-600"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="block py-2 font-semibold uppercase text-gray-800 hover:text-rose-600"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="flex items-center justify-between mt-2 border-t pt-2">
            <Link
              href="/favorite"
              aria-label="Favorites"
              className="text-rose-600 hover:text-rose-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-rose-600"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Link>

            <Link
              href="/studio"
              className="font-bold text-rose-600 uppercase hover:text-rose-700"
            >
              Visit My Studio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

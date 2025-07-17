"use client";

import Link from "next/link";
import { Outfit } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetaOG from "@/components/MetaOG";
import HeadCommon from "@/components/HeadCommon";

import ogData from "@/data/prod/json/ogData.json";

const outfit = Outfit({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <>
      <head>
        <title>Contact FurnitureStored</title>
        <meta name="description" content="Contact FurnitureStored to get in touch with us." />
        <MetaOG ogData={ogData}/>
        <HeadCommon />
        <link rel="canonical" href="https://www.furniturestored.com/contact" />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h2>
                <p className="text-gray-600">
                  <a href="mailto:info@furniturestored.com" className="text-blue-600 hover:text-blue-800">
                    info@furniturestored.com
                  </a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Office</h2>
                <p className="text-gray-600">
                  Harrington St<br />
                  Raleigh, NC 27603<br />
                  United States
                </p>
              </div>
            </div>
            <div className="w-full h-full min-h-[450px] bg-white p-6 rounded-lg shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509.363115742759!2d-78.64480180000001!3d35.7845382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f68add4c647%3A0xb75c1fc49257baa9!2sN%20Harrington%20St%2C%20Raleigh%2C%20NC%2027603%2C%20USA!5e1!3m2!1sen!2sin!4v1745489536076!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </>
  );
} 
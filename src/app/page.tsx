'use client'
import React from "react";
import Link from "next/link";
import Navbar from "@/app/component/header";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      {/* Hero Landing Page */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
        style={{ backgroundImage: "url('/4.jpg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-6xl font-extrabold mb-4 tracking-wider text-amber-950 drop-shadow-xl underline">
            Fresh Fry Cuts
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto font-medium text-white">
            Discover the crunch you&apos;ve been craving! Premium uncooked fries delivered fresh to your doorstep — because your taste buds deserve the best.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#menu"
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-md"
            >
              View Menu
            </Link>
            <Link
              href="#order"
              className="bg-white hover:bg-yellow-100 text-yellow-600 font-bold py-3 px-8 rounded-full transition-all shadow-md"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Main Site Content */}
      <main id="main" className="bg-yellow-50">
        {/* About Section */}
        <section id="about" className="px-6 py-20 bg-gradient-to-r from-yellow-400/60 to-yellow-600/30 text-center">
          <h3 className="text-4xl font-extrabold text-yellow-700 mb-6">Who We Are</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/fries.avif"
              alt="Freshly cut fries"
              className="w-full rounded-lg shadow-md"
            />
            <div className="text-left">
              <p className="text-lg text-gray-900 leading-relaxed mb-4">
                At <span className="font-bold text-yellow-600">Fresh Fry Cuts</span>, we bring quality straight to your kitchen. We specialize in
                delivering fresh, hand-cut, uncooked French fries that are ready to fry and serve anytime. Each piece
                is washed, peeled, and packed with love to ensure the ultimate crispy experience in every bite.
              </p>
              <p className="text-lg text-gray-800">
                Whether you&apos;re a busy mom, a snack lover, or running a fast food joint, our fries are the perfect solution.
                Affordable, hygienic, and delivered with care — because you deserve the best.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="px-6 py-60 bg-gradient-to-br from-yellow-200 to-yellow-100 text-center">
          <h3 className="text-4xl font-extrabold text-yellow-800 mb-10">Our Delicious Menu</h3>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h4 className="text-2xl font-bold text-yellow-600 mb-2">🍟 Classic Plain Fries</h4>
              <p className="text-lg font-medium text-gray-700 mb-2">Rs. 130 per kg</p>
              <p className="text-sm text-gray-600">Crispy, clean, and perfect for every occasion. Pre-cut and ready to fry.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h4 className="text-2xl font-bold text-yellow-600 mb-2">📦 Bulk Orders</h4>
              <p className="text-lg font-medium text-gray-700 mb-2">Custom Pricing Available</p>
              <p className="text-sm text-gray-600">Planning an event or running a business? We&apos;ve got you covered with bulk fresh fry supply.</p>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section id="order" className="px-6 py-60 bg-yellow-50 text-center">
          <h3 className="text-4xl font-extrabold text-yellow-700 mb-6">Place Your Order</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-800 mb-6">
              Want fresh fries delivered to your door? Just click the button below and order directly on WhatsApp.
              We&apos;ll confirm your order and delivery timing right away!
            </p>
            <a
              href="https://wa.me/923001234567?text=Hi! I want to order Fresh Fry Cuts."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-bold px-10 py-4 rounded-full shadow-lg transition-all"
            >
              📲 Order Now on WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-500 italic">Fast replies • Cash on delivery available</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-60 bg-yellow-100 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-4">Contact Us</h3>
          <p className="text-md text-gray-800 mb-1">📞 Phone: 0317-0211829</p>
          <p className="text-md text-gray-800">📸 Instagram: @freshfrycuts</p>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 bg-yellow-600 text-white text-sm font-medium">
          © 2025 Fresh Fry Cuts. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

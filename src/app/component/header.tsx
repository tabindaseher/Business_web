'use client'
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-amber-300 shadow-md p-6 flex justify-between items-center ">
      <h2 className="text-2xl font-bold text-yellow-700">🍟 Fresh Fry Cuts</h2>
      <nav>
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#menu" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Menu
            </Link>
          </li>
          <li>
            <Link href="#order" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Order
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

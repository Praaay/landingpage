"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Track hovered menus
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("presentation-heading");
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const threshold = 80; // Adjust if needed

      if (rect.top <= threshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow-md transition-transform duration-500 z-50 ${
        isOpen
          ? "translate-y-0 opacity-100"
          : isHidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 relative">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 flex items-center space-x-2 ml-15">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="ml-10">snappify</span>
        </Link>

        {/* Center: Navigation (middle links centered) */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <Link href="#pricing" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
            Pricing
          </Link>
          <span className="text-gray-300">|</span>

          {/* Use Cases */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("use-cases")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link href="#use-cases" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
              Use Cases
            </Link>
            {hoveredMenu === "use-cases" && (
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg p-2 text-black">
                <Link href="/use-cases/case1" className="block px-4 py-2 hover:bg-gray-100">
                  Case 1
                </Link>
                <Link href="/use-cases/case2" className="block px-4 py-2 hover:bg-gray-100">
                  Case 2
                </Link>
              </div>
            )}
          </div>
          <span className="text-gray-300">|</span>

          {/* Product */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("product")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link href="#product" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
              Product
            </Link>
            {hoveredMenu === "product" && (
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg p-2 text-black">
                <Link href="/product/feature1" className="block px-4 py-2 hover:bg-gray-100">
                  Feature 1
                </Link>
                <Link href="/product/feature2" className="block px-4 py-2 hover:bg-gray-100">
                  Feature 2
                </Link>
              </div>
            )}
          </div>
          <span className="text-gray-300">|</span>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("resources")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link href="#resources" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
              Resources
            </Link>
            {hoveredMenu === "resources" && (
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg p-2 text-black">
                <Link href="/resources/blogs" className="block px-4 py-2 hover:bg-gray-100">
                  Blogs
                </Link>
                <Link href="/resources/tutorials" className="block px-4 py-2 hover:bg-gray-100">
                  Tutorials
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right: Dashboard, Editor, Profile */}
        <div className="hidden md:flex items-center space-x-6">
          <span className="text-gray-300">|</span>
          <Link href="/dashboard" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
            Dashboard
          </Link>
          <span className="text-gray-300">|</span>

          <Link href="/editor" className="text-gray-700 font-semibold hover:text-gray-900 hover:underline">
            Editor
          </Link>
          <span className="text-gray-300">|</span>

          <Image src="/profile.png" alt="profile" width={30} height={30} className="rounded-3xl hover:bg-gray-200" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:bg-gray-100">
              <Link href="#pricing" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="#use-cases" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Use Cases
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="#product" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="#resources" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Resources
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="/dashboard" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="/editor" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>
                Editor
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Image src="/profile.png" alt="profile" width={30} height={30} className="rounded-full" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

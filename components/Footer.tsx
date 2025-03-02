"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Left Section: Logo + Description */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Snappify Logo" width={30} height={30} />
            <span className="text-lg font-semibold">snappify</span>
          </div>
          <p className="text-white text-md">
            Create stunning Code Presentations <br /> and smoothly animated videos.
          </p>
          <p className="text-white text-md">© seriouscode GmbH</p>
          <p className="text-white text-md">All Rights Reserved.</p>
        </div>

        {/* Center & Right Sections: Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-white text-md">
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/editor" className="hover:text-white">Editor</Link></li>
            <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/embedding" className="hover:text-white">Embedding</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-white text-md">
            <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
            <li><Link href="/tutorials" className="hover:text-white">Tutorials</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/stories" className="hover:text-white">User Stories</Link></li>
            <li><Link href="/changelog" className="hover:text-white">Changelog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Integrations</h4>
          <ul className="space-y-2 text-white text-md">
            <li><Link href="/vs-code" className="hover:text-white">VS Code Extension</Link></li>
            <li><Link href="/intellij" className="hover:text-white">IntelliJ Plugin</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row: Discord + Product Hunt Badge */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-nowrap items-center justify-end gap-4">
        {/* Discord Button */}
        <Link
          href="https://discord.com"
          className="flex items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          <span className="mr-2">🎮</span> Join our Discord
        </Link>

        {/* Product Hunt Badge */}
        <div className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg flex items-center">
          🏆 <span className="ml-2">#2 Product of the Day</span>
        </div>
      </div>
    </footer>
  );
}

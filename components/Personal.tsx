"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  // Captions for video animation
  const captions = [
    "Installing Python packages using apt",
    "Setting up Raspberry Pi for development",
    "Writing Python scripts for automation",
  ];
  const [currentCaption, setCurrentCaption] = useState(0);

  // Automatically switch captions every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaption((prev) => (prev + 1) % captions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* About Me Section */}
      <div className="flex flex-col md:flex-row items-center text-left max-w-5xl gap-8">
        {/* Profile Image */}
        <Image
          src="/anon.png"
          alt="Dominik - Founder of Snappify"
          width={120}
          height={120}
          className="rounded-full shadow-lg p-2"
        />

        {/* About Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900">About me</h2>
          <p className="mt-4 text-gray-700">
            Hey, my name is Dominik and I'm the founder of snappify! 👋
          </p>
          <p className="mt-2 text-gray-700">
            My goal with snappify is to enable you to easily create technical
            presentations with smooth animations.
          </p>
          <p className="mt-2 text-gray-700">
            Doesn't matter if you create code explanations on social media,
            technical presentations for your company, or smoothly animated
            videos - I hope you'll find snappify a valuable companion.
          </p>
        </div>
      </div>

      {/* CTA Section with Animated Video */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-gradient-to-r from-yellow-400 to-orange-400 p-10 rounded-xl shadow-lg">
        {/* Left Side - Text Section */}
        <div className="max-w-lg text-left">
          <h3 className="text-2xl font-bold text-gray-900">Create your next presentation</h3>
          <p className="mt-2 text-gray-800">
            Snappify will help you to create stunning presentations and videos.
          </p>
          <Link
            href="/get-started"
            className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg"
          >
            Get started - It's free
          </Link>
        </div>

      </div>
    </section>
  );
}

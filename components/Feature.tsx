"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeBlocks = [
  "bg-gradient-to-r from-purple-400 to-pink-300",
  "bg-gradient-to-r from-green-400 to-teal-500",
  "bg-gradient-to-r from-red-400 to-pink-500",
  "bg-gradient-to-r from-blue-200 to-green-300",
  "bg-gradient-to-r from-yellow-100 to-orange-200",
  "bg-gradient-to-r from-indigo-300 to-purple-400",
  "bg-gradient-to-r from-gray-100 to-blue-200",
];

export default function Feature() {
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === 1 ? -1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Because your code deserves <br /> a{" "}
        <span className="text-indigo-600">stunning presentation</span>
      </h2>
      
      <div className="overflow-hidden w-full">
        <div className="space-y-6">
          {/* Container holding two rows moving together */}
          <div className="flex flex-col space-y-6">
            {/* Row 1 - Moves in one direction */}
            <motion.div
              animate={{ x: direction * 150 }} // Increased movement for smooth flow
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="flex space-x-6 justify-center"
            >
              {codeBlocks.map((gradient, index) => (
                <div
                  key={index}
                  className={`w-64 h-40 rounded-xl shadow-lg flex items-center justify-center ${gradient}`}
                >
                  <div className="bg-gray-900 w-48 h-28 rounded-lg p-3 text-white text-left">
                    <div className="flex space-x-2 mb-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <p className="text-sm font-mono">
                      <span className="text-blue-400">function</span> hello(
                      <span className="text-yellow-400">name: string</span>) {"{"}
                    </p>
                    <p className="text-sm font-mono pl-4">
                      console.log(&apos;Hi &apos; + name);
                    </p>
                    <p className="text-sm font-mono">{"}"}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Row 2 - Moves in opposite direction */}
            <motion.div
              animate={{ x: -direction * 150 }} // Moves opposite to Row 1
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="flex space-x-6 justify-center"
            >
              {codeBlocks.map((gradient, index) => (
                <div
                  key={index}
                  className={`w-64 h-40 rounded-xl shadow-lg flex items-center justify-center ${gradient}`}
                >
                  <div className="bg-gray-900 w-48 h-28 rounded-lg p-3 text-white text-left">
                    <div className="flex space-x-2 mb-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <p className="text-sm font-mono">
                      <span className="text-blue-400">function</span> hello(
                      <span className="text-yellow-400">name: string</span>) {"{"}
                    </p>
                    <p className="text-sm font-mono pl-4">
                      console.log(&apos;Hi &apos; + name);
                    </p>
                    <p className="text-sm font-mono">{"}"}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl">
          Checkout our Templates
        </button>
      </div>
    </section>
  );
}

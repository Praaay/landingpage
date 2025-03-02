"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rodrigo 🚀",
    role: "Python educator",
    quote: "I've been presenting my talks with snappify for a while now. And each day it looks less and less likely that I'll go back to PowerPoint.",
    image: "/anon.png", // Replace with actual image path
  },
  {
    name: "Michael Bromley",
    role: "Co-founder & CTO",
    quote: "As a developer running a large open-source community, without the time and skills for complex design software, snappify lets me get better results in a fraction of the time.",
    image: "/anon.png", // Replace with actual image path
  },
  {
    name: "Ndimofor Aretash",
    role: "Web Development Facilitator",
    quote: "Nowadays, when I think of presenting (anything), I think first of snappify!",
    image: "/anon.png", // Replace with actual image path
  },
];

export default function User() {
  return (
    <section className="bg-pink-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">User Stories</h2>
      <p className="text-gray-600 mt-2">Get to know our users and learn how they leverage snappify!</p>

      <div className="flex flex-col gap-8 mt-10 items-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 text-black rounded-xl shadow-lg max-w-lg relative cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full" />
              <div className="text-left">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            <p className="mt-4 text-blue-500 font-semibold cursor-pointer">Read more →</p>
            <div className="absolute top-0 right-4 text-3xl text-blue-400">“</div>
            <div className="absolute bottom-[-10px] left-4 w-full h-2 bg-pink-200 rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <button className="bg-gradient-to-br from-yellow-500 via-pink-700 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600">
          Read more stories →
        </button>
        <button className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg mt-4 flex items-center gap-2 hover:bg-purple-700">
          <span></span> Join our Discord
        </button>
      </div>
    </section>
  );
}

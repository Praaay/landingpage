"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimationControls} from "framer-motion";


export default function Hero() {
    const textControls1 = useAnimation();
    const cardControls1 = useAnimation();
    const textControls2 = useAnimation();
    const cardControls2 = useAnimation();
    const textControls3 = useAnimation();
    const cardControls3 = useAnimation();
    const sectionRef1 = useRef<HTMLDivElement | null>(null);
    const sectionRef2 = useRef<HTMLDivElement | null>(null);
    const sectionRef3 = useRef<HTMLDivElement | null>(null);
  
    // Helper function for IntersectionObserver
    const observerCallback = (controlsText: AnimationControls, controlsCard: AnimationControls) => {
      return (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controlsText.start({ opacity: 1, y: 0 });
          controlsCard.start({ opacity: 1, y: 0, scale: 1 });
        } else {
          controlsText.start({ opacity: 0, y: 50 });
          controlsCard.start({ opacity: 0, y: 50, scale: 0.8 });
        }
      };
    };
  
    useEffect(() => {
      const observer1 = new IntersectionObserver(observerCallback(textControls1, cardControls1), { threshold: 0.3 });
      const observer2 = new IntersectionObserver(observerCallback(textControls2, cardControls2), { threshold: 0.3 });
      const observer3 = new IntersectionObserver(observerCallback(textControls3, cardControls3), { threshold: 0.3 });
  
      if (sectionRef1.current) observer1.observe(sectionRef1.current);
      if (sectionRef2.current) observer2.observe(sectionRef2.current);
      if (sectionRef3.current) observer3.observe(sectionRef3.current);
  
      return () => {
        observer1.disconnect();
        observer2.disconnect();
        observer3.disconnect();
      };
    }, []);

    const slides = [
        {
          id: 1,
          bgColor: "bg-green-300",
          text: "Feel free to copy some code 😊",
          code: `>>> 1 + 2 + 3 + 4\n10\n>>> 1 * 2 * 3 * 4\n24\n>>> True & True & False & True\nFalse`,
        },
        {
          id: 2,
          bgColor: "bg-blue-300",
          text: "Easily share interactive code 💡",
          code: `def hello():\n    print("Hello, World!")\n\nhello()`,
        },
        {
          id: 3,
          bgColor: "bg-yellow-300",
          text: "Customize themes & fonts ✨",
          code: `theme = "yellow"`,
        },
      ];    
      const [currentSlide, setCurrentSlide] = useState(0);
      const [copySuccess, setCopySuccess] = useState(false);

      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      };

      const copyToClipboard = () => {
        navigator.clipboard.writeText(slides[currentSlide].code);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500);
      };

  return (
    <section className="mt-18 flex flex-col justify-start items-center px-6 md:px-4 lg:px-12 py-8 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      {/* Top Title */}
      <div className="text-center md:text-left">
    <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
      We enable developers to create <br />
      <span className="bg-gradient-to-r from-[#25B9DA] to-[#1F7FD8] text-transparent bg-clip-text">
        stunning presentations
      </span>
    </h1>
  </div>

      {/* Bottom Section (Left: Badge, CTA, Profiles | Right: Image) */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
        {/* Bottom Left - Badge, CTA Buttons, and Profiles */}
        <div className="flex flex-col items-start space-y-6 max-w-lg text-left">
          {/* Badge */}
          <div className="bg-green-50 text-green-700 px-4 py-1.5 rounded-md text-sm font-semibold flex items-center space-x-2 shadow-md border border-green-700">
            <span className="text-green-900 font-bold">New!</span>
            <span className="text-gray-700"> - Experimental Video Export 🎥</span>
          </div>
          <p className="text-gray-700 font-bold text-3xl leading-relaxed max-w-lg">
            Take your Code Presentations to the next level with snappify&apos;s powerful animation features.
          </p>

  {/* Buttons adjusted for mobile */}
  <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
    <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
      Get started – It&apos;s free
    </Link>
    <Link href="/templates" className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg text-lg">
      View Templates
    </Link>
  </div>

          {/* Profile Images */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex -space-x-2">
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[9]" />
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[8]" />
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[7]" />
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[6]" />
              <Image src="/anon.png" alt="User 1" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[5]" />
              <Image src="/anon.png" alt="User 2" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[4]" />
              <Image src="/anon.png" alt="User 3" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[3]" />
              <Image src="/anon.png" alt="User 4" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[2]" />
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[1]" />
              <Image src="/anon.png" alt="User 5" width={40} height={40} className="rounded-full border border-white shadow-md relative z-[0]" />
            </div>
            <p className="text-gray-600 text-sm">Join a community of 38k+ developers spicing up their content</p>
          </div>
        </div>
      </div>
      <div className="items-center mt-6 text-xl text-gray-700">
        <p>Trusted by industry leaders around the globe</p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {["vendure", "jina", "textualize", "chakra", "supabase"].map((logo) => (
          <Image key={logo} src={`/${logo}.png`} alt={`${logo} logo`} width={100} height={100} />
        ))}
      </div>
        
        {/* Interactive Window */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
        {/* Left Side - Animated Code Window */}
<div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg h-[250px] md:h-[300px] rounded-xl shadow-lg overflow-hidden group">
  <div
    className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out ${slides[currentSlide].bgColor}`}
  >
    <p className="text-sm md:text-lg font-semibold text-gray-900 text-center">{slides[currentSlide].text}</p>
    <div className="mt-2 md:mt-4 bg-gray-900 text-green-400 font-mono text-xs md:text-sm p-3 md:p-4 rounded-lg shadow-md w-full max-w-[90%] md:max-w-xs">
      <pre>{slides[currentSlide].code}</pre>
    </div>
  </div>

{/* Bottom Bar - Appears on Hover or Tap (Mobile) */}
<div 
  className={`absolute bottom-0 left-0 right-0 bg-gray-800 text-white flex items-center justify-between px-4 py-2
   opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300`}
  onClick={(e) => e.stopPropagation()} // Prevents accidental dismissals
  tabIndex={0} // Allows focus for mobile users
>

    <span className="text-xs md:text-sm">{`${currentSlide + 1} / ${slides.length}`}</span>
    <div className="flex gap-2">
      <button onClick={prevSlide} className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs md:text-sm">
        ◀
      </button>
      <button onClick={nextSlide} className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs md:text-sm">
        ▶
      </button>
      <button
        onClick={copyToClipboard}
        className="px-2 md:px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded flex items-center text-xs md:text-sm"
      >
        📋 Copy
      </button>
    </div>
  </div>
</div>


        {/* Right Side - Text Content */}
        <div className="max-w-lg">
          <h2 id="presentation-heading" className="text-3xl font-bold text-gray-900">Create next-level presentations</h2>
          <p className="mt-4 text-gray-700 text-lg">Say goodbye to boring presentations created with PowerPoint or Keynote. 👋</p>
          <p className="mt-2 text-gray-700 text-lg">snappify enables you to create stunning presentations, with first-class support for code snippets.</p>
          <Link href="#" className="mt-4 inline-block text-gray-600 font-semibold hover:underline text-lg">
            Learn more →
          </Link>
          <div className="mt-6 p-4 border-2 border-purple-400 bg-purple-50 rounded-lg text-lg">
            <p className="text-gray-800">
              💡 <span className="font-bold">Share interactive slides</span> so your viewers can easily copy code snippets and interact with links.
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 Bottom Interactive Section (Appears on Scroll) */}
      <div className="flex flex-col items-center space-y-24 mt-40 mb-20">

      {/* FIRST SECTION: Text Left, Card Right */}
      <motion.div ref={sectionRef1} className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
        {/* Left: Animated Text Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={textControls1} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900">Elevate your Technical Content</h2>
          <p className="mt-4 text-gray-700">
            You&apos;re a developer, looking to create <span className="font-bold">visually engaging</span> infographics for social media?
          </p>
          <p className="mt-2 text-gray-700">
            Use snappify to create stunning visuals of your technical concepts, that will <span className="font-bold">engage your followers</span> and take your social media presence to the next level.
          </p>
          <Link href="#" className="mt-4 inline-block text-gray-600 font-semibold hover:underline">
            View Templates →
          </Link>
        </motion.div>

        {/* Right: Floating Animated Card */}
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={cardControls1} transition={{ duration: 1, ease: "easeOut" }} className="relative">
          
          <div className="relative w-[350px] h-[250px] rounded-xl bg-red-300 shadow-lg p-6">
            <div className="absolute -top-4 right-4 rotate-12 text-black text-lg font-bold">✖</div>
            <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg shadow-md">
              <pre>
                {`const MyButton = () => (
  <button className="my-button">
    It's mine!
  </button>
);`}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SECOND SECTION: Card Left, Text Right */}
      <motion.div ref={sectionRef2} className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-5xl gap-8">
        {/* Right: Animated Text Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={textControls2} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900">Simplify your Education</h2>
          <p className="mt-4 text-gray-700">
            Are you a teacher or course creator looking to help your students better understand <span className="font-bold">technical concepts</span>?
          </p>
          <p className="mt-2 text-gray-700">
            snappify makes it easy to create educational content that lets your students retain information and grasp complex ideas.
          </p>
          <Link href="#" className="mt-4 inline-block text-gray-600 font-semibold underline">
            Learn more →
          </Link>
        </motion.div>

        {/* Left: Floating Animated Card */}
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={cardControls2} transition={{ duration: 1, ease: "easeOut" }} className="relative">
          <div className="relative w-[350px] h-[250px] rounded-xl bg-blue-300 shadow-lg p-6">
            <div className="absolute -top-4 right-4 rotate-12 text-black text-lg font-bold">✖</div>
            <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg shadow-md">
              <pre>
                {`function greet() {
  console.log("Hello, World!");
}

greet();`}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* THIRD SECTION: Same format as First Section */}
      <motion.div ref={sectionRef3} className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8">
        {/* Left: Animated Text Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={textControls3} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-900">Embed Interactive Infographics</h2>
          <p className="mt-4 text-gray-700">
            snappify enables you to <span className="font-bold">embed your visuals</span> in a way that your viewers can easily copy code snippets or texts.
          </p>
          <p className="mt-2 text-gray-700">
            It&apos;s the perfect way to bring your blog to life or spice up your internal company documentation using rich infographics.
          </p>
          <Link href="#" className="mt-4 inline-block text-gray-600 font-semibold underline hover:text-black">
            Learn More →
          </Link>
          <div className="mt-6 p-4 border-2 border-orange-400 bg-orange-50 rounded-lg text-lg">
            <p className="text-gray-800">
              🌈 With <span className="font-bold">support for popular platforms</span> like Hashnode, Notion, and Medium, we ensure that your infographics look great, no matter where they&apos;re posted!
            </p>
          </div>

        </motion.div>
        
        {/* Right: Floating Animated Card */}
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={cardControls3} transition={{ duration: 1, ease: "easeOut" }} className="relative">
          <div className="relative w-[350px] h-[250px] rounded-xl bg-orange-300 shadow-lg p-6">
            <div className="bg-white text-black font-mono text-sm p-4 rounded-lg shadow-md text-wrap">
              <h1 className="text-xl font-bold">Spice up your article</h1>
              <p className="text-md">This is an example article using the embedding functionality of snappify. You can hover over the infographic below and copy the code snippet to give it a try in your own IDE.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
    

      {/* Copy Success Notification */}
      {copySuccess && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          ✅ Code copied to clipboard!
        </div>
      )}

    </section>
  );
}



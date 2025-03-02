// import { Feature } from "@/components/Feature";

// export default function Home() {
//   return (
//     <main className="bg-gray-100 min-h-screen">
//       <div className="py-20 text-center">
//         <h2 className="text-4xl font-bold">Why Snappify?</h2>
//         <p className="mt-2 text-gray-500">Enhance your code snippets like never before.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
//         <Feature title="Code Highlighting" description="Beautiful syntax highlighting for readability." />
//         <Feature title="Collaboration" description="Work with your team in real-time." />
//         <Feature title="Export Options" description="Export snippets as images, PDFs, and more." />
//       </div>
//     </main>
//   );
// }

import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Personal from "@/components/Personal";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import User from "@/components/User";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <User />
      <Feature />
      <Pricing />
      <Personal />
      <Footer />
    </main>
  );
}


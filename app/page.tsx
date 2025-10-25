import Hero from "@/components/hero";
import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black min-h-screen">
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-purple-200 mb-10 text-center drop-shadow-[0_0_10px_rgba(139, 92, 246, 0.7)]">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 place-items-center px-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

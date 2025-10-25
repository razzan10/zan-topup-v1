"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: string;
  name: string;
  image: string;
}

const Card = () => {
  const [game, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:2000/products")
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Fetch Error: ", err));
  }, []);

  return (
    <>
      {game.map((p: Game) => (
        <div
          key={p.id}
          className="group relative w-48 h-72 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 via-black to-purple-950 border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-purple-700/50 transition-all duration-300 flex flex-col"
        >
          <div className="relative w-full h-1/2">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold text-purple-200 drop-shadow-md">
              {p.name}
            </h3>
            <Link
              href={`/game/${p.id}`}
              className="mt-3 px-4 py-2 rounded-lg bg-purple-800/90 text-white font-semibold 
              hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Top Up Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

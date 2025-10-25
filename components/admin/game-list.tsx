"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Game {
  id: string;
  name: string;
  image: string;
  createdAt: string;
}

const GameList = () => {
  const [game, setGame] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:2000/products")
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Failed Fetching: ", err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 mt-8 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
        Game List
      </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-800/70 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase text-left tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase text-left tracking-wider">
                Game Name
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase text-left tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase text-left tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {game.map((game) => (
              <tr className="hover:bg-gray-800/50 transition-all duration-200">
                <td className="px-6 py-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg animate-pulse" />
                  {/* {game.image} */}
                </td>
                <td className="px-6 py-4 text-gray-100 font-medium">
                  {game.name}
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">
                  {game.createdAt}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/edit/${game.id}`}
                    className="px-3 py-1 text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameList;

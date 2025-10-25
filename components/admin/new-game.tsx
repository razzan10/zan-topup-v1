"use client";
import { FaMoneyCheck, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

interface VariantData {
  id: string;
  variantAmount: string;
  price: number;
}

interface GameVariant {
  id: string;
  variant: VariantData;
}

interface Game {
  id: string;
  name: string;
  image: string;
  variants: GameVariant[];
}

const NewGame = () => {
  const [game, setGame] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleGame = async () => {
    try {
      const formData = new FormData();

      if (!file) return;

      formData.append("image", file);

      const uploadResponse = await fetch("http://localhost:2000/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      const imageUrl = uploadData.url;
      console.log("succes upload image, url: ", imageUrl);

      if (!imageUrl) {
        throw new Error("failed upload image");
      }

      const gameData = {
        name: game,
        image: imageUrl,
        variants: [],
      };
      const productResponse = await fetch("http://localhost:2000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });

      const newProduct = await productResponse.json();
      console.log("created game success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-md p-6 w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <IoGameControllerOutline className="size-6" />
        <h2 className="text-2xl font-bold">Tambah Game Baru</h2>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-300">Nama Game</label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Contoh: Mobile Legends"
            onChange={(e) => setGame(e.target.value)}
            value={game}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Cover Page</label>
          <input
            type="file"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div>
          <div className="items-center flex mb-2 gap-2">
            <h1 className="text-sm text-gray-300">Jumlah</h1>
            <FaMoneyCheck className="size-4" />
          </div>
          <div className="flex items-center gap-3 mb-3 bg-gray-800 p-3 rounded-md">
            <input
              type="text"
              placeholder="Jumlah (contoh: 86 Diamonds)"
              className="flex-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Harga (contoh: 20000)"
              className="w-32 p-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
            />
            <button className="text-red-500 hover:text-red-400">
              <FaTrashAlt className="size-5" />
            </button>
          </div>
          <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mt-2">
            <FaPlusCircle className="size-5" /> Tambah Varian
          </button>
        </div>
        <div className="pt-4">
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg font-semibold"
            onClick={handleGame}
          >
            Simpan Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGame;

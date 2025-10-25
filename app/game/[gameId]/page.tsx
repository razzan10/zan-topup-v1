"use client";
import PurchaseForm from "@/components/purchase-form";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Game {
  id: string;
  name: string;
  image: string;
}

const GamePurchasePage = () => {
  const [game, setGame] = useState<Game | null>(null);
  const params = useParams();
  const gameId = params.gameId;

  useEffect(() => {
    if (!gameId) {
      return;
    }

    fetch(`http://localhost:2000/purchase/${gameId}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error(err));
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#1e0033] via-[#220042] to-[#2a004d] p-6 mt-10">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
        <div className="text-center py-6 border-b border-white/10">
          <h3 className="text-3xl font-extrabold text-white tracking-wide">
            {game.name}
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Top up instan — cepat, aman, dan resmi
          </p>
        </div>

        <div className="p-6">
          <PurchaseForm />
        </div>
      </div>
    </div>
  );
};

export default GamePurchasePage;

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatCurrency } from "@/lib/utils";

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

const PurchaseForm = () => {
  const [game, setGame] = useState<Game | null>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const params = useParams();
  const gameId = params.gameId;

  useEffect(() => {
    if (!gameId) {
      return;
    }

    fetch(`http://localhost:2000/purchase/${gameId}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("failed fetching", err));
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form className="flex flex-col gap-6 text-white">
        <div className="bg-white/10 rounded-2xl p-5 shadow-md border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 w-7 h-7 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="font-semibold text-lg">Masukkan User ID</h2>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Masukkan User ID"
              className="flex-1 p-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-purple-600 outline-none"
            />
            <input
              type="number"
              placeholder="ID Server"
              className="w-28 p-3 rounded-lg bg-white/90 text-gray-900 focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-5 shadow-md border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 w-7 h-7 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="font-semibold text-lg">Pilih Nominal Top Up</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 rounded-lg flex items-center justify-center p-2">
              <h2 className="font-semibold text-lg">Promo</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {game.variants.map((gameVariant) => (
              <div
                onClick={() => setVariant(gameVariant.variant.id)}
                key={gameVariant.id}
                className={`rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer ${
                  variant === gameVariant.variant.id
                    ? "bg-blue-300 text-gray-900"
                    : "bg-white/90 text-gray-900"
                }`}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 text-md uppercase">
                    {gameVariant.variant.variantAmount}
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    {formatCurrency(gameVariant.variant.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-300 m-4">
            Pilih jumlah top up yang kamu mau
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-5 shadow-md border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 w-7 h-7 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="font-semibold text-lg">Metode Pmebayaran</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
            <div className="bg-white/90 text-gray-900 rounded-xl h-40 p-4 flex flex-col justify-center items-center hover:scale-105 transition-all shadow-lg cursor-pointer">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-md uppercase">
                  999 dm
                </h3>
                <p className="text-sm uppercase font-medium text-gray-500">
                  Rp.9999
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            Bayar
          </button>
        </div>
      </form>
    </>
  );
};

export default PurchaseForm;

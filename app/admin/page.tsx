import GameList from "@/components/admin/game-list";
import HeaderSection from "@/components/header-section";
import Link from "next/link";

const GamePage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black min-h-screen">
      <HeaderSection title="dashboard" subTitle="" />
      {/* <GameList /> */}
      <div className="p-2 m-2 flex justify-end">
        <Link
          href="/admin/new-game"
          className="p-2 text-center text-md font-medium text-gray-900 hover:bg-blue-600 rounded-md bg-gray-50"
        >
          Add New Game
        </Link>
      </div>
      <div className="p-2 m-2">
        <GameList />
      </div>
    </div>
  );
};

export default GamePage;

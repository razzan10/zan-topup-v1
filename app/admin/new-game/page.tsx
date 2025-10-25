import NewGame from "@/components/admin/new-game";

export default function GameListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-10 mt-10 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Game</h1>
      <NewGame />
    </div>
  );
}

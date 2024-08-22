import { useEffect, useState } from "react";
import { getData } from "../../components/Fetch/FetchGame";
import Header from "@/components/content/header";
import "../../app/globals.css";
import { boardGame } from "@/app/interface";
import GameDialog from "../../components/content/gameDialog";

export default function Spel() {
  const [data, setData] = useState<boardGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<boardGame | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Våre Spel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((game, idx) => (
            <GameDialog
              key={idx}
              game={game}
              selectedGame={selectedGame}
              setSelectedGame={setSelectedGame}
            />
          ))}
        </div>
      </div>
    </>
  );
}

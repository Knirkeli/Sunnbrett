import { useEffect, useState } from "react";
import { boardGame } from "../../app/interface";
import { getData } from "../Fetch/FetchFokus";
import GameDialog from "../content/gameDialog";
import "../../app/globals.css";

export default function Fokus() {
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
    <div className="text-2xl text-center w-10/12 lg:w-4/5 xl:w-10/12 mx-auto my-auto">
      <h3>Spel i Fokus</h3>
      <div className="mx-auto my-auto pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}

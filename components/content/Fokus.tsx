// import { useEffect, useState } from "react";
// import { boardGame } from "../../app/interface";
// import { getData } from "../Fetch/FetchFokus";
// import GameDialog from "../content/gameDialog";
// import "../../app/globals.css";

// export default function Fokus() {
//   const [data, setData] = useState<boardGame[]>([]);
//   const [selectedGame, setSelectedGame] = useState<boardGame | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getData();
//       setData(result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="text-2xl text-center w-2/3 mx-auto my-auto">
//       <h3>Spel i Fokus</h3>
//       <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-8">
//         {data.map((post, idx) => (
//           <GameDialog
//             key={idx}
//             game={post}
//             selectedGame={selectedGame}
//             setSelectedGame={setSelectedGame}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

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
    <div className="text-2xl text-center w-2/3 mx-auto my-auto">
      <h3>Spel i Fokus</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-8">
        {data.map((post, idx) => (
          <GameDialog
            key={idx}
            game={post}
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />
        ))}
      </div>
    </div>
  );
}

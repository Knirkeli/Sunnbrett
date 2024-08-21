// import { boardGame } from "../../app/interface";
// import { getData } from "../Fetch/FetchFokus";
// import { Card, CardContent } from "../ui/card";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client as sanityClient } from "../../sanity/lib/client";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { myLoader } from "../../components/ui/nextLoader";

// // Initialize the image URL builder
// const builder = imageUrlBuilder(sanityClient);

// // Function to get the URL for an image
// function urlForImage(image: SanityImageSource) {
//   return builder.image(image);
// }

// // Utility function to truncate text
// function truncateText(text: string, maxWords: number): string {
//   const words = text.split(" ");
//   if (words.length > maxWords) {
//     return words.slice(0, maxWords).join(" ") + "...";
//   }
//   return text;
// }

// export default async function Fokus() {
//   const data: boardGame[] = await getData();

//   return (
//     <div className="text-2xl text-center w-2/3 mx-auto my-auto">
//       <h3>Spel i Fokus</h3>
//       <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-8">
//         {data.map((post, idx) => (
//           <Card key={idx} className="shadow-lg">
//             <CardContent className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{post.name}</h3>
//               <div
//                 className="relative w-full rounded-lg"
//                 style={{ paddingTop: "66.67%" }}
//               >
//                 <Image
//                   loader={myLoader}
//                   src={urlForImage(post.image).url()}
//                   alt={post.image.alt}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//               <p className="text-gray-700">
//                 {truncateText(post.description, 30)}
//               </p>
//             </CardContent>
//           </Card>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-8">
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

// import { useEffect, useState } from "react";
// import { getData } from "../../components/Fetch/FetchGame";
// import { Card, CardContent } from "../../components/ui/card";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client as sanityClient } from "../../sanity/lib/client";
// import Header from "@/components/content/header";
// import "../../app/globals.css";
// import { myLoader } from "../../components/ui/nextLoader";
// import { boardGame } from "@/app/interface";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

// export default function Spel() {
//   const [data, setData] = useState<boardGame[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getData();
//       setData(result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-4 text-center">
//         <h1 className="text-3xl font-bold mb-8">Våre Spel</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.map((game, idx) => (
//             <Card key={idx} className="shadow-lg">
//               <CardContent className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
//                 <div
//                   className="relative w-full"
//                   style={{ paddingTop: "66.67%" }}
//                 >
//                   <Image
//                     loader={myLoader}
//                     src={urlForImage(game.image).url()}
//                     alt={game.image.alt}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg pb-2"
//                   />
//                 </div>
//                 <p className="text-gray-700">
//                   {truncateText(game.description, 30)}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { getData } from "../../components/Fetch/FetchGame";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client as sanityClient } from "../../sanity/lib/client";
import Header from "@/components/content/header";
import "../../app/globals.css";
import { myLoader } from "../../components/ui/nextLoader";
import { boardGame } from "@/app/interface";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../components/ui/dialog";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}

// Utility function to truncate text
function truncateText(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}

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
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <Card
                  className="shadow-lg cursor-pointer"
                  onClick={() => setSelectedGame(game)}
                >
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "66.67%" }}
                    >
                      <Image
                        loader={myLoader}
                        src={urlForImage(game.image).url()}
                        alt={game.image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg pb-2"
                      />
                    </div>
                    <p className="text-gray-700">
                      {truncateText(game.description, 30)}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold">
                    {selectedGame?.name}
                  </DialogTitle>
                  <DialogDescription>
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "66.67%" }}
                    >
                      <Image
                        loader={myLoader}
                        src={game.image ? urlForImage(game.image).url() : ""}
                        alt={
                          game.image ? game.image.alt : "Image not available"
                        }
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg px-4 py-2"
                      />
                    </div>
                    <p className="text-gray-700 mt-4 text-sm md:text-base lg:text-xl">
                      {selectedGame?.description}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <DialogClose />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { getData } from "../../components/Fetch/FetchGame";
// import { Card, CardContent } from "../../components/ui/card";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client as sanityClient } from "../../sanity/lib/client";
// import Header from "@/components/content/header";
// import "../../app/globals.css";
// import { myLoader } from "../../components/ui/nextLoader";
// import { boardGame } from "@/app/interface"; // Adjust the import path as needed
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// // Initialize the image URL builder
// const builder = imageUrlBuilder(sanityClient);

// // Function to get the URL for an image
// function urlForImage(image: SanityImageSource) {
//   return builder.image(image);
// }

// export default function Spel() {
//   const [data, setData] = useState<boardGame[]>([]); // Define the type for the state

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
//                 <Image
//                   loader={myLoader}
//                   src={urlForImage(game.image).url()}
//                   alt={game.image.alt}
//                   width={300}
//                   height={300}
//                   className="rounded-lg object-cover mb-4 mx-auto my-auto"
//                 />
//                 <p className="text-gray-700">{game.description}</p>
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
  const [data, setData] = useState<boardGame[]>([]); // Define the type for the state

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
            <Card key={idx} className="shadow-lg">
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
                    className="rounded-lg"
                  />
                </div>
                <p className="text-gray-700">
                  {truncateText(game.description, 30)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

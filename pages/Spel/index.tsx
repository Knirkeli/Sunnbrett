// import { useEffect, useState } from "react";
// import { getData } from "../../components/Fetch/FetchGame";
// import { Card, CardContent } from "../../components/ui/card";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
// import { client as sanityClient } from "../../sanity/lib/client";
// import Header from "@/components/content/header";
// import "../../app/globals.css";
// import { myLoader } from "../../components/ui/nextLoader";
// import boardGame from "@/app/interface";
// // Initialize the image URL builder
// const builder = imageUrlBuilder(sanityClient);

// // Function to get the URL for an image
// function urlForImage(image) {
//   return builder.image(image);
// }

// export default function Spel() {
//   const [data, setData] = useState([]);

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
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Våre Spel</h1>
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
//                   className="rounded-lg object-cover mb-4"
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
import { boardGame } from "@/app/interface"; // Adjust the import path as needed
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image: SanityImageSource) {
  return builder.image(image);
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Våre Spel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((game, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                <Image
                  loader={myLoader}
                  src={urlForImage(game.image).url()}
                  alt={game.image.alt}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <p className="text-gray-700">{game.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

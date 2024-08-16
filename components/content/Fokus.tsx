// "use client";

// import { boardGame } from "../../app/interface";
// import { client as sanityClient } from "../../sanity/lib/client";
// import { Card, CardContent } from "../ui/card";
// import Image from "next/image";
// // import { urlForImage} from "../sanity/lib/image"
// import imageUrlBuilder from "@sanity/image-url";

// // Initialize the image URL builder
// const builder = imageUrlBuilder(sanityClient);

// // Function to get the URL for an image
// function urlForImage(image) {
//   return builder.image(image);
// }

// // Custom loader function for Next.js Image component
// const myLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

// async function getData() {
//   const query = `*[_type == "boardgame" && tag =="Fokus"] {
//     name,
//     image,
//     description
//   }`;

//   const data = await sanityClient.fetch(query);
//   return data;
// }

// export default async function Fokus() {
//   const data: boardGame[] = await getData();

//   return (
//     <div className="text-2xl text-center">
//       <h3>Spel i Fokus</h3>
//       <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
//         {data.map((post, idx) => (
//           <Card key={idx}>
//             <CardContent className="mt-5">
//               <h3>{post.name}</h3>
//               <Image
//                 loader={myLoader}
//                 src={urlForImage(post.image).url()}
//                 alt={post.image.alt}
//                 width={200}
//                 height={200}
//                 className="rounded-t-lg h-[200px] object-cover"
//               />
//               <p>{post.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import { boardGame } from "../../app/interface";
import { getData } from "../Fetch/FetchFokus";
import { Card, CardContent } from "../ui/card";
import Image, { ImageLoader } from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client as sanityClient } from "../../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { myLoader } from "../../components/ui/nextLoader";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}

export default async function Fokus() {
  const data: boardGame[] = await getData();

  return (
    <div className="text-2xl text-center">
      <h3>Spel i Fokus</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
        {data.map((post, idx) => (
          <Card key={idx}>
            <CardContent className="mt-5">
              <h3>{post.name}</h3>
              <Image
                loader={myLoader}
                src={urlForImage(post.image).url()}
                alt={post.image.alt}
                width={200}
                height={200}
                className="rounded-t-lg h-[200px] object-cover mx-auto"
              />
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

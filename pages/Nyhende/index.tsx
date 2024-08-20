// import { useEffect, useState } from "react";
// import Header from "@/components/content/header";
// import "../../app/globals.css";
// import { client as sanityClient } from "../../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import BlockContent from "@sanity/block-content-to-react";
// import { useFetchPosts } from "../../components/Fetch/FetchNyhende";
// import { myLoader } from "../../components/ui/nextLoader";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { Post } from "@/app/interface";

// // Initialize the image URL builder
// const builder = imageUrlBuilder(sanityClient);

// // Function to get the URL for an image
// function urlForImage(image: SanityImageSource) {
//   return builder.image(image);
// }

// export default function Nyhende() {
//   const posts: Post[] = useFetchPosts();

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-4">
//         <h3 className="text-3xl font-bold text-center mb-8">Nyhende</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post, idx) => (
//             <div key={idx} className="shadow-lg p-4">
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               {post.mainImage && (
//                 <Image
//                   loader={myLoader}
//                   src={urlForImage(post.mainImage).url()}
//                   alt={post.mainImage.alt}
//                   width={300}
//                   height={300}
//                   className="rounded-lg object-cover mb-4"
//                 />
//               )}
//               <p className="text-gray-700">By {post.author.name}</p>
//               <p className="text-gray-700">
//                 {new Date(post.publishedAt).toLocaleDateString()}
//               </p>
//               <BlockContent blocks={post.body} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import Header from "@/components/content/header";
import "../../app/globals.css";
import { client as sanityClient } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { useFetchPosts } from "../../components/Fetch/FetchNyhende";
import { myLoader } from "../../components/ui/nextLoader";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Post } from "@/app/interface";
import { Card, CardContent } from "../../components/ui/card"; // Import the Card component

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}

export default function Nyhende() {
  const posts: Post[] = useFetchPosts();
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h3 className="text-3xl font-bold text-center mb-8">Nyhende</h3>
        <div className="grid grid-cols-1 gap-8 shadow-lg pb-5">
          {posts.map((post, idx) => (
            <Card
              key={idx}
              className="w-full md:w-4/5 shadow-lg mx-auto flex flex-col md:flex-row pb-3"
            >
              {post.mainImage && (
                <div className="md:w-1/2 flex justify-center items-center">
                  <Image
                    loader={myLoader}
                    src={urlForImage(post.mainImage).url()}
                    alt={post.mainImage.alt}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover mb-4 md:mb-0"
                  />
                </div>
              )}
              <CardContent className="p-4 md:w-1/2">
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">
                  {post.title}
                </h2>
                <BlockContent blocks={post.body} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

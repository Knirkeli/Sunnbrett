import { useEffect, useState } from "react";
import Header from "@/components/content/header";
import "../../app/globals.css";
import { client as sanityClient } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { useFetchPosts } from "../../components/Fetch/FetchOm";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Post } from "@/app/interface";
import { myLoader } from "../../components/ui/nextLoader"; // Import the loader function
import { Card, CardContent } from "../../components/ui/card"; // Import the Card component

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}

export default function Om() {
  const posts: Post[] = useFetchPosts();

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post, idx) => (
            <Card key={idx} className="w-full md:w-4/5 shadow-lg mx-auto">
              <CardContent className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-center mb-4">
                  {post.title}
                </h2>
                {post.mainImage && (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "66.67%" }}
                  >
                    <Image
                      loader={myLoader}
                      src={urlForImage(post.mainImage).url()}
                      alt={post.mainImage.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg mb-4 shadow-lg mb-4"
                    />
                  </div>
                )}
                <p className="text-gray-700 mb-4 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <BlockContent
                  className="pb-4 px-3 shadow-xl text-xl"
                  blocks={post.body}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

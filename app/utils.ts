import imageUrlBuilder from "@sanity/image-url";
import { client as sanityClient } from "../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
export function urlForImage(image: SanityImageSource) {
  return builder.image(image);
}

// Utility function to truncate text
export function truncateText(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
}
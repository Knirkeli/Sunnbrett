import { client as sanityClient } from "../../sanity/lib/client";
import { boardGame } from "@/app/interface"; // Adjust the import path as needed

export async function getData(): Promise<boardGame[]> {
  const query = `*[_type == "boardgame"] {
    name,
    image,
    description
  }`;

  const data: boardGame[] = await sanityClient.fetch(query);
  return data;
}

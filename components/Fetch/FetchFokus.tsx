import { client as sanityClient } from "../../sanity/lib/client";

export async function getData() {
  const query = `*[_type == "boardgame" && tag =="Fokus"] {
    name,
    image,
    description
  }`;

  const data = await sanityClient.fetch(query);
  return data;
}

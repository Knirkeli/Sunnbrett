import { client } from "../../sanity/lib/client";

export async function fetchImages() {
  const query = `*[_type == "imageWithDetails"]{
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    title,
    description,
    date
  }`;

  const images = await client.fetch(query);
  return images;
}

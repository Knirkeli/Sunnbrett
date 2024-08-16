import { client } from "../../sanity/lib/client";

export async function getHeaderData() {
  const query = `*[_type == "header"]{
    title,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    description
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

import { client } from "../../sanity/lib/client";

export async function getData() {
  const query = `*[_type == "post" && title == "Velkommen til oss"]{
    _id,
    title,
    body[] {
      ...,
      children[] {
        ...
      },
      markDefs[] {
        ...
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

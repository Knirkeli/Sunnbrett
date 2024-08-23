// import { client } from "../../sanity/lib/client";

// export async function getData() {
//   const query = `*[_type == "post" && title == "Velkommen til oss"]{
//     _id,
//     title,
//     body[] {
//       ...,
//       children[] {
//         ...
//       },
//       markDefs[] {
//         ...
//       }
//     }
//   }`;

//   const data = await client.fetch(query);
//   return data;
// }

import { useEffect, useState } from "react";
import { client as sanityClient } from "../../sanity/lib/client";
import { velkommenPost } from "../../app/interface";

export function useFetchPosts(): velkommenPost[] {
  const [posts, setPosts] = useState<velkommenPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
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
      const result = await sanityClient.fetch(query);
      setPosts(result);
    }
    fetchPosts();
  }, []);

  return posts;
}

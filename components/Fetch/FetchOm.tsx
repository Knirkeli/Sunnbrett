import { useEffect, useState } from "react";
import { client as sanityClient } from "../../sanity/lib/client";
import { Post } from "../../app/interface";

export function useFetchPosts(): Post[] {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const query = `*[_type == "post" && "Om" in categories[]->title]{
        title,
        slug,
        author->{
          name
        },
        mainImage,
        publishedAt,
        body
      }`;
      const result = await sanityClient.fetch(query);
      setPosts(result);
    }
    fetchPosts();
  }, []);

  return posts;
}

import { useEffect, useState } from "react";
import { client as sanityClient } from "../../sanity/lib/client";

export function useFetchSponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchSponsors() {
      const query = '*[_type == "sponsor"]';
      const result = await sanityClient.fetch(query);
      setSponsors(result);
    }
    fetchSponsors();
  }, []);

  return sponsors;
}

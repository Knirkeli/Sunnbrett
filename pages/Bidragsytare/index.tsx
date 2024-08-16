// import Header from "@/components/content/header";
// import "../../app/globals.css";

// export default function Bidragsytare() {
//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-4">
//         <h3 className="text-3xl font-bold text-center mb-8">Bidragsytare</h3>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Header from "@/components/content/header";
import "../../app/globals.css";
import { client as sanityClient } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to get the URL for an image
function urlForImage(image) {
  return builder.image(image);
}

// Custom loader function for Next.js Image component
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Bidragsytare() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    async function fetchSponsors() {
      const query = '*[_type == "sponsor"]';
      const result = await sanityClient.fetch(query);
      setSponsors(result);
    }
    fetchSponsors();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h3 className="text-3xl font-bold text-center mb-8">Bidragsytare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
              <Image
                loader={myLoader}
                src={urlForImage(sponsor.image).url()}
                alt={sponsor.image.alt}
                width={300}
                height={300}
                className="rounded-lg object-cover mb-4 mx-auto"
              />
              <p className="text-gray-700">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

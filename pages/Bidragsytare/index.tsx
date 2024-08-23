// import Header from "@/components/content/header";
// import "../../app/globals.css";
// import { client as sanityClient } from "../../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import { useFetchSponsors } from "../../components/Fetch/FetchSpons";
// import { myLoader } from "../../components/ui/nextLoader";
// import { Sponsor } from "@/app/interface";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { Card, CardContent } from "../../components/ui/card";
// import Footer from "@/components/content/footer";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "../../components/ui/dialog";
// import { urlForImage } from "../../app/utils";

// export default function Bidragsytare() {
//   const sponsors: Sponsor[] = useFetchSponsors();

//   return (
//     <>
//       <Header />
//       <div className="container mx-auto p-4 pb-[120px]">
//         <h3 className="text-3xl font-bold text-center mb-6">Bidragsytare</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//           {sponsors.map((sponsor, idx) => (
//             <Card
//               key={idx}
//               className="shadow-lg p-4 mb-8 cursor-pointer transform transition-transform duration-300 hover:scale-105"
//             >
//               <CardContent className="rounded shadow-xl">
//                 <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
//                 <Image
//                   loader={myLoader}
//                   src={urlForImage(sponsor.image).url()}
//                   alt={sponsor.image.alt}
//                   width={300}
//                   height={300}
//                   className="rounded-lg object-cover mb-4 mx-auto"
//                 />
//                 <p className="text-gray-700">{sponsor.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import Header from "@/components/content/header";
import "../../app/globals.css";
import { client as sanityClient } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useFetchSponsors } from "../../components/Fetch/FetchSpons";
import { myLoader } from "../../components/ui/nextLoader";
import { Sponsor } from "@/app/interface";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Card, CardContent } from "../../components/ui/card";
import Footer from "@/components/content/footer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../components/ui/dialog";
import { urlForImage } from "../../app/utils";

export default function Bidragsytare() {
  const sponsors: Sponsor[] = useFetchSponsors();

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 pb-[120px]">
        <h3 className="text-3xl font-bold text-center mb-6">Bidragsytare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {sponsors.map((sponsor, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <Card className="shadow-lg p-4 mb-8 cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <CardContent className="rounded shadow-xl">
                    <h2 className="text-xl font-semibold mb-2">
                      {sponsor.name}
                    </h2>
                    <Image
                      loader={myLoader}
                      src={urlForImage(sponsor.image).url()}
                      alt={sponsor.image.alt}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover mb-4 mx-auto w-72 h-72"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center pb-2">
                    {sponsor.name}
                  </DialogTitle>
                  <DialogDescription>
                    <Image
                      loader={myLoader}
                      src={urlForImage(sponsor.image).url()}
                      alt={sponsor.image.alt}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover mb-4 mx-auto"
                    />
                    <p className="max-h-48 overflow-y-auto">
                      {sponsor.description}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <DialogClose />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

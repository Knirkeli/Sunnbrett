// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { fetchImages } from "../Fetch/FetchImages";

// const ImageCarousel: React.FC = () => {
//   const [images, setImages] = React.useState<any[]>([]);

//   React.useEffect(() => {
//     async function loadImages() {
//       const fetchedImages = await fetchImages();
//       setImages(fetchedImages);
//     }

//     loadImages();
//   }, []);

//   return (
//     <div className="w-2/3 flex justify-center">
//       <div className="w-11/12">
//         <Carousel opts={{ loop: true }}>
//           <CarouselContent>
//             {images.map((image, index) => (
//               <CarouselItem key={index}>
//                 <img
//                   src={image.image.asset.url}
//                   alt={image.image.alt || `Image ${index + 1}`}
//                   className="w-full h-auto object-contain"
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { fetchImages } from "../Fetch/FetchImages";

// const ImageCarousel: React.FC = () => {
//   const [images, setImages] = React.useState<any[]>([]);

//   React.useEffect(() => {
//     async function loadImages() {
//       const fetchedImages = await fetchImages();
//       setImages(fetchedImages);
//     }

//     loadImages();
//   }, []);

//   return (
//     <div className="w-2/3 flex justify-center">
//       <div className="w-11/12">
//         <Carousel opts={{ loop: true }}>
//           <CarouselContent>
//             {images.map((image, index) => (
//               <CarouselItem key={index}>
//                 <div className="relative w-full pt-[56.25%] overflow-hidden">
//                   <img
//                     src={image.image.asset.url}
//                     alt={image.image.alt || `Image ${index + 1}`}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { fetchImages } from "../Fetch/FetchImages";

const ImageCarousel: React.FC = () => {
  const [images, setImages] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function loadImages() {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    }

    loadImages();
  }, []);

  // Split images into chunks of 4
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    chunkedImages.push(images.slice(i, i + 4));
  }

  return (
    <div className="w-3/4 flex mx-auto my-auto">
      <div className="w-11/12">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {chunkedImages.map((imageChunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-2">
                  {imageChunk.map((image, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative w-full pt-[56.25%] overflow-hidden"
                    >
                      <img
                        src={image.image.asset.url}
                        alt={
                          image.image.alt || `Image ${index * 4 + subIndex + 1}`
                        }
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;

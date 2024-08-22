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

//   // Split images into chunks of 4
//   const chunkedImages = [];
//   for (let i = 0; i < images.length; i += 4) {
//     chunkedImages.push(images.slice(i, i + 4));
//   }

//   return (
//     <div className="w-3/4 flex mx-auto my-auto">
//       <div className="w-11/12">
//         <Carousel opts={{ loop: true }} className="shadow-xl">
//           <CarouselContent>
//             {chunkedImages.map((imageChunk, index) => (
//               <CarouselItem key={index}>
//                 <div className="grid grid-cols-2 gap-2">
//                   {imageChunk.map((image, subIndex) => (
//                     <div
//                       key={subIndex}
//                       className="relative w-full pt-[56.25%] overflow-hidden"
//                     >
//                       <img
//                         src={image.image.asset.url}
//                         alt={
//                           image.image.alt || `Image ${index * 4 + subIndex + 1}`
//                         }
//                         className="absolute top-0 left-0 w-full h-full object-cover rounded"
//                       />
//                     </div>
//                   ))}
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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { fetchImages } from "../Fetch/FetchImages";

const ImageCarousel: React.FC = () => {
  const [images, setImages] = React.useState<any[]>([]);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

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
        <Carousel opts={{ loop: true }} className="shadow-xl">
          <CarouselContent>
            {chunkedImages.map((imageChunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-2">
                  {imageChunk.map((image, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative w-full pt-[56.25%] overflow-hidden"
                      onClick={() => setSelectedImage(image.image.asset.url)}
                    >
                      <img
                        src={image.image.asset.url}
                        alt={
                          image.image.alt || `Image ${index * 4 + subIndex + 1}`
                        }
                        className="absolute top-0 left-0 w-full h-full object-cover rounded cursor-pointer transform transition-transform duration-300 hover:scale-105"
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

      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto p-3"
            />
            <DialogClose asChild>
              <button
                title="Åpne bildet"
                className="absolute top-2 right-2"
              ></button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ImageCarousel;

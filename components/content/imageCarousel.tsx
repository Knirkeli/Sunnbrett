// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { fetchImages } from "../Fetch/FetchImages";

// const ImageCarousel: React.FC = () => {
//   const [images, setImages] = React.useState<any[]>([]);
//   const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

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
//     <div className="w-full sm:w-3/4 flex mx-auto my-auto sm:p-0">
//       <div className="w-full md:w-11/12 relative">
//         <Carousel opts={{ loop: true }} className="shadow-xl">
//           <CarouselContent>
//             {chunkedImages.map((imageChunk, index) => (
//               <CarouselItem key={index}>
//                 <div className="grid grid-cols-2 gap-2">
//                   {imageChunk.map((image, subIndex) => (
//                     <div
//                       key={subIndex}
//                       className="relative w-full pt-[56.25%] overflow-hidden"
//                       onClick={() => setSelectedImage(image.image.asset.url)}
//                     >
//                       <img
//                         src={image.image.asset.url}
//                         alt={
//                           image.image.alt || `Image ${index * 4 + subIndex + 1}`
//                         }
//                         className="absolute top-0 left-0 w-full h-full object-cover rounded cursor-pointer transform transition-transform duration-300 hover:scale-105"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 md:-left-10" />
//           <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 md:-right-10" />
//         </Carousel>
//       </div>

//       {selectedImage && (
//         <Dialog
//           open={!!selectedImage}
//           onOpenChange={() => setSelectedImage(null)}
//         >
//           <DialogContent className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto max-w-2xl">
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="w-full h-auto p-2 lg:p-3"
//             />
//             <DialogClose asChild>
//               <button
//                 title="Close image"
//                 className="absolute top-2 right-2"
//               ></button>
//             </DialogClose>
//           </DialogContent>
//         </Dialog>
//       )}
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
    <div className="w-full sm:w-3/4 flex mx-auto my-auto sm:p-0">
      <div className="w-full md:w-11/12 relative">
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
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 md:-left-10" />
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity duration-300 md:-right-10" />
        </Carousel>
      </div>

      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="w-full sm:w-3/4 lg:w-4/5 xl:w-3/4 h-auto max-w-5xl">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[80vh] max-w-full p-2 lg:p-3 object-contain"
            />
            <DialogClose asChild>
              <button
                title="Close image"
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

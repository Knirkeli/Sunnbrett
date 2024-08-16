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
//     <Carousel opts={{ loop: true }}>
//       <CarouselContent>
//         {images.map((image, index) => (
//           <CarouselItem key={index}>
//             <img
//               src={image.image.asset.url}
//               alt={image.image.alt || `Image ${index + 1}`}
//               className="w-full h-auto"
//             />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };

// export default ImageCarousel;

// components/content/imageCarousel.tsx
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 shadow-xl">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.image.asset.url}
                alt={image.image.alt || `Image ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

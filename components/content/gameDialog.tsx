// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "../ui/dialog";
// import { Card, CardContent } from "../ui/card";
// import Image from "next/image";
// import { myLoader } from "../ui/nextLoader";
// import { boardGame } from "@/app/interface";
// import { urlForImage, truncateText } from "../../app/utils";

// interface GameDialogProps {
//   game: boardGame;
//   selectedGame: boardGame | null;
//   setSelectedGame: (game: boardGame) => void;
// }

// const GameDialog: React.FC<GameDialogProps> = ({
//   game,
//   selectedGame,
//   setSelectedGame,
// }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Card
//           className="shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
//           onClick={() => setSelectedGame(game)}
//         >
//           <CardContent className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
//             <div className="relative w-full" style={{ paddingTop: "66.67%" }}>
//               <Image
//                 loader={myLoader}
//                 src={urlForImage(game.image).url()}
//                 alt={game.image.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg pb-2"
//               />
//             </div>
//             <p className="text-gray-700">
//               {truncateText(game.description, 10)}
//             </p>
//           </CardContent>
//         </Card>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle className="text-center text-2xl font-bold">
//             {selectedGame?.name}
//           </DialogTitle>
//           <DialogDescription>
//             <div className="relative w-full" style={{ paddingTop: "66.67%" }}>
//               <Image
//                 loader={myLoader}
//                 src={game.image ? urlForImage(game.image).url() : ""}
//                 alt={game.image ? game.image.alt : "Image not available"}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg px-4 py-2"
//               />
//             </div>
//             <div className="overflow-y-auto max-h-48 mt-4">
//               <p className="text-gray-700 text-sm md:text-base lg:text-xl text-left">
//                 {selectedGame?.description}
//               </p>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//         <DialogClose />
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default GameDialog;

// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "../ui/dialog";
// import { Card, CardContent } from "../ui/card";
// import Image from "next/image";
// import { myLoader } from "../ui/nextLoader";
// import { boardGame } from "@/app/interface";
// import { urlForImage, truncateText } from "../../app/utils";

// interface GameDialogProps {
//   game: boardGame;
//   selectedGame: boardGame | null;
//   setSelectedGame: (game: boardGame) => void;
// }

// const GameDialog: React.FC<GameDialogProps> = ({
//   game,
//   selectedGame,
//   setSelectedGame,
// }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Card
//           className="shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
//           onClick={() => setSelectedGame(game)}
//         >
//           <CardContent className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
//             <div className="relative w-full" style={{ paddingTop: "66.67%" }}>
//               <Image
//                 loader={myLoader}
//                 src={urlForImage(game.image).url()}
//                 alt={game.image.alt}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg pb-2"
//               />
//             </div>
//             <p className="text-gray-700">
//               {truncateText(game.description, 10)}
//             </p>
//           </CardContent>
//         </Card>
//       </DialogTrigger>
//       <DialogContent className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto max-w-none min-h-[40vh] max-h-[80vh] flex flex-col">
//         <DialogHeader className="flex-grow">
//           <DialogTitle className="text-center text-2xl font-bold">
//             {selectedGame?.name}
//           </DialogTitle>
//           <DialogDescription className="flex flex-col h-full">
//             <div
//               className="relative w-full max-h-[50%] overflow-hidden"
//               style={{ paddingTop: "50%" }}
//             >
//               <Image
//                 loader={myLoader}
//                 src={game.image ? urlForImage(game.image).url() : ""}
//                 alt={game.image ? game.image.alt : "Image not available"}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg px-4 py-2"
//               />
//             </div>
//             <div className="overflow-y-auto mt-4 flex-grow">
//               <p className="text-gray-700 text-sm md:text-base lg:text-xl text-left">
//                 {selectedGame?.description}
//               </p>
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//         <DialogClose />
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default GameDialog;

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { myLoader } from "../ui/nextLoader";
import { boardGame } from "@/app/interface";
import { urlForImage, truncateText } from "../../app/utils";

interface GameDialogProps {
  game: boardGame;
  selectedGame: boardGame | null;
  setSelectedGame: (game: boardGame) => void;
}

const GameDialog: React.FC<GameDialogProps> = ({
  game,
  selectedGame,
  setSelectedGame,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() => setSelectedGame(game)}
        >
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <div className="relative w-full" style={{ paddingTop: "66.67%" }}>
              <Image
                loader={myLoader}
                src={urlForImage(game.image).url()}
                alt={game.image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg pb-2"
              />
            </div>
            <div className="overflow-y-auto max-h-24 md:max-h-none">
              <p className="text-gray-700">
                {truncateText(game.description, 10)}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto max-w-none min-h-[40vh] max-h-[80vh] flex flex-col">
        <DialogHeader className="flex-grow">
          <DialogTitle className="text-center text-2xl lg:text-4xl font-bold">
            {selectedGame?.name}
          </DialogTitle>
          <DialogDescription className="flex flex-col h-full">
            <div
              className="relative w-full max-h-[50%] overflow-hidden"
              style={{ paddingTop: "50%" }}
            >
              <Image
                loader={myLoader}
                src={game.image ? urlForImage(game.image).url() : ""}
                alt={game.image ? game.image.alt : "Image not available"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg px-4 py-2"
              />
            </div>
            <div className="overflow-y-auto mb-0 mt-2 md:mt-4 flex-grow max-h-48 md:max-h-none">
              <p className="text-gray-700 text-sm md:text-base lg:text-xl text-left">
                {selectedGame?.description}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};

export default GameDialog;

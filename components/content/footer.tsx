import Image from "next/image";
import { myLoader } from "../ui/nextLoader";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-white mt-8 h-[316px] lg:h-[110px]">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex space-x-4 mb-4 lg:mb-0 left-0">
          <Image
            loader={myLoader}
            className="w-16 h-16 mt-2"
            src="spond.png"
            alt="Sunnbrett"
            width={20}
            height={20}
          />
          <Image
            loader={myLoader}
            className="w-16 h-16 mt-2"
            src="instagram.png"
            alt="Sunnbrett"
            width={20}
            height={20}
          />
          <Image
            loader={myLoader}
            className="w-16 h-16 mt-2"
            src="facebook.png"
            alt="Sunnbrett"
            width={20}
            height={20}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center lg:text-left">
          <p className="text-center">
            Besøksadresse: Leirvikstova Bandadalsplassen 2A 5417 Stord
          </p>
          <p className="text-center">
            Kontakt: Leirvikstova Bandadalsplassen 2A 5417 Stord
          </p>
          <p className="text-center">
            Speletid: Sundagar 17-23. Meld frå i Spond at du kjem
          </p>
        </div>
        <p className="text-sm mt-4 lg:mt-0">&copy; Knirkefri Design</p>
      </div>
    </footer>
  );
}

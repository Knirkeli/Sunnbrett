import Image from "next/image";
import { myLoader } from "../ui/nextLoader";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-white mt-6">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div>
          <Image
            loader={myLoader}
            className="w-40 h-40 md:w-64 md:h-64"
            src="spond.png"
            alt="Sunnbrett"
            width={60}
            height={60}
          />
        </div>
        <div className="flex items-center">
          <p>Besøksadresse: Leirvikstova Bandadalsplassen 2A 5417 Stord</p>
          <p>Kontakt: Leirvikstova Bandadalsplassen 2A 5417 Stord</p>
          <p>Speletid: Sundagar 17-23. Meld frå i Spond at du kjem</p>
        </div>
        <p className="text-sm">&copy; Knirkefri Design</p>
      </div>
    </footer>
  );
}

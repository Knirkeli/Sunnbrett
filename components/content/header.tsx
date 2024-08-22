import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MenuSquareIcon } from "lucide-react";
import { myLoader } from "../../components/ui/nextLoader";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { name: "Heim", href: "/" },
  { name: "Om oss", href: "/Om" },
  { name: "Våre spel", href: "/Spel" },
  { name: "Nyhende", href: "/Nyhende" },
  { name: "Bidragsytare", href: "/Bidragsytare" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-b relative header">
      <div className="flex items-center justify-start max-w-full px-4 sm:px-6 lg:max-w-7xl pl-15">
        <div>
          <Link href="/">
            <Image
              loader={myLoader}
              className="w-40 h-40 md:w-64 md:h-64"
              src="logo.png"
              alt="Sunnbrett"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="ml-9">
          <h1 className="text-white text-xl md:text-3xl">
            Sunnhordland brettspelklubb
          </h1>
        </div>
      </div>
      <div className="absolute md:bottom-5 bottom-1 right-0 flex items-end justify-end mx-auto max-w-2xl py-5 sm:px-6 lg:max-w-7xl">
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-gray-600 text-lg font-semibold"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-white text-lg font-semibold hover:text-gray-600 transition duration-100 hover:text-grey-600"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center sm:py-auto sm:px-6">
          <Sheet>
            <SheetTrigger>
              <MenuSquareIcon className="lg:hidden flex flex-col gap-y-1.5 h-12 w-12 sm:h20 sm:w-20 text-white" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between header">
              <div>
                <SheetHeader>
                  <SheetTitle className="text-center text-white text-2xl pb-8">
                    Roll the dice
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 pb-4">
                  {links.map((link, idx) => (
                    <div key={idx}>
                      <Link
                        className={`text-lg font-semibold ${
                          pathname === link.href
                            ? "text-gray-600"
                            : "text-white"
                        } hover:text-gray-600 transition duration-100`}
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </nav>
                <div className="mt-4 gap-6">
                  <p className="text-white">
                    <strong>Besøksadresse:</strong> Leirvikstova,
                    Bandadalsplassen 2A 5417 Stord
                  </p>
                  <p className="text-white">
                    <strong>Kontakt:</strong> Kommunikasjon skjer via Spond
                  </p>
                  <p className="text-white">
                    <strong>Speletid:</strong> Sundagar 17-23. Meld frå i Spond
                    at du kjem
                  </p>
                </div>
              </div>
              <div className="flex gap-8 mt-4 justify-center">
                <Link
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fspond.com%2Flanding%2Fgroup%2FLDYFD%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR12MJSfg7z0g-zxM_LdFK3fYPjTnmN1Nw5p_-gYhxrusgqSnBkatUNYbfM_aem_IAOmLyHH_X_vjevEDiNNaw&h=AT0ytI1xhEmTkgzG7G9zdSViIdZSk1WTmeuFlFj6u48L3Xk49XYqtpzv427hzSkbvmMQnIBYsKEUNSb0QnMBkF48dsw7IJUzi-DUKb3W8wLSDk0yVyW7XpEuoN6mZQQYdj5hFsD8FDr5njday7Q"
                  passHref
                >
                  <Image
                    loader={myLoader}
                    className="w-16 h-16 mt-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    src="spond.png"
                    alt="Link til Spond"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/sunnhordlandbrettspelklubb?fbclid=IwY2xjawEz_dhleHRuA2FlbQIxMAABHadXadPLZC-lpoAUCUeRdg1xwQgLFZtbFEs4SUkvMIMQ4mmaFUyYWgNTTg_aem_e_IQPnxN0X0yCeeQcf8Vfw"
                  passHref
                >
                  <Image
                    loader={myLoader}
                    className="w-16 h-16 mt-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    src="instagram.png"
                    alt="Link til Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61553151140756"
                  passHref
                >
                  <Image
                    loader={myLoader}
                    className="w-16 h-16 mt-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    src="facebook.png"
                    alt="Link til Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

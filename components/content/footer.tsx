// import Image from "next/image";
// import { myLoader } from "../ui/nextLoader";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="fixed bottom-0 w-full border-t bg-white mt-8 h-10 lg:h-[110px] flex items-center">
//       <div className="flex grid-cols-3 items-center justify-center justify-between mx-auto px-4 sm:px-6 lg:max-w-7xl gap-8">
//         <div className="flex space-x-4 mb-4 lg:mb-0">
//           <Link
//             href="https://l.facebook.com/l.php?u=https%3A%2F%2Fspond.com%2Flanding%2Fgroup%2FLDYFD%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR12MJSfg7z0g-zxM_LdFK3fYPjTnmN1Nw5p_-gYhxrusgqSnBkatUNYbfM_aem_IAOmLyHH_X_vjevEDiNNaw&h=AT0ytI1xhEmTkgzG7G9zdSViIdZSk1WTmeuFlFj6u48L3Xk49XYqtpzv427hzSkbvmMQnIBYsKEUNSb0QnMBkF48dsw7IJUzi-DUKb3W8wLSDk0yVyW7XpEuoN6mZQQYdj5hFsD8FDr5njday7Q"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="spond.png"
//               alt="Link til Spond"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <Link
//             href="https://www.instagram.com/sunnhordlandbrettspelklubb?fbclid=IwY2xjawEz_dhleHRuA2FlbQIxMAABHadXadPLZC-lpoAUCUeRdg1xwQgLFZtbFEs4SUkvMIMQ4mmaFUyYWgNTTg_aem_e_IQPnxN0X0yCeeQcf8Vfw"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="instagram.png"
//               alt="Link til Instagram"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <Link
//             href="https://www.facebook.com/profile.php?id=61553151140756"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="facebook.png"
//               alt="Link til Facebook"
//               width={20}
//               height={20}
//             />
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center lg:text-left hidden lg:block">
//           <p className="text-center">
//             <strong>Besøksadresse:</strong> Leirvikstova, Bandadalsplassen 2A
//             5417 Stord
//           </p>
//           <p className="text-center">
//             <strong>Kontakt:</strong> Kommunikasjon skjer via Spond
//           </p>
//           <p className="text-center">
//             <strong>Speletid:</strong> Sundagar 17-23. Meld frå i Spond at du
//             kjem
//           </p>
//         </div>
//         <div>
//           <p className="text-sm absolute bottom-0 mb-1 text-center lg:relative lg:mb-0">
//             &copy; Knirkefri Design
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from "next/image";
import { myLoader } from "../ui/nextLoader";
import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="fixed bottom-0 w-full border-t bg-white mt-8 h-10 lg:h-[110px] flex items-center">
//       <div className="flex md:grid-cols-3 grid-cols-1 items-center justify-center justify-between mx-auto px-4 sm:px-6 gap-8 w-full">
//         <div className="flex space-x-4 mb-4 lg:mb-0">
//           <Link
//             href="https://l.facebook.com/l.php?u=https%3A%2F%2Fspond.com%2Flanding%2Fgroup%2FLDYFD%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR12MJSfg7z0g-zxM_LdFK3fYPjTnmN1Nw5p_-gYhxrusgqSnBkatUNYbfM_aem_IAOmLyHH_X_vjevEDiNNaw&h=AT0ytI1xhEmTkgzG7G9zdSViIdZSk1WTmeuFlFj6u48L3Xk49XYqtpzv427hzSkbvmMQnIBYsKEUNSb0QnMBkF48dsw7IJUzi-DUKb3W8wLSDk0yVyW7XpEuoN6mZQQYdj5hFsD8FDr5njday7Q"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="spond.png"
//               alt="Link til Spond"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <Link
//             href="https://www.instagram.com/sunnhordlandbrettspelklubb?fbclid=IwY2xjawEz_dhleHRuA2FlbQIxMAABHadXadPLZC-lpoAUCUeRdg1xwQgLFZtbFEs4SUkvMIMQ4mmaFUyYWgNTTg_aem_e_IQPnxN0X0yCeeQcf8Vfw"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="instagram.png"
//               alt="Link til Instagram"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <Link
//             href="https://www.facebook.com/profile.php?id=61553151140756"
//             passHref
//           >
//             <Image
//               loader={myLoader}
//               className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
//               src="facebook.png"
//               alt="Link til Facebook"
//               width={20}
//               height={20}
//             />
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center lg:text-left hidden lg:block">
//           <p className="text-center">
//             <strong>Besøksadresse:</strong> Leirvikstova, Bandadalsplassen 2A
//             5417 Stord
//           </p>
//           <p className="text-center">
//             <strong>Kontakt:</strong> Kommunikasjon skjer via Spond
//           </p>
//           <p className="text-center">
//             <strong>Speletid:</strong> Sundagar 17-23. Meld frå i Spond at du
//             kjem
//           </p>
//         </div>
//         <div>
//           <p className="text-sm absolute bottom-0 mb-1 text-center lg:relative lg:mb-0">
//             &copy; Knirkefri Design
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-white mt-8 h-10 lg:h-[110px] flex items-center">
      <div className="flex md:grid-cols-3 grid-cols-1 items-center justify-center justify-between mx-auto px-4 sm:px-6 gap-8 w-full">
        <div className="lg:space-x-4 mb-4 lg:mb-0 lg:ml-4 xl:mx-10 hidden lg:flex">
          <Link
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fspond.com%2Flanding%2Fgroup%2FLDYFD%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR12MJSfg7z0g-zxM_LdFK3fYPjTnmN1Nw5p_-gYhxrusgqSnBkatUNYbfM_aem_IAOmLyHH_X_vjevEDiNNaw&h=AT0ytI1xhEmTkgzG7G9zdSViIdZSk1WTmeuFlFj6u48L3Xk49XYqtpzv427hzSkbvmMQnIBYsKEUNSb0QnMBkF48dsw7IJUzi-DUKb3W8wLSDk0yVyW7XpEuoN6mZQQYdj5hFsD8FDr5njday7Q"
            passHref
          >
            <Image
              loader={myLoader}
              className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
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
              className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
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
              className="w-16 h-16 mt-2 hidden lg:block cursor-pointer transform transition-transform duration-300 hover:scale-105"
              src="facebook.png"
              alt="Link til Facebook"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center lg:text-left hidden lg:block">
          <p className="text-center">
            <strong>Besøksadresse:</strong> Leirvikstova, Bandadalsplassen 2A
            5417 Stord
          </p>
          <p className="text-center">
            <strong>Kontakt:</strong> Kommunikasjon skjer via Spond
          </p>
          <p className="text-center">
            <strong>Speletid:</strong> Sundagar 17-23. Meld frå i Spond at du
            kjem
          </p>
        </div>
        <div className="w-full flex justify-center lg:w-auto lg:flex-none">
          <p className="text-sm absolute bottom-0 mb-1 text-center lg:relative lg:mb-0">
            &copy; Knirkefri Design
          </p>
        </div>
      </div>
    </footer>
  );
}

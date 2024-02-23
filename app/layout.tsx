// 'use client';

// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";


// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         {children}</body>
//     </html>
//   );
// }

'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isStudioPage = router.pathname === '/studio';

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isStudioPage && <Header />}
        {children}
      </body>
    </html>
  );
}
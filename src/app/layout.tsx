import "~/styles/globals.css";

import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";

import Footer from "./_components/organisms/footer";
import Navbar from "./_components/organisms/navbar";

import Providers from "./QueryProvider";

export const metadata = {
  title: "aminos v1.0",
  description: "created by anshumaan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "javascript",
    "typescript",
    "react",
    "developer",
    "nextjs",
    "meta tags",
    "seo",
  ],
  author: "anshumaan kumar prasad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-screen grow flex-col items-center justify-between gap-14 overflow-hidden px-6 py-4 font-poppins md:gap-20">
            <Navbar />
            <div className="w-full md:w-[700px] lg:w-[800px]">
              <TRPCReactProvider cookies={cookies().toString()}>
                {children}
              </TRPCReactProvider>
            </div>
            <Providers>
              <Footer />
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}

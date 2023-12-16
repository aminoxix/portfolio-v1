import "~/styles/globals.css";

import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";

import Navbar from "./_components/organisms/navbar";
import Footer from "./_components/organisms/footer";

export const metadata = {
  title: "aminos v1.0",
  description: "created by anshumaan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex min-h-screen flex-col items-center gap-14 px-9 py-4 font-poppins md:gap-20 md:px-0">
          <Navbar />
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}

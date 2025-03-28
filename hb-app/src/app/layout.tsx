import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/navbar/Nav";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Meintein",
  description: "Created by Meintein Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col h-screen max-h-screen">
            <Nav />
            <div className="flex-grow overflow-y-auto bg-background text- goldy">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

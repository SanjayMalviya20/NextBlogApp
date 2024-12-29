import { Geist, Geist_Mono,Outfit } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});

export const metadata = {
  title: "ThoughtBridge",
  description: "Create your blog's",

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} `}
      >
        {children}
      </body>
    </html>
  );
}

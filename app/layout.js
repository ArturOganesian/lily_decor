import { Anek_Devanagari } from "next/font/google";
import "./globals.css";

const font = Anek_Devanagari({ subsets: ["latin"],weight: ['100','200','300','400','500','600','700','800'] });

export const metadata = {
  title: "Lily Decor",
  description: "Handcrafted marzipan for stunning cake creations",
  icons: '/favicon.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white`}>{children}</body>
    </html>
  );
}

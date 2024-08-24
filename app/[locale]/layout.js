import { DM_Sans } from "next/font/google";
import  TopHeader from '@/app/components/header/TopHeader'
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lily Decor",
  description: "Handcrafted marzipan for stunning cake creations",
  icons: "/favicon.png",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={`${font.className} bg-white`}>
        <NextIntlClientProvider messages={messages}>
        <TopHeader />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

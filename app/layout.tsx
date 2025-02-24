import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";

const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "Disney+ Clone for Educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white dark:bg-[#1a1c29] ${openSans.className} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

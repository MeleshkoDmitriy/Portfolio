import "./globals.scss";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Raleway } from 'next/font/google';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Dmitriy Meleshko',
    template: "%s | Dmitriy Meleshko"
  },
  description: "Portfolio made by Dmitriy Meleshko",
};

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <div className="container">
          <div className="content">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

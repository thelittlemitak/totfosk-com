import "./globals.css";
import "./tempo.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="tempo1">[This is a header]</header>
        <main>{children}</main>
        <footer className="tempo1">[This is a footer]</footer>
      </body>
    </html>
  );
}

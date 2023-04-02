import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Aslam JM",
  description: "my portfolio and blog",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.className}  bg-light text-dark w-full min-h-screen`}
    >
      <body className="container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

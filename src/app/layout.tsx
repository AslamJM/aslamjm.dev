import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Aslam JM",
  description: "my portfolio and blog",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} font-mont bg-light text-dark w-full min-h-screen`}
    >
      <body className="container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

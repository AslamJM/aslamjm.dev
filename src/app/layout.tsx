import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Aslam JM",
  description: "my portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className="container mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

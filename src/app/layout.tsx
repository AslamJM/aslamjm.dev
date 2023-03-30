import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

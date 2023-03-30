import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "800", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <h1 className="text-2xl underline underline-offset-4 text-center text-amber-900 mb-3">
        Welcome to my Blog
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        voluptates itaque quidem pariatur eveniet aperiam minima vitae, porro
        debitis fugit? Dolorem iusto perspiciatis nam repudiandae voluptate
        impedit libero est minima!
      </p>
    </main>
  );
}

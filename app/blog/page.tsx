import { Header } from "@/components/header";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Blog() {
  return (
    <>
      <Header />
      <h2>Blog</h2>
    </>
  );
}

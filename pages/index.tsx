import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import desktop from "../public/images/image-product-desktop.jpg";
import favicon from "../public/images/favicon-32x32.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-none">
          <div className="rounded-lg overflow-hidden w-96">
            <Image src={desktop} alt={"desktop"}></Image>
          </div>
        </div>
        <div className="flex-none">
          <p>This is a text</p>
        </div>
      </div>
      {/* */}
    </>
  );
}

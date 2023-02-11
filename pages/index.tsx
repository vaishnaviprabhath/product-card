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
      <div className="flex flex-row justify-center">
        <div>
          <Image src={desktop} alt={"desktop"}></Image>
        </div>
      </div>
      {/* */}
    </>
  );
}

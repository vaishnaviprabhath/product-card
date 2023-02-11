import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import iconCart from "../public/images/image-product-desktop.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <p className="text-lg font-montserrat">Sample text in lg</p>
      <Image src={iconCart} alt={""}></Image>
    </>
  );
}

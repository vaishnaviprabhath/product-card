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
          <div className="rounded-l-md overflow-hidden w-64">
            <Image src={desktop} alt={"desktop"}></Image>
          </div>
        </div>
        <div className="flex flex-col text-left w-64 h-96 bg-green-200 rounded-r-md ">
          <div className=" w-44 pl-4 pt-2 ">
            <p className="font-Montserrat text-md font-medium text-dgb">
              perfume
            </p>

            <h1> Gabrielle Essence Eau De Parfum</h1>

            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
        </div>
      </div>
      {/* */}
    </>
  );
}

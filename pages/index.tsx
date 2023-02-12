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
          <div className=" w-48 pl-4 pt-2 ">
            <p className="font-montserrat text-md font-medium text-dgb uppercase ">
              p e r f u m e
            </p>

            <h1 className="font-fraunces font-bold text-3xl pt-4 leading-none">
              Gabrielle Essence Eau De Parfum
            </h1>

            <p className="font-montserrat text-md font-medium text-dgb pt-2 tracking-tight w-52">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="pt-4  ">
              <h2>
                <span className="font-montserrat font-bold text-3xl text-darkcyan ">
                  $149.99 &nbsp;{" "}
                </span>
                <span className="line-through font-montserrat font-light text-sm text-dgb">
                  {" "}
                  $169.99
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </>
  );
}

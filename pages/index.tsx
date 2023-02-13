import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import desktop from "../public/images/image-product-desktop.jpg";
import favicon from "../public/images/favicon-32x32.png";
import icon from "../public/images/icon-cart.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <div className="flex items-center justify-center h-screen bg-cream">
        <div className="flex-none">
          <div className="rounded-l-md overflow-hidden w-64">
            <Image src={desktop} alt={"desktop"}></Image>
          </div>
        </div>
        <div className="flex flex-col text-left w-64 h-96 bg-white rounded-r-md ">
          <div className=" w-52 pl-6 pt-4 ">
            <p className="font-montserrat text-xs font-medium text-dgb uppercase tracking-widest ">
              p e r f u m e
            </p>

            <h1 className="font-fraunces font-bold text-3xl pt-4 leading-none tracking-tight text-vdb">
              Gabrielle Essence Eau De Parfum
            </h1>

            <p className="font-montserrat font-medium text-sm text-dgb pt-4 tracking-tight w-52">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="pt-4 pb-4">
              <h2>
                <span className="font-fraunces font-bold text-3xl text-darkcyan ">
                  $149.99 &nbsp;{" "}
                </span>
                <span className="line-through font-fraunces font-light text-sm text-dgb">
                  {" "}
                  $169.99
                </span>
              </h2>
            </div>
          </div>
          <div className="pl-6   h-10 w-56">
            <button className="flex items-center justify-center gap-3 bg-darkcyan text-white w-full h-full py-4 rounded font-montserrat font-bold">
              <Image src={icon} alt={"icon-cart"}></Image>
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>

      {/* */}
    </>
  );
}

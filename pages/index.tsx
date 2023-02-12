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
      <div className="flex items-center justify-center h-screen bg-cream">
        <div className="flex-none">
          <div className="rounded-l-md overflow-hidden w-64">
            <Image src={desktop} alt={"desktop"}></Image>
          </div>
        </div>
        <div className="flex flex-col text-left w-60 h-96 bg-white rounded-r-md ">
          <div className=" w-48 pl-4 pt-2 ">
            <p className="font-montserrat text-md font-medium text-dgb uppercase ">
              p e r f u m e
            </p>

            <h1 className="font-fraunces font-bold text-3xl pt-4 leading-none text-vdb">
              Gabrielle Essence Eau De Parfum
            </h1>

            <p className="font-montserrat text-md font-medium text-dgb pt-2 tracking-tight w-52">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="py-4 ">
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
            <div className="flex rounded-l-lg rounded-r-lg  overflow-hidden ">
              <button className=" text-white bg-darkcyan text-sm py-3 px-4 w-48 h-10 font-montserrat  font-bold">
                Add to cart
              </button>
              <div className="bg-darkcyan p-3">
                <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* */}
    </>
  );
}

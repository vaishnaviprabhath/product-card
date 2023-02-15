import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
        <link rel="shortcut icon" href="images/favicon-32x32.png" />
      </Head>
      <div className="md:flex md:items-center md:justify-center h-screen bg-cream">
        <div className="md:flex-none ">
          <div className="rounded-l-md overflow-hidden hidden md:inline-block">
            <Image
              src="/images/image-product-desktop.jpg"
              width={256}
              height={384}
              alt={"desktop"}
            ></Image>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen bg-cream">
          <div className="flex-none "></div>
          <div className="rounded-l-md overflow-hidden md:hidden">
            <Image
              src="/images/image-product-mobile.jpg"
              width={200}
              height={300}
              alt={"mobile"}
            ></Image>
          </div>
        </div>

        <div className="md:flex md:flex-col text-left md:w-64 md:h-96 w-40 h-96 flex flex-col bg-white ">
          <div className=" md:w-52 md:pl-5 md:pt-4 w-52 pl-5 pt-4 ">
            <p className="font-montserrat text-xs font-base text-dgb uppercase tracking-widest ">
              p e r f u m e
            </p>

            <h1 className="font-fraunces font-bold text-3xl pt-4 leading-none tracking-tight text-vdb">
              Gabrielle Essence Eau De Parfum
            </h1>

            <p className="font-montserrat font-medium text-sm text-dgb pt-4 tracking-tight pr-2 w-56 ">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="pt-4 pb-6">
              <h2>
                <span className="font-fraunces font-bold text-2xl text-darkcyan ">
                  $149.99 &nbsp;{" "}
                </span>
                <span className="line-through font-montserrat font-normal  text-sm text-dgb">
                  {" "}
                  $169.99
                </span>
              </h2>
            </div>
          </div>

          <div className="pl-6 h-14 pb-2 w-56">
            <button className="flex items-center justify-center gap-3 bg-darkcyan text-white w-full h-full py-4 rounded-md font-montserrat font-semibold text-sm">
              <Image
                src="/images/icon-cart.svg"
                width={15}
                height={16}
                alt={"icon-cart"}
              ></Image>
              <p>Add to cart</p>
            </button>
            <div className="md:hidden">On mobile</div>
            <div className="hidden md:inline-block">On desktop</div>
            <div className="bg-darkcyan md:bg-dgb">
              mobile darkcyan and desktop dgb
            </div>
          </div>
        </div>
      </div>

      {/* */}
    </>
  );
}

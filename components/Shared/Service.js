import Image from "next/image";

import FadeIntoView from "../Animations/FadeIntoView";

export default function Service({ imageRight, title, content, src, alt }) {
  return (
    <>
      {imageRight ? (
        <FadeIntoView>
          <section className="w-10/12 2xl:w-8/12 lg:h-[40vh] mx-auto flex flex-col lg:flex-row lg:space-x-8 my-24">
            <div className="order-last lg:order-first w-full lg:w-1/2 h-full lg:p-8">
              <h2 className="mt-4 lg:mt-0 mb-4 text-lg font-semibold capitalize lg:mb-8 text-accent mb:text-2xl lg:text-xl 2xl:text-3xl">
                {title}
              </h2>
              <div className="order-first lg:order-last mb-4 lg:mb-8 border-2 border-solid border-primary w-[15%]" />
              <p className="text-xs lg:text-sm 2xl:text-base w-10/12 text-primary">
                {content}
              </p>
            </div>
            <div className="relative w-full h-60 lg:w-1/2 lg:h-80">
              <Image src={src} alt={alt} layout="fill" objectFit="cover" />
            </div>
          </section>
        </FadeIntoView>
      ) : (
        <FadeIntoView>
          <section className="w-10/12 2xl:w-8/12 lg:h-[40vh] mx-auto flex flex-col lg:flex-row lg:space-x-8 my-24">
            <div className="relative w-full h-60 lg:w-1/2 lg:h-80">
              <Image src={src} alt={alt} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full lg:w-1/2 h-full lg:p-8">
              <h2 className="mt-4 lg:mt-0 mb-4 text-lg font-semibold capitalize lg:mb-8 text-accent mb:text-2xl lg:text-xl 2xl:text-3xl">
                {title}
              </h2>
              <div className="mb-4 lg:mb-8 border-2 border-solid border-primary w-[15%]" />
              <p className="text-xs lg:text-sm 2xl:text-base w-10/12 text-primary">
                {content}
              </p>
            </div>
          </section>
        </FadeIntoView>
      )}
    </>
  );
}

import Link from "next/link";
import Image from "next/image";

import FadeIntoView from "../Animations/FadeIntoView";

export default function FadeInImageWithText({
  imageRight,
  src,
  alt,
  title,
  content,
  href,
  link,
}) {
  return (
    <>
      {imageRight ? (
        <FadeIntoView>
          <div className="flex flex-col items-center justify-center overflow-hidden text-secondary bg-primary lg:py-0 lg:flex-row lg:h-[70vh]">
            <div className="relative w-full lg:order-2 md:h-96 lg:w-[60%] h-60 lg:h-full">
              <Image src={src} alt={alt} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full md:py-12 lg:py-0 lg:order-1 lg:w-[40%]">
              <div className="w-full px-12 mb-8 text-left md:w-10/12 md:mx-auto 2xl:w-8/12">
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                  <div className="flex flex-col items-start justify-center md:w-10/12 lg:w-full xl:w-10/12 md:items-start">
                    <h2 className="my-8 text-lg font-semibold uppercase border-b border-solid lg:mb-10 2xl:mb-20 lg:pb-4 2xl:pb-8 text-accent mb:text-2xl lg:text-xl 2xl:text-3xl border-secondary">
                      {title}
                    </h2>
                    <p className="mb-8 text-sm lg:mb-8 2xl:mb-12 md:text-xl lg:text-base 2xl:text-2xl">
                      {content}
                    </p>
                    <Link href={href}>
                      <a className="text-[0.5rem] 2xl:text-xs uppercase border-b border-solid border-secondary hover:border-0 hover-animation">
                        {link}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIntoView>
      ) : (
        <FadeIntoView>
          <div className="flex flex-col items-center justify-center overflow-hidden text-secondary bg-primary lg:py-0 lg:flex-row lg:h-[70vh]">
            <div className="relative w-full lg:w-[60%] h-60 md:h-96 lg:h-full">
              <Image src={src} alt={alt} layout="fill" objectFit="cover" />
            </div>
            <div className="w-full md:py-12 lg:py-0 lg:order-1 lg:w-[40%]">
              <div className="w-full px-12 mb-8 text-left md:w-10/12 md:mx-auto 2xl:w-8/12">
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                  <div className="flex flex-col items-start justify-center md:w-10/12 lg:w-full xl:w-10/12 md:items-start">
                    <h2 className="my-8 text-lg font-semibold uppercase border-b border-solid lg:mb-10 2xl:mb-20 lg:pb-4 2xl:pb-8 text-accent mb:text-2xl lg:text-xl 2xl:text-3xl border-secondary">
                      {title}
                    </h2>
                    <p className="mb-8 text-sm lg:mb-8 2xl:mb-12 md:text-xl lg:text-base 2xl:text-2xl">
                      {content}
                    </p>
                    <Link href={href}>
                      <a className="text-[0.5rem] 2xl:text-xs uppercase border-b border-solid border-secondary hover:border-0 hover-animation">
                        {link}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIntoView>
      )}
    </>
  );
}

import Image from "next/image";
import FadeIntoView from "../../Animations/FadeIntoView";

export default function Hero() {
  return (
    <FadeIntoView>
      <section className="z-10 w-full h-[90vh]">
        <div className="relative w-full h-full">
          <Image
            src="/about.jpg"
            alt="About GK Consulting"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 z-20 w-full h-full bg-opacity-20 bg-primary" />
          <div className="absolute top-0 left-0 z-30 w-full h-full">
            <div className="flex items-end justify-start w-10/12 h-full mx-auto">
              <h1 className="text-lg leading-relaxed capitalize text-secondary lg:leading-10 md:text-2xl xl:text-5xl lg:text-4xl 2xl:text-6xl mb-[5%]">
                We love matching awesome companies <br /> with talented
                individuals.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </FadeIntoView>
  );
}

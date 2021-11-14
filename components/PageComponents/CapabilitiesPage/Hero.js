import FadeIntoView from "../../Animations/FadeIntoView";

export default function Hero() {
  return (
    <FadeIntoView>
      <div className="w-10/12 mx-auto flex items-center justify-center md:w-9/12 xl:w-8/12 h-[40vh] md:h-[50vh] xl:h-[60vh]">
        <div className="md:flex md:items-start md:justify-start">
          <div className="md:w-3/12 lg:w-4/12">
            <h1 className="mb-4 font-light capitalize md:text-xl md:mb-0 xl:text-2xl 2xl:text-3xl text-accent">
              What we do
            </h1>
          </div>
          <div className="md:w-8/12 lg:w-8/12">
            <p className="text-sm font-extralight md:text-xl xl:text-2xl 2xl:text-4xl text-accent2">
              We collaborate with companies on their journey to grow their
              teams. <br className="hidden md:block" /> Impacting the lives of
              the talent that we introduce to companies.{" "}
              <br className="hidden md:block" /> Understanding the talent needs
              of the companies we partner with.
            </p>
          </div>
        </div>
      </div>
    </FadeIntoView>
  );
}

export default function Hero() {
  return (
    // <section className="h-screen overflow-hidden bg-secondary text-accent test-bg">
    <section className="h-[40vh] lg:h-[70vh] 2xl:h-[95vh] overflow-hidden bg-secondary text-accent w-full">
      <div className="flex items-center justify-start w-10/12 h-full mx-auto bg-transparent">
        <div className="flex flex-col items-start justify-end h-full mb-[30%] md:mb-[20%] 2xl:mb-[30%] bg-transparent">
          <h2 className="mb-4 text-xs font-semibold text-center uppercase lg:text-lg xl:text-xl 2xl:text-2xl text-accent lg:mb-8 2xl:mb-12">
            Welcome to GK Consulting.
          </h2>
          <h1 className="text-lg leading-relaxed capitalize lg:leading-10 md:text-2xl xl:text-5xl lg:text-4xl 2xl:text-6xl text-primary">
            Talent acquisition in a responsible & empathetic way.
          </h1>
        </div>
      </div>
    </section>
  );
}

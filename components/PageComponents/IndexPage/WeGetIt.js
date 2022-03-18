export default function WeGetIt() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[20vh] md:h-[50vh] lg:h-[70vh] grid place-items-center bg-primary text-accent text-center group">
          <h2 className="text-3xl font-bold uppercase lg:text-4xl md:group-hover:blur-sm">
            we get it!
          </h2>
          <div className="absolute top-0 left-0 z-40 hidden w-full h-full mx-auto bg-opacity-25 ring-accent ring-2 bg-accent md:group-hover:block hover-animation">
            <div className="flex flex-col items-center justify-center w-1/2 h-full mx-auto space-y-4">
              <h2 className="uppercase">we get it</h2>
              <p>
                Whether you are a small company or a large enterprise, we
                understand that when you are looking for the right person to
                bring onboard your team or company - the right person has more
                than simply ticking all technical skills requirements.
              </p>
              <p className="hidden lg:block">
                As you strive for your dreams, we know that sometimes, making a
                career move is not only about changing jobs but, actually
                investing in the right move to progress your career.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[20vh] md:h-[50vh] lg:h-[70vh] grid place-items-center bg-accent text-primary text-center group md:group-hover:blur-sm">
          <h2 className="text-3xl font-bold uppercase lg:text-4xl md:group-hover:blur-sm">
            we care!
          </h2>
          <div className="absolute top-0 left-0 z-40 hidden w-full h-full mx-auto bg-opacity-50 ring-primary ring-2 bg-primary md:group-hover:block hover-animation">
            <div className="flex flex-col items-center justify-center w-1/2 h-full mx-auto space-y-4">
              <h2 className="uppercase">we care</h2>
              <p>
                Our vision is to offer responsible recruitment services to
                everyone we engage with. Call it `talent` or `human capital` or
                `human resources`, it is a key component to building and
                sustaining successful businesses. People are every businesses
                most important asset, people help create value, and having the
                right people can help every business triumph.
              </p>
              <p className="hidden lg:block">
                Career decisions are one of the biggest decisions that you will
                make in your lifetime - you want to know that you are
                collaborating with people who understand the importance of these
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

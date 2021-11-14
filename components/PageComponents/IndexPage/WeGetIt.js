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
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, cumque. Doloribus, expedita nulla. Enim
                reprehenderit rerum repellendus magni numquam nulla ipsam, ipsum
                doloremque totam quia quam, aliquid nihil accusamus illum?
              </p>
              <p className="hidden lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut,
                inventore molestias accusamus commodi eius corrupti! Cupiditate,
                a. Facilis doloribus quis deserunt rem id, expedita consequuntur
                adipisci porro aliquam laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[20vh] md:h-[50vh] lg:h-[70vh] grid place-items-center bg-accent text-primary text-center group md:group-hover:blur-sm">
          <h2 className="text-3xl font-bold uppercase lg:text-4xl group-hover:blur-sm">
            we care!
          </h2>
          <div className="absolute top-0 left-0 z-40 hidden w-full h-full mx-auto bg-opacity-50 ring-primary ring-2 bg-primary md:group-hover:block hover-animation">
            <div className="flex flex-col items-center justify-center w-1/2 h-full mx-auto space-y-4">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, cumque. Doloribus, expedita nulla. Enim
                reprehenderit rerum repellendus magni numquam nulla ipsam, ipsum
                doloremque totam quia quam, aliquid nihil accusamus illum?
              </p>
              <p className="hidden lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut,
                inventore molestias accusamus commodi eius corrupti! Cupiditate,
                a. Facilis doloribus quis deserunt rem id, expedita consequuntur
                adipisci porro aliquam laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

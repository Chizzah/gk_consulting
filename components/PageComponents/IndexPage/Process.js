export default function Process() {
  return (
    <section className="py-20 text-secondary bg-accent2 lg:py-40">
      <div className="container flex items-start justify-between mx-auto">
        <div className="w-1/2">
          {/* <StaticImage
            src="../../images/process.png"
            alt="A face"
            width={800}
            className=""
          /> */}
        </div>
        <div className="w-1/2">
          <h2 className="mb-4 text-2xl font-semibold uppercase lg:mb-8 text-accent">
            The Process
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus
            repellat dolor ex nobis nemo expedita. Excepturi expedita blanditiis
            laudantium consequatur autem quibusdam doloremque iusto beatae earum
            numquam, repellat fugit?
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h3 className="mb-4 font-semibold text-accent">Process One</h3>
              <p className="w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                quo aut in deleniti tenetur perspiciatis.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-accent">Process Two</h3>
              <p className="w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                quo aut in deleniti tenetur perspiciatis.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-accent">Process Three</h3>
              <p className="w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                quo aut in deleniti tenetur perspiciatis.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-accent">Process Four</h3>
              <p className="w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                quo aut in deleniti tenetur perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

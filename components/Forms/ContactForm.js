import FadeIntoView from "../Animations/FadeIntoView";

const reasonOptions = [
  {
    label: "Schedule a talk",
    value: "A",
  },
  {
    label: "Request Service Rates",
    value: "B",
  },
  {
    label: "General Inquiries",
    value: "C",
  },
];

const findOptions = [
  {
    label: "How did you hear about us?",
    value: "",
  },
  {
    label: "Social Media",
    value: "A",
  },
  {
    label: "Search Engine",
    value: "B",
  },
  {
    label: "Referrals / Recommendations",
    value: "B",
  },
];

export default function ContactForm() {
  return (
    <section className="min-h-screen py-12 bg-primary lg:py-24">
      <FadeIntoView>
        <div className="w-8/12 mx-auto mb-8 text-center lg:mb-16 lg:w-full">
          <h1 className="mb-4 text-2xl font-medium lg:text-4xl 2xl:text-5xl text-gray-50">
            Let`s work together
          </h1>
          <p className="px-4 mb-12 text-sm uppercase lg:text-xl 2xl:text-2xl font-extralight lg:px-0">
            Get in touch and let us know how we can help.
          </p>
        </div>
        <form className="w-10/12 mx-auto lg:w-8/12 2xl:w-1/2">
          <div className="w-full">
            <select className="w-full h-12 px-4 mb-4 text-sm font-medium lg:text-lg lg:h-16 lg:px-8 lg:mb-8">
              {reasonOptions.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
            <input
              type="text"
              name=""
              placeholder="Full Name *"
              className="h-12 p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg lg:h-16"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Company or organization"
              className="h-12 p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg lg:h-16"
            />
            <input
              type="text"
              name=""
              placeholder="Email Address *"
              className="h-12 p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg lg:h-16"
              required
            />
            <input
              type="text"
              name=""
              placeholder="Phone Number"
              className="h-12 p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg lg:h-16"
            />
            <input
              type="text"
              name=""
              placeholder="Location"
              className="h-12 p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg lg:h-16"
            />
            <select className="w-full h-12 px-4 mb-4 text-sm font-medium lg:text-lg lg:h-16 lg:px-8 lg:mb-8">
              {findOptions.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full">
            <textarea
              className="w-full p-4 text-sm font-medium placeholder-black lg:p-8 lg:text-lg"
              cols="30"
              rows="10"
              placeholder="Tell us a bit about your needs"
            />
          </div>
        </form>
      </FadeIntoView>
    </section>
  );
}

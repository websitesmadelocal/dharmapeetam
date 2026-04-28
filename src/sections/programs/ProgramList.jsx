const programs = [
  {
    title: "Felicitation Ceremony",
    desc: "Recognizing academic excellence and achievements in the legal field.",
    img: "/assets/images/feliciate1.jpeg",
  },
  {
    title: "Financial Awareness Seminar",
    desc: "Introduction to financial planning and fraud prevention.",
    img: "/assets/images/programe5.jpeg",
  },
  {
    title: "Legal Awareness Sessions",
    desc: "Educating communities about rights and legal processes.",
    img: "/assets/images/programe.jpeg",
  },
];

const ProgramList = () => {
  return (
    <section className="py-20 bg-lightBg">

      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {programs.map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* Image */}
      <div className="w-full aspect-video overflow-hidden rounded-xl shadow-md">
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>
            {/* Content */}
            <div>

              <h3 className="text-xl font-heading text-primary mb-3">
                {item.title}
              </h3>

              <p className="text-textMuted text-sm md:text-base mb-4">
                {item.desc}
              </p>

              {/* <button className="text-accent text-sm font-medium">
                Read More →
              </button> */}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProgramList;
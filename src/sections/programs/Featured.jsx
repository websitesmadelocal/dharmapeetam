const Featured = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* Image */}
        <div>
          <img
            src="/assets/images/programe3.jpeg"
            alt="Leadership Program"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div>

          <h3 className="text-sm text-accent mb-2">
            Featured Program
          </h3>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
            Sumedha Student Leadership Programme
          </h2>

          <p className="text-textMuted text-sm md:text-base mb-5">
            Conducted at Sumedha High School, this program focuses on leadership,
            confidence building, and practical awareness for students.
          </p>

          {/* <button className="bg-accent text-white px-5 py-2.5 rounded-md text-sm">
            Learn More
          </button> */}

        </div>

      </div>

    </section>
  );
};

export default Featured;
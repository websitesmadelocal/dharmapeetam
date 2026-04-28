const CoreValues = () => {
  return (
    <section className="py-20 bg-white">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading text-primary">
          Our Core Values
        </h2>
        <p className="text-textMuted mt-2">
          Values that guide our mission and impact
        </p>
      </div>

      {/* Featured Card */}
      <div className="max-w-6xl mx-auto bg-cardBg rounded-xl shadow overflow-hidden grid md:grid-cols-2">

        {/* Image */}
        <img
          src="/assets/images/banners/abhilashan-banner.png"
          alt="Executive Member"
          className="w-full h-full object-cover"
        />

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">

          <h3 className="text-xl font-heading text-primary mb-2">
            Mr. Abhilash Gopinathan
          </h3>

          <p className="text-textMuted text-sm">
            Dedicated professional committed to empowering individuals through
            education, training, and legal awareness.
          </p>

        </div>

      </div>

    </section>
  );
};

export default CoreValues;
const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>
          <img
            src="/assets/images/founder.png"
            alt="Founder"
            className="rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-heading text-primary mb-4">
            Founder
          </h2>

          <p className="text-textMuted">
            Dr. S. Chandra Sekhar has been a pioneer in legal education and
            awareness, impacting countless aspiring professionals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Founder;
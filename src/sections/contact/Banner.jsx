const Banner = () => {
  return (
    <section className="relative h-[250px] md:h-[300px] w-full">

      <img
        src="/assets/images/banners/contact-banner.png"
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-heading">
          Contact Us
        </h1>
      </div>

    </section>
  );
};

export default Banner;
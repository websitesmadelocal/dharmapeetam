const Banner = () => {
  return (
    <section className="relative h-[300px] w-full">

      {/* Background Image */}
      <img
        src="/assets/images/banners/about-banner.png"
        alt="About"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-heading">
          About Us
        </h1>
      </div>

    </section>
  );
};

export default Banner;
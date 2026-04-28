const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/assets/images/banners/banner-home.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="w-full md:ml-auto md:max-w-xl text-white text-center md:text-left">

          {/* Heading */}
          <h1 className="font-heading leading-tight 
            text-2xl sm:text-3xl md:text-5xl 
            mb-4 md:mb-6">

            Legal Aid &{" "}
            <span className="text-accent">Education</span>
            <br />
            for a Better{" "}
            <span className="text-accent">Tomorrow</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200 
            mb-5 md:mb-6 max-w-md md:max-w-full mx-auto md:mx-0">

            Providing Free Legal Assistance & Empowering Future Lawyers
          </p>

          {/* Button */}
          <button className="bg-accent text-white 
            px-5 sm:px-6 py-2.5 sm:py-3 
            rounded-md shadow-lg 
            hover:opacity-90 transition">

            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
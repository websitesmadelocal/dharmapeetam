import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] overflow-hidden">

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden md:flex w-full h-full">

        {/* ================= LEFT (65%) ================= */}
        <div className="w-[65%] h-full relative overflow-hidden">

          <img
            src="/assets/images/banners/team-banner2.png"
            alt="Hero"
            style={{
              transform: `translateY(${scrollY * 0.15}px) scale(1.1)`
            }}
            className="w-full h-full object-cover"
          />

          {/* Soft blend into right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-[#0F2A44]" />

          {/* bottom soft fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        </div>

        {/* ================= RIGHT (35%) ================= */}
        <div className="w-[35%] h-full flex items-center justify-center bg-[#0F2A44]">

          <div
            className="
              w-[90%]
              text-white text-left

              bg-white/5
              backdrop-blur-lg
              border border-white/10
              rounded-2xl
              p-6 md:p-8

              shadow-xl
              relative overflow-hidden
              animate-float
            "
          >

            {/* LIGHT SWEEP */}
            <div className="absolute inset-0 before:absolute before:content-[''] before:w-1/3 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-skew-x-12 before:animate-sweep" />

            <div className="relative z-10">

              {/* TAGLINE */}
              <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
                Empowering Justice • Education • Equality
              </p>

              {/* HEADING */}
              <h1 className="
                font-heading leading-tight
                text-3xl sm:text-4xl md:text-5xl
                mb-4 md:mb-6
                font-bold
                bg-gradient-to-r from-white via-accent to-white
                bg-[length:200%_200%]
                text-transparent bg-clip-text
                animate-gradient
              ">
                Building Access to Justice
                <br />
                Through Education & Support
              </h1>

              {/* TEXT */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                We provide free legal aid, awareness programs, and skill development initiatives to empower individuals and build a more just society.
              </p>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full">
                  Free Legal Aid
                </span>
                <span className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full">
                  Education
                </span>
                <span className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full">
                  Youth Empowerment
                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/courses")}
                className="
                  bg-accent text-white
                  px-6 py-3
                  rounded-md
                  hover:scale-105
                  transition
                "
              >
                Learn More
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="md:hidden relative w-full h-full">

        <img
          src="/assets/images/banners/team-banner.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center px-5">

          <div className="
            w-full
            text-white

            bg-black/30
            backdrop-blur-lg
            border border-white/10
            rounded-2xl
            p-6
          ">

            <p className="text-accent text-xs uppercase tracking-widest mb-2">
              Empowering Justice • Education
            </p>

            <h1 className="
              font-heading text-3xl font-bold mb-4
              bg-gradient-to-r from-white via-accent to-white
              bg-[length:200%_200%]
              text-transparent bg-clip-text
              animate-gradient
            ">
              Building Access to Justice
            </h1>

            <p className="text-sm text-gray-200 mb-5">
              Free legal aid, awareness programs, and education initiatives.
            </p>

            <button
              onClick={() => navigate("/courses")}
              className="bg-accent px-5 py-2.5 rounded-md"
            >
              Learn More
            </button>

          </div>
        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }

        .before\\:animate-sweep::before {
          animation: sweep 3.5s infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;
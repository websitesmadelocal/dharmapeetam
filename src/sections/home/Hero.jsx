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

        {/* ================= LEFT IMAGE ================= */}
        <div className="w-[65%] h-full relative overflow-hidden">

          <img
            src="/assets/images/banners/team-banner2.png"
            alt="Elimination of Violence Against Women"
            style={{
              transform: `translateY(${scrollY * 0.15}px) scale(1.1)`,
            }}
            className="w-full h-full object-cover"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-[#0F2A44]" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-[35%] h-full flex items-center justify-center bg-[#0F2A44] px-4">

          <div
            className="
              w-[92%]
              text-white
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              rounded-2xl
              p-6 lg:p-7
              shadow-xl
              relative overflow-hidden
              animate-float
            "
          >

            {/* LIGHT SWEEP */}
            <div
              className="
                absolute inset-0
                before:absolute
                before:content-['']
                before:w-1/3
                before:h-full
                before:bg-gradient-to-r
                before:from-transparent
                before:via-white/10
                before:to-transparent
                before:-skew-x-12
                before:animate-sweep
              "
            />

            <div className="relative z-10">

              {/* EVENT LABEL */}
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">
                Dharmapeetam Presents
              </p>

              {/* MAIN HEADING */}
              <h1
                className="
                  font-heading
                  leading-tight
                  text-3xl lg:text-4xl
                  font-bold
                  mb-3
                  bg-gradient-to-r
                  from-white
                  via-accent
                  to-white
                  bg-[length:200%_200%]
                  text-transparent
                  bg-clip-text
                  animate-gradient
                "
              >
                Elimination of Violence
                <br />
                Against Women
              </h1>

              {/* DATE */}
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30">
                <p className="text-accent text-xs sm:text-sm font-semibold">
                  November 25, 2026
                </p>
              </div>

              {/* INTRO */}
              <p className="text-sm text-gray-200 leading-relaxed mb-5">
                On the eve of the International Day for the Elimination of
                Violence Against Women, Dharmapeetam invites students,
                scholars and young voices to participate in two engaging
                legal competitions.
              </p>

              {/* ================= EVENTS ================= */}
              <div className="space-y-3 mb-5">

                {/* ARTICLE WRITING */}
                <div className="bg-white/10 border border-white/10 rounded-xl p-3">
                  <h2 className="text-sm font-bold text-accent mb-1">
                    📝 Article Writing Competition
                  </h2>

                  <p className="text-xs text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">
                      Topic:
                    </span>{" "}
                    The Conflict of Laws – Jurisdictional Competence of
                    Foreign Courts in Matrimonial Disputes Involving Indian
                    Couples.
                  </p>

                  <p className="text-[11px] text-gray-300 mt-2">
                    Submission Deadline:{" "}
                    <span className="text-accent font-semibold">
                      September 22, 2026
                    </span>
                  </p>
                </div>

                {/* ONLINE DEBATE */}
                <div className="bg-white/10 border border-white/10 rounded-xl p-3">
                  <h2 className="text-sm font-bold text-accent mb-1">
                    🎤 Online Debate Competition
                  </h2>

                  <p className="text-xs text-gray-200 leading-relaxed">
                    Debate the proposition concerning the jurisdiction of
                    foreign courts in matrimonial disputes of Hindu couples
                    married in India.
                  </p>

                  <p className="text-[11px] text-gray-300 mt-2">
                    Oral Debate:{" "}
                    <span className="text-accent font-semibold">
                      October 24 & 25, 2026
                    </span>
                  </p>
                </div>

              </div>

              {/* ================= IMPORTANT DATES ================= */}
              

              {/* BUTTON */}
              <button
                onClick={() => navigate("/evaw")}
                className="
                  w-full
                  bg-accent
                  text-white
                  px-6 py-3
                  rounded-md
                  font-semibold
                  text-sm
                  hover:scale-[1.02]
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                View Competition Details
              </button>

            </div>
          </div>

        </div>
      </div>


      {/* ================= MOBILE LAYOUT ================= */}
      <div className="md:hidden relative w-full h-full">

        <img
          src="/assets/images/banners/team-banner.png"
          alt="Elimination of Violence Against Women"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5 py-6 overflow-y-auto">

          <div
            className="
              w-full
              max-h-full
              text-white
              bg-black/40
              backdrop-blur-lg
              border border-white/10
              rounded-2xl
              p-5
            "
          >

            {/* EVENT LABEL */}
            <p className="text-accent text-[10px] uppercase tracking-widest mb-2 font-semibold">
              Dharmapeetam Presents
            </p>

            {/* HEADING */}
            <h1
              className="
                font-heading
                text-2xl sm:text-3xl
                leading-tight
                font-bold
                mb-2
                bg-gradient-to-r
                from-white
                via-accent
                to-white
                bg-[length:200%_200%]
                text-transparent
                bg-clip-text
                animate-gradient
              "
            >
              Elimination of Violence
              <br />
              Against Women
            </h1>

            {/* MAIN DATE */}
            <div className="inline-block mb-3">
              <span className="text-accent text-xs font-semibold">
                November 25, 2026
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
              Join us in raising awareness through legal education,
              thoughtful writing and meaningful debate against violence
              towards women.
            </p>

            {/* ARTICLE */}
            <div className="bg-white/10 border border-white/10 rounded-lg p-3 mb-3">

              <h2 className="text-sm font-bold text-accent mb-1">
                📝 Article Writing
              </h2>

              <p className="text-[11px] text-gray-200 leading-relaxed">
                <span className="font-semibold text-white">
                  The Conflict of Laws
                </span>{" "}
                – Jurisdictional Competence of Foreign Courts in Matrimonial
                Disputes Involving Indian Couples.
              </p>

              <p className="text-[10px] text-gray-400 mt-2">
                Deadline:{" "}
                <span className="text-accent font-semibold">
                  September 22, 2026
                </span>
              </p>

            </div>

            {/* DEBATE */}
            <div className="bg-white/10 border border-white/10 rounded-lg p-3 mb-3">

              <h2 className="text-sm font-bold text-accent mb-1">
                🎤 Online Debate
              </h2>

              <p className="text-[11px] text-gray-200 leading-relaxed">
                Debate the jurisdiction of foreign courts in matrimonial
                disputes of Hindu couples married in India.
              </p>

              <p className="text-[10px] text-gray-400 mt-2">
                Oral Debate:{" "}
                <span className="text-accent font-semibold">
                  October 24 & 25, 2026
                </span>
              </p>

            </div>

            {/* DATES */}
            {/* BUTTON */}
            <button
              onClick={() => navigate("/evaw")}
              className="
                w-full
                bg-accent
                text-white
                px-5 py-2.5
                rounded-md
                text-xs
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              View Competition Details
            </button>

          </div>
        </div>

      </div>


      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
        }


        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }


        @keyframes sweep {
          0% {
            transform: translateX(-150%) skewX(-12deg);
          }

          100% {
            transform: translateX(250%) skewX(-12deg);
          }
        }

        .before\\:animate-sweep::before {
          animation: sweep 3.5s infinite;
        }

      `}</style>

    </section>
  );
};

export default Hero;

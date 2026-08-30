import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const Banner = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToRegistration = () => {
    document
      .getElementById("registration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openImage = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-primary">

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            relative z-10
            flex
            min-h-[calc(100svh-70px)]
            items-center
            justify-center
            px-4
            py-8
            sm:px-6
            sm:py-12
            lg:px-8
            lg:py-16
          "
        >
          <div
            className="
              flex
              w-full
              max-w-7xl
              items-center
              justify-center
              gap-4
              lg:gap-8
            "
          >

            {/* ================= LEFT IMAGE ================= */}
            <button
              type="button"
              onClick={() =>
                openImage("/assets/images/evaw/evaw1.jpeg")
              }
              className="
                hidden
                w-[22%]
                overflow-hidden
                rounded-2xl
                shadow-2xl
                sm:block
                cursor-zoom-in
                focus:outline-none
                focus:ring-2
                focus:ring-accent
              "
            >
              <img
                src="/assets/images/evaw/evaw1.jpeg"
                alt="Elimination of Violence Against Women"
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                  md:h-[480px]
                  lg:h-[580px]
                "
              />
            </button>


            {/* ================= CENTER CONTENT ================= */}
            <div
              className="
                w-full
                text-center
                text-white
                sm:w-[56%]
              "
            >

              {/* LOGO */}
              <img
                src="/assets/images/logo8.png"
                alt="Dharmapeetam"
                className="
                  mx-auto
                  mb-4
                  h-14
                  w-auto
                  sm:mb-6
                  sm:h-20
                  lg:h-24
                "
              />

              {/* LABEL */}
              <p
                className="
                  mb-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-accent
                  sm:text-xs
                  md:text-sm
                  sm:tracking-[0.3em]
                "
              >
                National Legal Competitions
              </p>

              {/* HEADING */}
              <h1
                className="
                  font-heading
                  text-3xl
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                ELIMINATION OF
                <br />

                <span className="text-accent">
                  VIOLENCE AGAINST WOMEN
                </span>
              </h1>

              {/* ORGANISATION */}
              <p
                className="
                  mt-3
                  text-sm
                  text-gray-200
                  sm:mt-5
                  sm:text-base
                  md:text-lg
                "
              >
                Organised by Dharmapeetam
              </p>

              {/* DATE */}
              <p
                className="
                  mt-1
                  text-base
                  font-semibold
                  text-accent
                  sm:mt-2
                  sm:text-lg
                  md:text-xl
                "
              >
                25 November 2026
              </p>

              {/* DESCRIPTION */}
              <p
                className="
                  mx-auto
                  mt-3
                  max-w-xl
                  text-xs
                  leading-relaxed
                  text-gray-300
                  sm:mt-4
                  sm:text-sm
                  md:text-base
                "
              >
                Join us in promoting awareness, legal education and
                meaningful dialogue towards ending violence against women.
              </p>

              {/* BUTTON */}
              <button
                type="button"
                onClick={scrollToRegistration}
                className="
                  mt-6
                  rounded-lg
                  bg-accent
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:opacity-90
                  cursor-pointer
                  sm:mt-8
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Register Now
              </button>

            </div>


            {/* ================= RIGHT IMAGE ================= */}
            <button
              type="button"
              onClick={() =>
                openImage("/assets/images/evaw/evaw2.jpeg")
              }
              className="
                hidden
                w-[22%]
                overflow-hidden
                rounded-2xl
                shadow-2xl
                sm:block
                cursor-zoom-in
                focus:outline-none
                focus:ring-2
                focus:ring-accent
              "
            >
              <img
                src="/assets/images/evaw/evaw2.jpeg"
                alt="Elimination of Violence Against Women"
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                  md:h-[480px]
                  lg:h-[580px]
                "
              />
            </button>

          </div>
        </div>


        {/* ================= MOBILE IMAGES ================= */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-3
            px-4
            pb-10
            sm:hidden
          "
        >

          {/* IMAGE 1 */}
          <button
            type="button"
            onClick={() =>
              openImage("/assets/images/evaw/evaw1.jpeg")
            }
            className="
              w-full
              overflow-hidden
              rounded-xl
              shadow-xl
              cursor-zoom-in
              focus:outline-none
              focus:ring-2
              focus:ring-accent
            "
          >
            <img
              src="/assets/images/evaw/evaw1.jpeg"
              alt="Elimination of Violence Against Women"
              className="
                aspect-[4/1]
                w-full
                object-cover
              "
            />
          </button>


          {/* IMAGE 2 */}
          <button
            type="button"
            onClick={() =>
              openImage("/assets/images/evaw/evaw2.jpeg")
            }
            className="
              w-full
              overflow-hidden
              rounded-xl
              shadow-xl
              cursor-zoom-in
              focus:outline-none
              focus:ring-2
              focus:ring-accent
            "
          >
            <img
              src="/assets/images/evaw/evaw2.jpeg"
              alt="Elimination of Violence Against Women"
              className="
                aspect-[4/1]
                w-full
                object-cover
              "
            />
          </button>

        </div>


        {/* ================= SCROLL INDICATOR ================= */}
        <div
          className="
            absolute
            bottom-4
            left-0
            z-20
            hidden
            w-full
            justify-center
            text-white
            animate-bounce
            sm:flex
          "
        >
          <ChevronDown size={32} />
        </div>

      </section>


      {/* ================= IMAGE LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
          "
          onClick={closeImage}
        >

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeImage}
            className="
              absolute
              right-4
              top-4
              z-[110]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20
              hover:text-accent
              sm:right-6
              sm:top-6
            "
            aria-label="Close image"
          >
            <X size={28} />
          </button>


          {/* FULL IMAGE */}
          <img
            src={selectedImage}
            alt="Event poster"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-lg
              object-contain
              shadow-2xl
              sm:max-h-[92vh]
              sm:max-w-[90vw]
            "
          />

        </div>
      )}
    </>
  );
};

export default Banner;

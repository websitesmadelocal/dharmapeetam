import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrolled = scrollY > 50;

  const linkClass = ({ isActive }) =>
    `
      relative transition-all duration-300
      hover:text-accent
      ${isActive ? "text-accent" : "text-white/90"}
    `;

  return (
    <div
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0F2A44]/60 backdrop-blur-2xl shadow-xl py-2"
            : "bg-primary py-3"
        }
      `}
    >

      {/* 🌊 SCROLL PROGRESS BAR */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-accent transition-all"
        style={{
          width: `${Math.min((scrollY / 300) * 100, 100)}%`,
        }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* ================= LOGO ================= */}
        <div className="relative group flex items-center gap-3">

          <NavLink to="/">
            <img
              src="/assets/images/logo8.png"
              alt="Dharmapeetam"
              className={`
                object-contain transition-all duration-300
                ${scrolled ? "h-10" : "h-14"}
              `}
            />

            {/* ✨ LOGO SHINE */}
            <div className="
              absolute inset-0
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              -skew-x-12
              opacity-0 group-hover:opacity-100
              animate-[shine_2s_infinite]
            " />
          </NavLink>

        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex gap-8 text-sm">

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Courses", "/courses"],
            ["Programs", "/programs"],
            ["Our Team", "/team"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `
                  relative px-1 py-2 transition-all duration-300
                  ${isActive ? "text-accent" : "text-white/90"}
                `
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  {/* underline animation */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}

        </div>

        {/* ================= HAMBURGER ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-[#0F2A44]/95 backdrop-blur-xl
          flex flex-col gap-4 px-6 py-6
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Courses", "/courses"],
          ["Programs", "/programs"],
          ["Our Team", "/team"],
          ["Gallery", "/gallery"],
          ["Contact", "/contact"],
        ].map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setOpen(false)}
            className="text-white/90 hover:text-accent transition"
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* ================= GLOBAL ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>

    </div>
  );
};

export default Navbar;
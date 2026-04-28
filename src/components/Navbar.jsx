import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="fixed top-0 w-full bg-primary text-white z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="font-heading text-xl">
          DHARMAPEETAM
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
    {/* Mobile Menu */}
{open && (
  <div className="md:hidden bg-primary px-6 pb-4 flex flex-col gap-3 text-sm">
    
    <Link onClick={toggleMenu} to="/">Home</Link>
    <Link onClick={toggleMenu} to="/about">About</Link>
    <Link onClick={toggleMenu} to="/courses">Courses</Link>
    <Link onClick={toggleMenu} to="/programs">Programs</Link>
    <Link onClick={toggleMenu} to="/team">Our Team</Link>
    <Link onClick={toggleMenu} to="/gallery">Gallery</Link>
    <Link onClick={toggleMenu} to="/contact">Contact</Link>

  </div>
)}
    </div>
  );
};

export default Navbar;
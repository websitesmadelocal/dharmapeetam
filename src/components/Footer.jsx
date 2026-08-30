import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Column 1 - About */}
        <div>
          <h2 className="font-heading text-xl mb-4">Dharmapeetam</h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Providing free legal aid, awareness, and educational support to
            empower aspiring legal professionals and underserved communities.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-heading text-lg mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/evaw">Elimination Of Violence Against Women </Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="font-heading text-lg mb-4">Contact</h3>

          <div className="space-y-6 text-sm text-gray-300">
            {/* Bengaluru Office */}
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">
                  Bengaluru Office
                </p>
                <p>
                  #232, Rajaswi Building,
                  <br />
                  8th Cross, Winn Field Garden,
                  <br />
                  MCECHS Layout,
                  <br />
                  Bengaluru - 560077
                </p>
              </div>
            </div>

            {/* Hyderabad Office */}
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">
                  Hyderabad Office
                </p>
                <p>
                  5-5-35/162/F5,
                  <br />
                  Flat No. 5, 1st Floor,
                  <br />
                  Soni Business Complex,
                  <br />
                  Kukatpally Y Junction,
                  <br />
                  Telangana - 500072
                </p>
              </div>
            </div>

            {/* Guntur Office */}
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">Guntur Office</p>
                <p>
                  Dr. No: 20-5-461,
                  <br />
                  Muthayalareddy Nagar, 7th Line,
                  <br />
                  Ward No. 4,
                  <br />
                  Amaravathi Road,
                  <br />
                  Guntur,
                  <br />
                  Andhra Pradesh - 522002, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>94406 32117</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <p>dharmapeetam4all@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="font-heading text-lg mb-4">Follow Us</h3>

          <div className="flex gap-4 text-sm text-gray-300 mb-4">
            <a
              href="https://youtube.com/@dharmapetam"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>

            <a
              href="https://instagram.com/dharmapeetam_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>

          <p className="text-sm text-gray-400">
            Stay connected for updates and events.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dharmapeetam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
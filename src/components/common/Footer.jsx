import { Link } from "react-scroll";
import NYC from "../../assets/img/nycity.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "New York", to: "newyork" },
  { label: "Travel", to: "travel" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
];

const socialLinks = [
  { icon: <FaFacebook size={15} />, hover: "hover:bg-blue-600" },
  {
    icon: <FaInstagram size={15} />,
    hover: "hover:bg-pink-500",
    href: "https://www.instagram.com",
  },
  { icon: <FaLinkedinIn size={15} />, hover: "hover:bg-blue-500" },
  { icon: <FaMediumM size={15} />, hover: "hover:bg-gray-600" },
  { icon: <FaGithub size={15} />, hover: "hover:bg-gray-500" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <a href="/">
              <img src={NYC} alt="NYC Logo" width={160} />
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Discover the magic of New York City — iconic landmarks, vibrant
              culture, and unforgettable adventures await.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href || "#"}
                  target="_blank"
                  className={`w-8 h-8 rounded-full bg-white/10 flex justify-center items-center transition-colors duration-300 ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-white/60 hover:text-blue-400 transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-white/60 text-sm">
              <li>New York City, NY 10001, USA</li>
              <li>+1 (212) 555-0199</li>
              <li>hello@nycitytravel.com</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Plan your trip
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Ready to explore the city that never sleeps?
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
            >
              <BiSolidPlaneAlt size={16} />
              Get in touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-white/30 text-xs">
          <span>© 2026 NYCity Travel. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Designed with <span className="text-red-400 mx-1">♥</span> for New
            York
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

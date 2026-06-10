import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import NYC from "../assets/img/nycity.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "New York", to: "newyork" },
  { label: "Travel", to: "travel" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-black/80 backdrop-blur-md shadow-lg h-16"
            : "bg-transparent h-20"
        }`}
      >
        <div className="flex w-full justify-between items-center h-full px-6">
          {/* Logo */}
          <a href="/">
            <img src={NYC} alt="NYC Logo" width={180} height={180} />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                {isHome ? (
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="relative text-white text-sm font-medium tracking-wide cursor-pointer group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    onClick={() => navigate("/")}
                    className="relative text-white text-sm font-medium tracking-wide cursor-pointer group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons + Action Icons */}
          <div className="hidden md:flex items-center gap-5 text-white">
            <div className="flex items-center gap-3 border-r border-white/30 pr-5">
              <FaFacebook
                size={15}
                className="cursor-pointer hover:text-brand-400 transition-colors"
                onClick={() =>
                  window.open("https://www.facebook.com/nycitytravel", "_blank")
                }
              />
              <FaInstagram
                size={15}
                className="cursor-pointer hover:text-accent-400 transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/nycitytravel",
                    "_blank",
                  )
                }
              />
              <FaTwitter
                size={15}
                className="cursor-pointer hover:text-accent-400 transition-colors"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/nycitytravel",
                    "_blank",
                  )
                }
              />
              <FaYoutube
                size={15}
                className="cursor-pointer hover:text-danger-500 transition-colors"
                onClick={() =>
                  window.open("https://www.youtube.com/nycitytravel", "_blank")
                }
              />
            </div>
            <BiSearch
              size={18}
              className="cursor-pointer hover:text-brand-300 transition-colors"
            />
            <BsPerson
              size={18}
              className="cursor-pointer hover:text-brand-300 transition-colors"
            />
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50 text-white"
            onClick={handleNav}
            aria-label="Toggle menu"
          >
            {nav ? (
              <AiOutlineClose size={22} />
            ) : (
              <HiOutlineMenuAlt4 size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-2xl font-semibold">
          {navLinks.map((link) => (
            <li key={link.to}>
              {isHome ? (
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={handleNav}
                  className="hover:text-brand-400 transition-colors cursor-pointer tracking-wide"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    navigate("/");
                    handleNav();
                  }}
                  className="hover:text-brand-400 transition-colors tracking-wide"
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="mt-10">
          <ThemeToggle />
        </div>
        <div className="flex gap-6 mt-6 text-white/60">
          <FaFacebook
            size={20}
            className="cursor-pointer hover:text-brand-400 transition-colors"
          />
          <FaTwitter
            size={20}
            className="cursor-pointer hover:text-accent-400 transition-colors"
          />
          <FaYoutube
            size={20}
            className="cursor-pointer hover:text-red-500 transition-colors"
          />
          <FaPinterest
            size={20}
            className="cursor-pointer hover:text-danger-400 transition-colors"
          />
          <FaInstagram
            size={20}
            className="cursor-pointer hover:text-accent-400 transition-colors"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "School", path: "/school" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 8px 24px rgba(0,0,0,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        paddingTop: scrolled ? "0.6rem" : "1.5rem",
        paddingBottom: scrolled ? "0.6rem" : "1.5rem",

        scale: isDesktop && scrolled ? 0.9 : 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`fixed top-0 z-50 w-full mx-0 md:rounded-full px-5 md:px0 md:mt-1
  ${scrolled ? "text-black" : "text-white"}
`}
    >
      <div className="flex items-center justify-between w-full md:max-w-7xl md:mx-auto px-0 ">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Jay's Bite Logo"
            className="h-12 md:h-10 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-pink-500">
              Trendy Cakes
            </span>
            <span className="text-sm text-white/80">& Pastries</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive ? "text-pink-500" : "text-black hover:text-red-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="tel:+233243685403"
          className="hidden md:block text-white bg-pink-500 rounded-lg py-1.5 px-3 hover:text-black"
        >
          Call Us
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-black"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden mt-4 bg-white text-black rounded-xl shadow-lg  p-4"
        >
          <div className="flex flex-col px-5 py-6 gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium text-lg ${
                    isActive
                      ? "text-white bg-pink-500 rounded-2xl text-center"
                      : "text-slate-700 hover:text-red-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+233243685403"
              className="mt-2 text-center bg-pink-500 hover:bg-red-400 text-white py-3 rounded-full font-medium transition"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

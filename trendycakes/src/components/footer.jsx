import { MapPin, Phone, Mail } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/slices.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating Light Effects */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl" />

      <div className="relative z-10">
        {/* Main Glass Container */}
        <div className="px-6 pb-10 md:px-32">
          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              border border-white/20
              bg-white/10
              backdrop-blur-3xl
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none" />

            {/* Top Shine */}
            <div className="absolute left-0 top-0 h-px w-full bg-white/40" />

            <div className="relative z-10 px-8 py-12 md:px-12">
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white/20 backdrop-blur-xl">
                      <img
                        src="/logo.webp"
                        alt="Trendy Cakes Logo"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
                      <h3 className="text-xl font-bold">Trendy Cakes</h3>
                      <p className="text-sm text-pink-300">& Pastries</p>
                    </div>
                  </div>

                  <p className="leading-relaxed text-white/75">
                    Crafting beautiful cakes, delicious pastries, refreshing
                    drinks, and unforgettable celebrations throughout Ghana.
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h4 className="mb-6 text-lg font-semibold text-pink-300">
                    Quick Links
                  </h4>

                  <ul className="space-y-4">
                    {["Home", "About", "Menu", "Training", "Contact"].map(
                      (item) => (
                        <li key={item}>
                          <Link
                            to={
                              item === "Home" ? "/" : `/${item.toLowerCase()}`
                            }
                            className="
                            text-white/70
                            transition-all
                            duration-300
                            hover:text-pink-300
                            hover:translate-x-1
                            inline-block
                          "
                          >
                            {item}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="mb-6 text-lg font-semibold text-pink-300">
                    Contact Us
                  </h4>

                  <div className="space-y-5">
                    <div className="flex gap-3 text-white/75">
                      <MapPin size={18} className="mt-1 text-pink-400" />
                      <span>Accra, Ghana</span>
                    </div>

                    <div className="flex gap-3 text-white/75">
                      <Phone size={18} className="mt-1 text-pink-400" />
                      <span>+233 243685403</span>
                    </div>

                    <div className="flex  text-white/75">
                      <Mail size={18} className="mt-1 text-pink-400" />
                      <span>abenaowusuaa751@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h4 className="mb-6 text-lg font-semibold text-pink-300">
                    Follow Us
                  </h4>

                  <p className="mb-6 text-white/75">
                    Stay updated with our latest cakes, pastries, and baking
                    opportunities.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/233243685403"
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-white/10
                        backdrop-blur-xl
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-pink-500/80
                      "
                    >
                      <IoLogoWhatsapp size={18} />
                    </a>

                    <a
                      href="https://www.instagram.com/trendycakesandpastries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-white/10
                        backdrop-blur-xl
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-pink-500/80
                      "
                    >
                      <AiFillInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
            <p className="text-center text-sm text-white/50 md:text-left">
              © {new Date().getFullYear()} Trendy Cakes & Pastries. All rights
              reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/50 transition hover:text-pink-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-white/50 transition hover:text-pink-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Implemented
import Delivery from "../components/deliverysection";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiTiktokLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import homeImages from "../data/homeimages";
import SEO from "../components/SEO";

export default function Home() {
  // Master Animation Configs
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <SEO
        title="Trendy Cakes & Pastries | Cakes, Pastries & Baking School in Ghana"
        description="Order affordable birthday cakes, wedding cakes, pastries, milky doughnuts, fresh juices and join TVET-affiliated baking training in Ghana."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex items-center">
        {/* Background Images */}

        <motion.img
          src="/newhero.webp"
          alt="Hero image"
          className="absolute  inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        {/* Soft backdrop shader mask overlay for text isolation and readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl top-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-left text-white leading-tight"
          >
            Affordable Luxury <br />
            In Every Bite
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-left font-inter text-white/90 mt-4 max-w-xl"
          >
            Delicious cakes, pastries, and professional baking training crafted
            with passion, quality, and affordability.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="space-x-4 flex items-center mt-6"
          >
            <Link
              to="/menu"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-2xl font-semibold border border-pink-500 hover:text-pink-500 hover:bg-white transition shadow-xs transform hover:scale-[1.02]"
            >
              View Menu
            </Link>
            <Link
              to="/school"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-2xl font-semibold border border-pink-500 hover:text-pink-500 hover:bg-white transition shadow-xs transform hover:scale-[1.02]"
            >
              Join Our School
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 flex gap-4">
            {[
              {
                href: "https://wa.me/233243685403",
                icon: <IoLogoWhatsapp size={22} />,
              },
              {
                href: "https://www.tiktok.com/@trendy_cakes_pastries?_r=1&_t=ZM-92bP9rnN4pg",
                icon: <PiTiktokLogoFill size={22} />,
              },
              {
                href: "https://www.instagram.com/trendycakesandpastries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                icon: <RiInstagramFill size={22} />,
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl inline-flex p-3 bg-white/80 backdrop-blur-xs text-black border border-gray-100 hover:bg-pink-500 hover:text-white transition-all shadow-xs"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="overflow-hidden bg-white">
        <div className="w-full h-0.5 bg-pink-500 mb-16" />
        <div className="grid md:grid-cols-2 gap-16 py-6 md:py-16 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-montserrat font-bold text-pink-500 uppercase tracking-widest">
              Welcome to Trendy Cakes
            </span>
            <h2 className="text-gray-900 font-inter font-semibold text-3xl md:text-4xl mt-2 leading-tight">
              Where Every Slice is a Celebration of Flavor and Artistry
            </h2>
            <p className="text-gray-600 mt-6 font-open-sans text-base md:text-lg leading-relaxed">
              At Trendy Cakes & Pastries, we believe every celebration deserves
              something special. We create delicious, beautifully crafted cakes
              and pastries that combine quality, creativity, and affordability.
              Beyond baking, we are passionate about empowering future bakers
              through professional hands-on training, helping individuals turn
              their passion into a successful career.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-pink-600 transition shadow-xs"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Right Image Block with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-104 mb-8 mx-6 md:mx-14">
              <img
                src="/images/homeaboutimg.webp"
                alt="About Trendy Cakes"
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Left Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute bottom-2  bg-pink-500 p-4 rounded-lg shadow-lg border border-pink-400"
            >
              <p className="text-lg text-pink-100 uppercase font-semibold">
                Over
              </p>
              <p className="text-lg md:text-2xl font-inter font-black text-white leading-tight">
                1000+ Satisfied
              </p>
              <p className="text-xs font-bold text-white opacity-90">
                Customers
              </p>
            </motion.div>

            {/* Right Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute bottom-2 right-0 bg-white/90 backdrop-blur-2xl p-4 rounded-lg shadow-lg border border-gray-100"
            >
              <p className="text-lg text-pink-400 uppercase font-semibold">
                Over
              </p>
              <p className="text-lg md:text-2xl font-black text-pink-500 leading-tight font-inter">
                80+ Graduates
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                (TVET Affiliated)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-secondary text-xs font-bold font-inter uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-playfair font-bold text-pink-500">
              Our Signature Services
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
              From luxury cakes to refreshing beverages and professional baking
              training, we create experiences that delight every customer.
            </p>
          </motion.div>

          {/* Bento Box Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-6 gap-6"
          >
            {/* Big Bento Column: Cakes */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-sm text-pink-500 uppercase font-bold tracking-wider">
                      Cakes Menu ●
                    </span>
                    <p className="text-gray-500 text-sm mt-2 mb-6 font-inter">
                      Available in sizes ranging from 4-inch personal treats up
                      to 10-inch grand celebration centerpieces.
                    </p>
                    <div className="space-y-3">
                      {[
                        ["Birthday Cakes", "From ₵150"],
                        ["Wedding Cakes", "From ₵1500"],
                        ["Cakes for special events", "From ₵500"],
                        ["Cake parfaits", "From ₵40"],
                      ].map(([name, price]) => (
                        <div
                          key={name}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span>{name}</span>
                          <div className="flex-1 border-b border-dotted border-gray-200 mx-3" />
                          <span className="font-medium text-pink-500">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/menu"
                    className="mt-6 inline-block w-fit bg-pink-500 text-sm font-medium text-white py-2.5 px-5 rounded-xl border border-pink-500  hover:underline hover:bg-white hover:text-pink-500 transition"
                  >
                    View Full Menu
                  </Link>
                </div>
                <div className="h-full min-h-55">
                  <img
                    src="/images/homecake.webp"
                    alt="cake"
                    className="w-full h-full rounded-2xl object-cover shadow-2xs"
                  />
                </div>
              </div>
            </motion.div>

            {/* Small milky Doughnuts Column  */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2 bg-pink-50/50 rounded-3xl p-6 flex flex-col justify-between border border-pink-100/50"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-pink-700">
                    Milky Doughnuts
                  </h3>
                  <span className="text-[#D9779B] text-xl">♡</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 font-inter">
                  Our legendary soft, milky doughnuts dusted with pure rich milk
                  powder blends.
                </p>
              </div>
              <img
                src="/images/milky1.webp"
                alt="doughnuts"
                className="w-full h-36 object-cover rounded-2xl mb-4 shadow-3xs"
              />
              <Link
                to="/menu"
                className="block w-full bg-pink-500 text-center text-sm font-semibold text-white py-3 rounded-xl hover:bg-pink-600 transition"
              >
                Order Box of 6
              </Link>
            </motion.div>

            {/* Bento Box: Juices */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-3 bg-gray-100/70 rounded-3xl p-6 border border-gray-200/40 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 h-full">
                <div className="space-y-3">
                  <p className="text-amber-700 font-bold text-sm uppercase tracking-wide">
                    Fresh Juices
                  </p>
                  <p className="text-gray-500 text-sm">
                    100% cold-pressed natural local fruit selections.
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-medium text-gray-600">
                    {[
                      "Pineapple Ginger",
                      "Watermelon Mint",
                      "Pure Orange",
                      "Pure Mango",
                      "Mixed Fruits",
                    ].map((j) => (
                      <li key={j}>• {j}</li>
                    ))}
                  </ul>
                </div>
                <img
                  src="/images/juice.webp"
                  alt="juice"
                  className="w-full sm:w-36 h-36 rounded-2xl object-cover shadow-3xs"
                />
              </div>
            </motion.div>

            {/*  Academy Promotion */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-3 bg-[#8B6B00] rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-sm"
            >
              <div className="z-10 max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                  Professional Baking Academy
                </h3>
                <p className="text-pink-50/90 text-xs md:text-sm leading-relaxed mb-6">
                  Enroll in our structured TVET programs. Learn decor, classic
                  pastries, scaling margins, and advanced production strategies.
                </p>
                <div className="flex flex-wrap gap-2 text-2xs uppercase tracking-wider font-bold">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    TVET Registered
                  </span>
                  <Link
                    to="/school"
                    className="px-3 py-1.5 rounded-lg bg-white text-pink-600 shadow-sm transition transform hover:scale-102"
                  >
                    Join Cohort
                  </Link>
                </div>
              </div>
              <div className="absolute -right-5 -bottom-5 opacity-10 text-white pointer-events-none">
                <LuGraduationCap size={160} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-playfair text-gray-900 font-bold">
            Gallery of Delicious Moments
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Discover the custom designs and sweet treats that have brought
            smiles to our clients across Ghana.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
          >
            {homeImages.map((image) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-64 rounded-xl overflow-hidden shadow-2xs"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-10">
            <Link
              to="/menu"
              className="inline-block border-2 border-pink-500 font-semibold px-6 py-3 rounded-2xl text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200"
            >
              View Our Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery & Orders Section */}
      <section className="py-24 bg-[#FAF8F3] overflow-hidden">
        <Delivery />
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { PiSpiralDuotone } from "react-icons/pi";
import { FaHourglassHalf } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { PiCertificateFill } from "react-icons/pi";
export default function About() {
  // Global smooth transition setting
  const smoothTransition = { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] };

  // Stagger wrapper variant for stats grid list items
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
  };
  return (
    <>
      {/*  Section Hero*/}
      <section className="relative flex items-center justify-center overflow-hidden h-screen ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          viewport={{ once: true }}
          className="text-9xl md:text-[15vw] text-pink-500 font-black font-montserrat  -mt-32 z-1 absolute"
        >
          About Us
        </motion.h1>
        <img src="/pattern.jpg" className="w-full h-full object-cover" />
        <div className="hidden md:flex absolute md:bottom-0  justify-center w-full z-5">
          <img src="./bannerc.png" className="object-cover w-full h-full" />
        </div>
        <div className="md:hidden absolute bottom-0 flex justify-center w-full h-[50vh] z-5">
          <img src="./banner.png" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* About the business Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Smooth Fade-Up on descriptive paragraph text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
            className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed"
          >
            <span className="font-bold text-black">
              Trendy Cakes & Pastries
            </span>{" "}
            is a Ghanaian bakery brand committed to creating delicious,
            high-quality cakes, pastries, and treats that make every celebration
            memorable. We combine creativity, quality, and affordability to
            deliver exceptional products while also empowering aspiring bakers
            through professional, hands-on training. With a passion for
            excellence and a dedication to customer satisfaction, we continue to
            bring sweet moments and valuable learning experiences to individuals
            and families across Ghana.
          </motion.p>
        </div>

        {/* Vision & Mission Split Area */}
        <div className="flex flex-col md:flex-row gap-6 px-5 md:px-16 lg:px-32 max-w-7xl mx-auto mt-16 items-stretch">
          <motion.div
            className="space-y-4 border border-gray-200 p-6 md:p-8 rounded-3xl shadow-xs flex-1 bg-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={smoothTransition}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <h3 className="text-black text-2xl text-center font-playfair font-bold">
              Mission
            </h3>
            <p className="text-center font-inter text-sm text-gray-600 leading-relaxed">
              To consistently provide our clients with delicious, high-quality
              cakes and pastries crafted with passion and care, ensuring
              affordability without compromising on taste or presentation, while
              building lasting relationships based on trust and satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 border border-gray-200 p-6 md:p-8 rounded-3xl shadow-xs flex-1 bg-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={smoothTransition}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <h3 className="text-black text-2xl text-center font-playfair font-bold">
              Vision
            </h3>
            <p className="text-center font-inter text-sm text-gray-600 leading-relaxed">
              To become the leading cakes and pastries brand in Ghana, known for
              delivering exceptional quality and affordable delights that bring
              joy to every celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-pink-500 py-20 relative overflow-hidden">
        {/* Animated Stagger Container wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-white px-6 relative z-10 text-center md:text-left"
        >
          <motion.div
            variants={fadeUpVariant}
            className="space-y-3 flex flex-col items-center md:items-start p-4"
          >
            <FaHourglassHalf size={26} className="text-pink-100" />
            <h3 className="text-6xl md:text-7xl font-bold font-inter tracking-tight">
              2+
            </h3>
            <p className="font-semibold font-inter text-xl text-pink-50">
              Years of unparalleled growth
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="space-y-3 flex flex-col items-center md:items-start p-4"
          >
            <PiStudentFill size={30} className="text-pink-100" />
            <h3 className="text-6xl md:text-7xl font-bold font-inter tracking-tight">
              80+
            </h3>
            <p className="font-semibold font-inter text-xl text-pink-50">
              Past Students Trained
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="space-y-3 flex flex-col items-center md:items-start p-4"
          >
            <PiCertificateFill size={28} className="text-pink-100" />
            <h3 className="text-6xl md:text-7xl font-bold font-inter tracking-tight">
              TVET
            </h3>
            <p className="font-semibold font-inter text-xl text-pink-50">
              Affiliated Program
            </p>
          </motion.div>
        </motion.div>

        {/* Smooth ambient spinning background graphic */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-[0.03] pointer-events-none"
        >
          <PiSpiralDuotone size={1000} />
        </motion.div>
      </section>

      {/* CEO Section */}
      <section className="py-24 px-6 lg:px-24 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* CEO Image Side Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
            className="relative group"
          >
            {/* Ambient blur lights */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 rounded-4xl overflow-hidden shadow-xl">
              <img
                src="/images/ceoimage.webp"
                alt="Magdalene Asomaning - Founder of Trendy Cakes"
                className="w-full aspect-4/5 object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-pink-200 rounded-4xltranslate-x-4 translate-y-4 -z-10 hidden sm:block"></div>
          </motion.div>

          {/* CEO Bio Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-500 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                Meet the Founder
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-2">
                Magdalene Asomaning
              </h3>
              <p className="text-base md:text-lg font-medium text-pink-500/80 italic">
                Founder of Trendy Cakes
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed font-inter text-sm md:text-base">
              <p>
                Miss Magdalene Asomaning is the Founder and Chief Executive
                Officer of Trendy Cakes & Pastries, a Ghanaian bakery brand
                known for delivering quality, affordable cakes and pastries
                while training aspiring bakers. Her passion for baking began at
                a young age through her interest in Home Economics and was
                nurtured by self-learning and creating cakes for family
                celebrations.
              </p>

              <p>
                In 2020, she gained valuable experience working under Madam
                Eunice, founder of Eulicon Cakes, where she further developed
                her baking skills and industry knowledge. After graduating from
                the University of Ghana, she pursued professional training at
                Cake Affairs Ghana in 2024 to refine her craft and expand her
                expertise.
              </p>

              <p>
                Today, Magdalene is a
                <span className="font-semibold text-gray-900">
                  {" "}
                  Master Craft Certificate{" "}
                </span>
                holder under{" "}
                <span className="font-semibold text-gray-900">TVET </span>
                and remains committed to continuous learning and excellence.
                Under her leadership, Trendy Cakes & Pastries has trained over
                80 students within a year and earned official TVET registration,
                reflecting her dedication to quality, affordability, and baking
                education.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-pink-300"></div>
                <span className="font-serif text-xl md:text-2xl text-gray-800 italic">
                  Magdalene A.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

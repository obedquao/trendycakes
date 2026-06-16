import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import roadmap from "../data/course";
import AcademyGallery from "../components/schoolgallery";
import {
  PiCalendarBlankFill,
  PiClockFill,
  PiTagChevronFill,
} from "react-icons/pi";

export default function School() {
  //For theMotion framer designs
  // Global smooth transition setting
  const smoothTransition = { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] };

  // Stagger wrapper variant for data grid list items
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };
  // Master container variants to control the staggered entrance sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };
  // Entry animation blueprint for individual stat items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
  };

  //for Next cohort section
  const statusMap = {
    closed: {
      tag: "CLOSED",
      tagClasses: "bg-red-50 border border-red-200 text-red-600",
      indicatorClasses: "bg-red-400 opacity-75",
      title: "Secure Your Seat on the Waitlist",
      description:
        "Our current Cake Artistry program is fully subscribed. Our admissions board is accepting registrations for the next structured intake pathway.",
    },
    open: {
      tag: "ADMISSIONS OPEN",
      tagClasses: "bg-green-500 border border-green-200 text-white",
      indicatorClasses: "bg-green-700 opacity-75",
      title: "Join Our Cake Making, Sugar Craft and Pastries Training",
      description:
        "Secure your workspace in our intensive Cake Making & Pastries program. Learn the best techniques needed for cakes and pastry making.",
    },
  };

  // 🛠️ CONTROL: Toggle this constant from 'open' to 'closed' based on current admissions data flow
  const currentStatus = "open";
  const content = statusMap[currentStatus];

  // For Stats Section
  const stats = [
    { number: "80+", label: "CERTIFIED GRADUATES" },
    { number: "TVET", label: "NATIONAL CERTIFICATION" },
    { number: "100%", label: "HANDS-ON LEARNING" },
  ];
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* 1. Background Image Wrapper */}
        <div className="absolute inset-0">
          <motion.img
            src="/images/school-hero.webp"
            alt="Professional Baking Training"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: [0.215, 0.61, 0.355, 1] }} // Soft smooth camera zoom match
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 2. Content Wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl pt-10"
        >
          {/* Tagline */}
          <motion.span
            variants={fadeUpVariant}
            className="inline-block bg-white text-pink-500 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 shadow-xs"
          >
            TVET Accredited Institution
          </motion.span>

          {/* Hero Title Heading */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-white max-w-2xl leading-tight"
          >
            Master the Craft of <br />
            <span className="text-pink-500">Exceptional Pastry</span>
          </motion.h1>

          {/* Hero Description Paragraph */}
          <motion.p
            variants={fadeUpVariant}
            className="mt-4 text-base md:text-lg text-gray-200/90 font-normal leading-relaxed max-w-xl"
          >
            Join Ghana's premier baking academy. From foundational techniques to
            advanced artistry, our certified courses empower the next generation
            of master bakers.
          </motion.p>

          {/* Interaction Action Group Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <a
              href="https://wa.me/233243685403"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xs text-sm tracking-wide transform active:scale-98"
            >
              Enroll for Aug 2026
            </a>

            <a
              href="#curriculum"
              className="border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm tracking-wide transform active:scale-98"
            >
              View Curriculum
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* stat section */}
      <section className="bg-white py-12 md:py-8 px-4 border-b border-gray-100 overflow-hidden">
        {/* 1. Converted parent container into a motion element with view-triggering settings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 items-center justify-center text-center"
        >
          {stats.map((item, index) => (
            /* 2. Converted loop wrapper item into a motion element */
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center ${
                index === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Big Stat Number */}
              <span className="text-3xl sm:text-4xl font-serif text-pink-500 tracking-tight font-medium">
                {item.number}
              </span>

              {/* Small Sub-Label */}
              <span className="mt-2 text-xxs sm:text-xs tracking-widest text-gray-600 font-semibold uppercase px-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/*Course Outline*/}
      <section
        id="curriculum"
        className="bg-[#f6f5f0] py-20 px-6 sm:px-12 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Layout Intro Headers */}
          <div className="lg:col-span-4 flex flex-col items-start justify-start lg:sticky lg:top-28 h-fit">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-gray-900 leading-tight">
              Well-Designed Curriculum <br />
              for Easy Learning
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
              Our syllabus is designed to equip aspiring bakers with the
              knowledge, confidence, and skills needed to succeed in the baking
              industry.
            </p>

            {/* Official Badge Component */}
            <div className="mt-8 flex items-center gap-3 bg-white p-4 rounded-xl shadow-xs border-l-4 border-pink-500 w-full max-w-xs">
              <div className="text-pink-500 bg-pink-50 p-2 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Official Certification
                </p>
                <p className="text-xxs text-gray-500 font-medium">
                  Affiliated to TVET Framework
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Monthly Modules List */}
          <div className="lg:col-span-8 space-y-12">
            {roadmap.map((phase, index) => (
              <div
                key={index}
                className="border-b border-gray-300/60 pb-10 last:border-0"
              >
                {/* Header block for module item */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-montserrat font-medium text-gray-800">
                    <span className="text-pink-500 font-sans font-bold mr-3 text-lg md:text-xl tracking-wide block sm:inline mb-1 sm:mb-0">
                      {phase.month}
                    </span>
                    {phase.title}
                  </h3>
                </div>

                {/* Course Context Description */}
                <p className="mt-2 text-xs text-gray-400 font-normal italic">
                  {phase.description}
                </p>

                {/* Topics block sub list */}
                <ul className="mt-4 space-y-3">
                  {phase.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600 font-normal leading-relaxed"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full border border-pink-500 mr-3 mt-2 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Cohort section*/}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Title/Context Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={smoothTransition}
            >
              {/* Smooth Dynamic Status Badge Indicator */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${content.tagClasses}`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${content.indicatorClasses}`}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                </span>
                {content.tag}
              </div>

              <h2 className="text-3xl md:text-5xl font-playfair font-black text-gray-950 leading-tight">
                {content.title}
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
                {content.description}
              </p>
            </motion.div>
          </div>

          {/* Coordinated Data Matrix Grid layout structure */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {/* Data Block: Intake Date */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-pink-50 text-pink-500 rounded-xl w-fit">
                  <PiCalendarBlankFill size={22} />
                </div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-6">
                  Intake Starting Date
                </h4>
              </div>
              <p className="text-xl font-extrabold text-gray-900 mt-1">
                25th June 2026
              </p>
            </motion.div>

            {/* Data Block: Fee Structure */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-pink-50 text-pink-500 rounded-xl w-fit">
                  <PiTagChevronFill size={22} />
                </div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-6">
                  Program Fees
                </h4>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <p className="text-xl font-extrabold text-pink-600">₵2,500</p>
                <p className="text-sm font-medium text-gray-400">
                  {" "}
                  + ₵200 Registration forms
                </p>
              </div>
            </motion.div>

            {/* Data Block: Call-to-Action */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-pink-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="p-3 bg-white/10 text-white rounded-xl w-fit border border-white/10">
                  <PiClockFill size={20} />
                </div>
                <p className="text-xs font-medium text-pink-100 mt-4 leading-relaxed">
                  Applications for this pathway close shortly. Our admissions
                  board processes requests on a prioritized basis.
                </p>
              </div>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-center text-pink-600 py-3 rounded-xl hover:opacity-90 transition font-bold text-sm tracking-wide mt-6"
              >
                WhatsApp Admissions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*Alumni section*/}
      <section className="bg-[#f6f5f0] py-20 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header Text Area */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-950 tracking-tight">
              The Success of Our 80+ Alumni
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              From home bakers to boutique owners, our graduates are redefining
              the Ghanaian culinary landscape.
            </p>
          </div>

          {/* Dual Card Split Grid System Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: Image Feature Card with Text Overlay (Spans 7 Columns) */}
            <div className="relative lg:col-span-7 min-h-112.5 rounded-3xl overflow-hidden group shadow-xs">
              {/* Background Alumnus Image Asset */}
              <img
                src="/images/studentimage.jpeg"
                loading="lazy"
                alt="Abena Serwaa - Successful Graduate"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-101 transition duration-500"
              />
              {/* Smooth Vignette Gradient Black Mask Overlay for Readable Bottom White Text */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

              {/* Overlay Text Details Positioned at bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col items-start text-white">
                <h3 className="text-2xl font-serif font-bold tracking-wide">
                  Semira
                </h3>
                <p className="mt-2 text-sm text-gray-200/90 leading-relaxed font-light max-w-xl">
                  Learning at Trendy Cakes & Pastries gave me the skills and
                  confidence to start taking baking orders and serving customers
                  with quality products. The training was practical, easy to
                  understand, and has helped me turn my passion for baking into
                  a source of income.
                </p>

                {/* Gold Star Badge Indicator */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-400 uppercase">
                  <span>★</span>
                  <span>Second badge</span>
                </div>
              </div>
            </div>

            {/* Right Card: Pure Quote Testimonial Card Layout (Spans 5 Columns) */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-gray-100 shadow-2xs">
              {/* Upper Content Group: Large Decorative Quotation Mark & Text block */}
              <div>
                <span className="text-5xl font-serif font-black text-pink-500 block leading-none select-none">
                  ””
                </span>
                <p className="mt-4 text-sm md:text-base text-gray-600 font-normal font-inter italic leading-relaxed tracking-wide">
                  "The TVET certification gave me the credibility I needed to
                  get employment at a pastry restaurant. Trendy Cakes doesn't
                  just teach you to bake; they teach you to lead."
                </p>
              </div>

              {/* Lower Content Group: Profile Avatar & Biographic Sub-label details */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <img
                  src="/images/kofi-avatar.jpg"
                  loading="lazy"
                  alt="Kofi Mensah avatar portrait"
                  className="w-12 h-12 rounded-full object-cover bg-gray-100 shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 tracking-wide">
                    Kofi Mensah
                  </span>
                  <span className="text-xs text-gray-500 font-medium mt-0.5">
                    Head Pastry Chef, Elite Hotel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Gallery section*/}
      <section>
        <AcademyGallery />
      </section>
    </>
  );
}

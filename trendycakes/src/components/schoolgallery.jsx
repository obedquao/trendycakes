import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ACADEMY_GALLERY from "../data/schoolimg";

const CATEGORIES = [
  { id: "all", label: "View All Moments" },
  { id: "practicals", label: "Hands-on Practicals" },
  { id: "masterpieces", label: "Student Masterpieces" },
  { id: "graduations", label: "Graduation Milestones" },
];

export default function AcademyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const smoothTransition = { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] };

  // Filter items based on active selection
  const filteredImages =
    activeFilter === "all"
      ? ACADEMY_GALLERY
      : ACADEMY_GALLERY.filter((img) => img.category === activeFilter);

  return (
    <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#fbfbfa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-pink-500 text-xs font-bold uppercase tracking-widest"
          >
            Life at the Academy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-serif font-bold text-gray-950 tracking-tight"
          >
            A Visual Journey of Artistry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="mt-4 text-sm text-gray-600 leading-relaxed font-normal"
          >
            Step inside our training hub to see programs in action, spectacular
            student creations, and the celebrations of our successful graduates.
          </motion.p>
        </div>

        {/* Premium Category Filter Pills Control */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-16 border-b border-gray-200/60 pb-6 max-w-3xl mx-auto"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-white bg-pink-500"
                    : "text-gray-600 hover:text-gray-900 bg-gray-100/60 hover:bg-gray-100"
                }`}
              >
                {/* Active Pill Background Bubble Slider */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-pink-500 rounded-full -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Asymmetric Mosaic Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={smoothTransition}
                key={image.id}
                whileHover={{ y: -4 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xs group cursor-pointer bg-gray-100 border border-gray-200/30 w-full ${image.size}`}
              >
                {/* Core Image Asset */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-103"
                />

                {/* Soft Vignette Overlay Mask Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6" />

                {/* Interactive Dynamic Text Label Reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <span className="text-[10px] tracking-widest font-bold text-pink-400 uppercase bg-pink-950/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-pink-500/20">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium mt-3 leading-snug drop-shadow-xs">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

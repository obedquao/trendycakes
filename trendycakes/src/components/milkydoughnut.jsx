import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiShoppingCartSimpleBold, PiCaretDownBold } from "react-icons/pi";

// 🛠️ MATRIX DATA CONFIGURATION
// Prices are now uniquely nested inside each flavor for every specific quantity pack
const DONUT_MENU = [
  {
    id: "milk-glaze",
    label: "Condensed Milk Filling",
    prices: { qty4: 95, qty6: 105, qty8: 140 },
  },
  {
    id: "vanilla",
    label: "Vanilla Milk Filling",
    prices: { qty4: 75, qty6: 105, qty8: 140 },
  },
  {
    id: "chocolate",
    label: "Chocolate filling",
    prices: { qty4: 95, qty6: 150, qty8: 185 },
  },
  {
    id: "strawberry",
    label: "Strawberry filling",
    prices: { qty4: 75, qty6: 105, qty8: 140 },
  },
  {
    id: "Two mixed fillings",
    label: "Two mixed fillings",
    prices: { qty4: 85, qty6: 125, qty8: 150 },
  },
  {
    id: "Three mixed fillings",
    label: "Three mixed fillings",
    prices: { qty4: 95, qty6: 135, qty8: 160 },
  },
];

const QUANTITIES = [
  { id: "qty4", label: "Pack of 4", size: "4 Pcs" },
  { id: "qty6", label: "Pack of 6", size: "6 Pcs" },
  { id: "qty8", label: "Pack of 8", size: "8 Pcs" },
];

export default function MilkyDoughnutCard() {
  const [selectedFlavor, setSelectedFlavor] = useState(DONUT_MENU[0]);
  const [selectedQty, setSelectedQty] = useState(QUANTITIES[0]); // Default to 4 pieces

  const [flavorDropdownOpen, setFlavorDropdownOpen] = useState(false);
  const [qtyDropdownOpen, setQtyDropdownOpen] = useState(false);

  const smoothTransition = { duration: 0.25, ease: [0.215, 0.61, 0.355, 1] };

  // Dynamically extract the correct price based on combination selections
  const currentPrice = selectedFlavor.prices[selectedQty.id];

  const handleWhatsAppOrder = () => {
    const WHATSAPP_NUMBER = "233243685403";

    const textReceipt = encodeURIComponent(
      `*NEW ORDER: TRENDY CAKES & PASTRIES*\n` +
        `-----------------------------------------\n` +
        `• *Item:* Milky Doughnut\n` +
        `• *Flavor:* ${selectedFlavor.label}\n` +
        `• *Pack Size:* ${selectedQty.label} (${selectedQty.size})\n` +
        `-----------------------------------------\n` +
        ` *Total Price:* ₵${currentPrice}.00\n\n` +
        `Please let me know payment and pickup details! ✨`,
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${textReceipt}`,
      "_blank",
    );
  };

  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-[2rem] p-5 shadow-xl border border-gray-100 flex flex-col justify-between min-h-[460px]">
        <div>
          {/* Card Image Display */}
          <div className="relative w-full h-44 rounded-3xl overflow-hidden mb-4 border border-gray-100 shadow-inner">
            <img
              src="/images/milky.webp"
              loading="lazy"
              alt="Milk Doughnuts Display"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold text-pink-600 tracking-wider uppercase shadow-2xs border border-gray-100/50">
              Fresh Daily
            </div>
          </div>

          {/* Heading Description */}
          <div className="space-y-0.5 mb-5 px-1 text-left">
            <h3 className="text-xl font-serif font-black text-pink-500 tracking-tight">
              Milky Doughnuts
            </h3>
            <p className="text-xxs text-gray-400 font-medium">
              Authentic soft, sugar-dusted cloud donuts with gourmet cream
              fillings.
            </p>
          </div>

          {/* Side-by-Side Dropdowns Form Layout */}
          <div className="grid grid-cols-2 gap-3 relative z-30 mb-6">
            {/* 1. FLAVOR SELECT DROPDOWN */}
            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1 ml-1">
                Flavor
              </label>
              <button
                type="button"
                onClick={() => {
                  setFlavorDropdownOpen(!flavorDropdownOpen);
                  setQtyDropdownOpen(false);
                }}
                className="w-full bg-gray-50 border border-gray-200 hover:border-pink-200 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-900 flex items-center justify-between transition cursor-pointer text-left shadow-2xs"
              >
                <span className="line-clamp-1">{selectedFlavor.label}</span>
                <PiCaretDownBold
                  className={`shrink-0 ml-1.5 text-gray-400 transition-transform duration-300 ${flavorDropdownOpen ? "rotate-180 text-pink-500" : ""}`}
                />
              </button>

              <AnimatePresence>
                {flavorDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={smoothTransition}
                    className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-200/80 rounded-xl shadow-xl max-h-52 overflow-y-auto z-50 p-1.5 space-y-0.5"
                  >
                    {DONUT_MENU.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFlavor(item);
                            setFlavorDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-xs ${
                            selectedFlavor.id === item.id
                              ? "bg-pink-50 text-pink-600 font-bold"
                              : "text-gray-700 hover:bg-gray-50 font-medium"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* 2. QUANTITY SELECT DROPDOWN */}
            <div className="relative z-20">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1 ml-1">
                Quantity
              </label>
              <button
                type="button"
                onClick={() => {
                  setQtyDropdownOpen(!qtyDropdownOpen);
                  setFlavorDropdownOpen(false);
                }}
                className="w-full bg-gray-50 border border-gray-200 hover:border-pink-200 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-900 flex items-center justify-between transition cursor-pointer text-left shadow-2xs"
              >
                <span className="line-clamp-1">{selectedQty.label}</span>
                <PiCaretDownBold
                  className={`shrink-0 ml-1.5 text-gray-400 transition-transform duration-300 ${qtyDropdownOpen ? "rotate-180 text-pink-500" : ""}`}
                />
              </button>

              <AnimatePresence>
                {qtyDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={smoothTransition}
                    className="absolute left-0 right-0 mt-1.5 bg-white border border-gray-200/80 rounded-xl shadow-xl z-50 p-1.5 space-y-0.5"
                  >
                    {QUANTITIES.map((qty) => (
                      <li key={qty.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedQty(qty);
                            setQtyDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between text-xs ${
                            selectedQty.id === qty.id
                              ? "bg-pink-50 text-pink-600 font-bold"
                              : "text-gray-700 hover:bg-gray-50 font-medium"
                          }`}
                        >
                          <span>{qty.label}</span>
                          {/* Shows the custom price calculation right inside the selection list drawer dynamically */}
                          <span className="font-bold text-gray-900">
                            ₵{selectedFlavor.prices[qty.id]}
                          </span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dynamic Price Display Footer & Checkout CTA */}
        <div className="pt-4 border-t border-gray-100 mt-2 flex items-center justify-between gap-4 relative z-10 text-left">
          <div className="shrink-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-0.5">
              Total Price
            </p>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-lg font-black text-gray-950 font-sans">
                ₵
              </span>
              <motion.span
                key={currentPrice}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-black text-gray-950 tracking-tight font-sans"
              >
                {currentPrice}
              </motion.span>
              <span className="text-xs font-semibold text-gray-400 ml-1">
                .00
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs tracking-widest uppercase transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer group"
          >
            <PiShoppingCartSimpleBold
              size={16}
              className="transition-transform group-hover:-translate-y-0.5"
            />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

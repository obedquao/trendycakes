import { motion } from "framer-motion";

export default function Delivery() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Accordions/Lines */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-10">
            Delivery & Orders
          </h2>

          <div className="space-y-8">
            {/* Turnaround block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100">
                🕒
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Notice Requirements
                </h3>
                <div className="space-y-2 text-base text-gray-700 max-w-md ">
                  <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                    <span>Large Catering Orders</span>
                    <span className="font-bold text-gray-900">
                      48 Hours Notice
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                    <span>Standard Birthday Cakes</span>
                    <span className="font-bold text-gray-900">
                      24 Hours Notice
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impromptu Requests</span>
                    <span className="font-bold text-pink-600">
                      2-Hour Minimum is Needed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy block */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100">
                💳
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Payment Protocol
                </h3>
                <p className="text-gray-600 text-base leading-relaxed max-w-md">
                  Full payment is required to confirm and schedule your order.
                  We accept Mobile Money and Bank Transfers for a smooth and
                  secure checkout experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Info Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-gray-200/60"
        >
          <h3 className="text-2xl font-bold text-pink-500 uppercase tracking-wider mb-4">
            Logistics
          </h3>
          <div className="space-y-3 text-base text-gray-700">
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3">
              <span>🚗</span>
              <p>
                Delivery via <strong>Yango, Uber or Bolt</strong>.
              </p>
            </div>
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3">
              <span>🏍️</span>
              <p>Personalized rider service available</p>
            </div>
            <div className="p-4 bg-red-50/60 border border-red-100 text-red-950 rounded-xl text-base space-y-1.5">
              <p className="font-bold text-red-700 uppercase tracking-wide">
                ⚠️ Pro Tip for Cakes
              </p>
              <p className="leading-relaxed">
                Motorbikes are not recommended for birthday cake deliveries. For
                maximum safety and presentation, we advise using car-based
                delivery options. Delivery fees are handled by the client.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

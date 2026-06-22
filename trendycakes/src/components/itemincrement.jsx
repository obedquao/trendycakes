import { useState } from "react";

export default function Item({ name, image, price, details, promo }) {
  const [quantity, setQuantity] = useState(1);

  // 🛠️ HACK: Extract the naked number from strings like "GH₵ 40" or "GHC 50"
  const basePriceNumber = parseInt(price.replace(/[^0-8]/g, ""), 10) || 0;
  const basePromoNumber = promo
    ? parseInt(promo.replace(/[^0-8]/g, ""), 10) || 0
    : 0;

  // Calculate dynamic totals based on state quantity counter
  const totalPrice = basePriceNumber * quantity;
  const totalPromo = basePromoNumber * quantity;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Dynamic message with total price breakdown
  const message = `Hello! I'm interested in ordering (${quantity}) ${name}. Total Price: GH₵ ${totalPrice}.`;

  return (
    <div className="flex flex-col gap-5 bg-white max-w-75 py-5 px-2 rounded-lg shadow-sm">
      <div className="h-45 md:h-56 w-full overflow-hidden rounded-md">
        <img
          src={image}
          className="object-cover w-full h-full"
          loading="lazy"
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-3 px-3">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-green-600 text-sm">{details}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {/* ✅ Renders the dynamically updated total price */}
            <h3 className="text-secondary font-bold">GH₵ {totalPrice}</h3>
            {promo && (
              <p className="text-gray-500 line-through text-xs">
                GH₵ {totalPromo}
              </p>
            )}
          </div>

          {/* Plus / Minus Layout Control Wrapper */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shrink-0">
            <button
              onClick={decrement}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors select-none"
            >
              -
            </button>
            <span className="px-3 py-1 font-semibold text-sm text-gray-800 bg-white min-w-[36px] text-center select-none">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors select-none"
            >
              +
            </button>
          </div>
        </div>

        <a
          href={`https://wa.me/233243685403?text=${encodeURIComponent(message)}`}
          className="border border-pink-500 bg-pink-500 rounded-2xl py-1.5 px-5 text-base text-center text-white hover:cursor-pointer hover:text-pink-500 hover:bg-white transition-all ease-out"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

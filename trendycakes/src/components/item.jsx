export default function Item({ name, image, price, details }) {
  const message = `Hello! I'm interested in ordering the ${name} priced at ${price}. `;
  return (
    <div className="flex flex-col gap-5 bg-white max-w-75 py-5 px-2  rounded-lg">
      <div className="h-45 md:h-56 w-full overflow-hidden ">
        <img
          src={image}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      <div
        className="flex flex-col gap-3 px-3
      "
      >
        <h3 className=" text-base">{name}</h3>
        <p className="text-green-600  text-sm">{details}</p>
        <h3 className="text-secondary ">{price}</h3>
        <a
          href={`https://wa.me/233243685403?text=${encodeURIComponent(message)}`}
          className="border border-pink-500 bg-pink-500 rounded-2xl py-1 px-5 text-base text-center text-white hover:cursor-pointer hover:text-pink-500 hover:bg-white transition-all ease-out "
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

import { easeOut, motion } from "framer-motion";
import Item from "../components/item";
import snacks from "../data/snacks";
import juice from "../data/juices";
import birthdayCake from "../data/birthdaycakes";
import weddingCakes from "../data/weddingcakes";
import customEventCake from "../data/eventcakes";
import cupcake from "../data/cupcakes";
import bento from "../data/bento";
import MilkyDoughnutCard from "../components/milkydoughnut";
import ItemIncrement from "../components/itemincrement";
import Delivery from "../components/deliverysection";
import SEO from "../components/SEO";

export default function Menu() {
  const scroll = [
    { image: "./icons/juice.png", text: "Juices", link: "#juice" },
    { image: "./icons/snacks.png", text: "Snacks", link: "#snacks" },
    {
      image: "./icons/custom.png",
      text: "CupCakes ",
      link: "#cupcakes",
    },
    {
      image: "./icons/custom.png",
      text: "Bento and mini cake",
      link: "#bento",
    },
    {
      image: "./icons/birthday.png",
      text: "Birthday cakes",
      link: "#birthday",
    },
    {
      image: "./icons/custom.png",
      text: "Custom Event Cakes",
      link: "#customevent",
    },
    {
      image: "./icons/wedding-cake.png",
      text: "Wedding Cakes",
      link: "#wedding",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <SEO
        title="Menu | Cakes, Pastries, Doughnuts & Juices in Ghana"
        description="Explore Trendy Cakes & Pastries menu: birthday cakes, wedding cakes, cupcakes, bento cakes, milky doughnuts, small chops, sobolo and fresh fruit juices."
        path="/menu"
        image="/images/homecake.webp"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Menu",
            name: "Trendy Cakes & Pastries Menu",
            hasMenuSection: [
              { "@type": "MenuSection", name: "Birthday Cakes" },
              { "@type": "MenuSection", name: "Wedding Cakes" },
              { "@type": "MenuSection", name: "Milky Doughnuts" },
              { "@type": "MenuSection", name: "Pastries and Small Chops" },
              { "@type": "MenuSection", name: "Fresh Fruit Juices and Sobolo" },
            ],
          },
        ]}
      />

      {/*Menu text */}
      <section className="bg-slate-50 pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          viewport={{ once: true }}
          className="font-playfair text-7xl md:text-9xl font-bold text-center text-pink-500 mt-24"
        >
          Our Menu
        </motion.h1>
        <p className="text-slate-400 text-center font-inter px-6 md:px-64 mt-8">
          Discover our selection of delicious cakes, pastries, doughnuts,
          drinks, and treats crafted to make every occasion special.
        </p>
        <p className="text-slate-700 text-center font-inter px-6 md:px-64 mt-8">
          Cake Flavors 🎂: Chocolate | Vanilla | Red Velvet | Strawberry |
          Orange | Cookies and Cream.
        </p>
      </section>

      {/* menu types of sections */}
      <section className="flex overflow-x-auto py-16 px-8 gap-4 justify-start md:justify-center w-full bg-slate-50 ">
        {scroll.map((item, index) => (
          <a
            href={item.link}
            className="bg-pink-500 rounded-xl px-4 py-4 shrink-0 border border-pink-500 text-white hover:text-pink-500 hover:bg-white hover:cursor-pointer transition-all ease-out duration-200  "
          >
            <div key={index} className="flex  gap-4 shrink-0  ">
              <img src={item.image} className="w-5 h-5 drop-shadow-sm" />
              <h3 className="text-base font-medium font-inter">{item.text}</h3>
            </div>
          </a>
        ))}
      </section>

      <section>
        {/* milky banner */}
        <div className="flex justify-center py-5">
          <img
            src="./images/milkybanner.webp"
            loading="lazy"
            className="rounded-2xl hidden md:rounded-4xl w-80 md:w-160"
          />
          <img
            src="./images/promoimage.jpg"
            loading="lazy"
            className="rounded-2xl md:rounded-4xl w-80 md:w-160"
          />
        </div>
        <div className="my-4">
          <p className="text-xl md:text-3xl font-open-sans font-bold text-center px-6">
            {" "}
            <span className="text-pink-500 mr-1 underline font-inter">
              Note:
            </span>
            Money paid is not refundable
          </p>
        </div>
        <div>
          <MilkyDoughnutCard />
        </div>
      </section>

      {/* menu items */}
      <section className="bg-slate-50 pb-16">
        {/* Juices */}
        <section id="juice" className="pt-16">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Juices
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {juice.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <ItemIncrement
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  promo={itemData.promo}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Snack */}
        <section id="snacks" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Snacks
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {snacks.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <ItemIncrement
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  promo={itemData.promo}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* cupcakes */}
        <section id="cupcakes" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Cupcakes & Bento
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {cupcake.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <Item
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  promo={itemData.promo}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bento and mini Cakes */}
        <section id="cupcakes" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Mini/ Budget Friendly Cakes
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {bento.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <Item
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  promo={itemData.promo}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Birthday cakes*/}
        <section id="birthday" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Birthday Cakes
          </h2>
          <p className="text-center text-slate-400 px-6 md:px-32 mt-2">
            Beautifully designed cakes available in different sizes and layers
            to suit your celebration.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {birthdayCake.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <Item
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Custom Event cakes*/}
        <section id="customevent" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Custom Event Cakes
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {customEventCake.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <Item
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* wedding cakes*/}
        <section id="wedding" className="pt-24">
          <h2 className="text-pink-500 text-3xl font-bold text-center font-open-sans">
            Wedding Cakes
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 mx-2 md:mx-18 border rounded-lg border-gray-200 divide-x divide-y divide-gray-200 bg-gray-50 mt-5"
          >
            {weddingCakes.map((itemData, index) => (
              <motion.div variants={item} key={index}>
                <Item
                  name={itemData.name}
                  image={itemData.image}
                  price={itemData.price}
                  details={itemData.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </section>

      {/* Delivery & Orders Section*/}
      <section className="py-24 bg-[#FAF8F3] overflow-hidden ">
        <Delivery />
      </section>
    </>
  );
}

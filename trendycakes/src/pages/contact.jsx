import { IoLocation } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section className="pt-24">
        <div className="w-full h-[40vh] relative mb-20 flex justify-center items-center">
          <img
            src="/images/contactban.webp"
            alt="contact page banner"
            className="w-full h-full object-cover inset-0 absolute"
            loading="lazy"
          />
          <div className="bg-black/40 inset-0 w-full z-20 absolute h-full" />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl text-center text-white relative z-30 font-playfair font-bold"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-inter text-center text-pink-500"
        >
          Get In Touch with Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center px-6 md:px-64 text-lg font-medium text-slate-600 font-sans mt-4"
        >
          We would love to hear from you. Whether you have a question about our
          products, need assistance with an order, or just want to say hello,
          feel free to reach out to us using the contact information below.
        </motion.p>
        <div className="flex flex-col md:flex-row items-center  flex-wrap gap-5 justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
          >
            <IoLocation className="text-4xl text-pink-500 mt-2 " />
            <h3 className="text-pink-500 text-xl font-bold font-inter text-center">
              Visit Our Shop
            </h3>
            <p className="text-center text-base text-gray-700">
              Ablekuma, Point 5 or you can also tap below to use google map
            </p>
            <a
              href="https://maps.app.goo.gl/shzioH7QsQGJBuns8 "
              className="border-2 py-2 px-8 bg-pink-500 rounded-2xl text-white hover:bg-white hover:text-pink-500 transition duration-300"
            >
              Use Google map
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
          >
            <MdOutlinePhoneAndroid className="text-4xl text-pink-500 mt-2 " />
            <h3 className="text-pink-500 text-xl font-bold font-inter text-center">
              Phone Us
            </h3>
            <p className="text-center text-base text-gray-700">
              We are available to answer your calls from 9am to 6pm daily
            </p>
            <a
              href="tel:+233243685403"
              className="border-2 py-1 px-8 bg-pink-500 rounded-2xl text-white hover:bg-white hover:text-pink-500 transition duration-300"
            >
              Call Us
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 justify-center items-center border border-gray-300 rounded-2xl p-5 shadow-lg w-80 h-60"
          >
            <IoLogoWhatsapp className="text-4xl text-pink-500 mt-2 " />
            <h3 className="text-pink-500 text-xl font-bold font-inter text-center">
              WhatsApp Us
            </h3>
            <p className="text-center text-base text-gray-700">
              You can also reach us on WhatsApp to place orders and inquiries.
            </p>
            <a
              href="https://wa.me/233243685403"
              className="border-2 py-1 px-8 bg-pink-500 rounded-2xl text-white hover:bg-white hover:text-pink-500 transition duration-300"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
        <div className="bg-gray-400 w-full h-0.5 my-16" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-inter text-center text-pink-500 mb-5"
        >
          Our Socials
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-10 justify-center"
        >
          <a href="https://www.instagram.com/trendycakesandpastries?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img
              src="/icons/instagram.png"
              alt="instagram icon"
              className="w-16 h-16"
            />
          </a>
          <a href="https://www.tiktok.com/@trendy_cakes_pastries?_r=1&_t=ZM-92bP9rnN4pg">
            <img
              src="/icons/tiktok.png"
              alt="tiktok icon"
              className="w-16 h-16"
            />
          </a>
          <a href="https://wa.me/233243685403">
            <img
              src="/icons/whatsapp.png"
              alt="whatsapp icon"
              className="w-16 h-16"
            />
          </a>
        </motion.div>
        <div className="w-full h-100 mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5459836752807!2d-0.3268158!3d5.633823400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa3002522b71b%3A0x9fca4621070cac1!2sTrendy%20Cakes%20and%20Pastries!5e0!3m2!1sen!2sgh!4v1781321305609!5m2!1sen!2sgh"
            className="w-full   h-full
            allowFullScreen loading=lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}

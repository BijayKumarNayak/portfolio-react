import React, { useState } from "react";
import { Input, TextArea } from "../components/ui/input";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");

      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-full md:h-[78vh] p-5 md:p-10 "
      id="Contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full mb-5 md:mb-0">
          <h1 className="text-4xl font-bold">
            Contact <span className="text-cyan-500">Me</span>{" "}
          </h1>
          <p className="mt-3 mr-5 text-gray-400">
            I’m always excited to collaborate on innovative projects or to
            discuss how I can help bring your ideas to life. Whether you have a
            new project in mind, need a website redesign, or simply want to say
            hello, feel free to drop me a message.
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center gap-2">
              <FaPhone />
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p>bijayanayak558@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p>Odisha, India</p>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="text-lg font-light">Follow Me</h5>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.linkedin.com/in/bijaykumarnayak/"
                target="_blank"
              >
                <FaLinkedin className="cursor-pointer w-7 h-7 hover:scale-105" />
              </a>
              <a href="https://github.com/BijayKumarNayak" target="_blank">
                <FaGithub className="cursor-pointer w-7 h-7 hover:scale-105 " />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3 lg:p-4">
          <div className="grid items-center grid-cols-2 gap-3">
            <Input type="text" placeholder="First Name" name="firstName" />
            <Input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <Input type="email" placeholder="Email" name="email" />
          <TextArea placeholder="Your Message" name="message" />
          <button className="px-8 py-2 font-light font-bold tracking-wider text-white transition duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-blue-600">
          {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;

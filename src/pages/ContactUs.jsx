import React, { useState } from "react";
import { Input, TextArea } from "../components/ui/input";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactUs = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const postdata = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = user;
    const res = await fetch(
      "https://reactcontactform-211bd-default-rtdb.firebaseio.com/reactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      }
    );
    if (res) {
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="h-full md:h-[78vh] p-5 md:p-10" id="contactus">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full mb-5 md:mb-0">
          <h1 className="text-4xl font-bold">Contact Us</h1>
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
            <h5 className="text-lg font-bold">Follow Me</h5>
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

        <form action="" className="flex flex-col gap-3 lg:p-4">
          <div className="grid items-center grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={user.firstName}
              onChange={onInputChange}
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={onInputChange}
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={onInputChange}
          />
          <TextArea
            placeholder="Your Message"
            name="message"
            value={user.message}
            onChange={onInputChange}
          />
          <button className="px-8 py-2 font-bold text-white transition duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

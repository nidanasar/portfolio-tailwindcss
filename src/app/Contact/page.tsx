"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string} }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center p-10 min-h-[80vh] bg-[url('https://static.vecteezy.com/system/resources/previews/020/297/746/non_2x/abstract-low-poly-dark-background-with-triangle-shapes-free-vector.jpg')] bg-cover bg-center h-70 w-full">
        <div className="text-center md:text-left md:w-1/2 p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>

          <p className="text-lg md:text-xl mt-2 mb-10">
            We would love to hear from you! Whether you have a question, a
            project proposal, or just want to connect, feel free to reach out.
          </p>

          <form onSubmit={handleSubmit} className="text-black">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg mb-4"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg mb-4"
              rows={5}
              required>
              </textarea>

            <button
              type="submit"
              className="px-6 py-2 mt-10 bg-red-200 rounded-full text-black hover:bg-yellow-600 text-lg">
              Send Message
            </button>
          </form>
          <div className="text-center md:text-center md:w-1/2 p-10 mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-300">
              Get In Touch
            </h2>
            <div className="flex justify-center space-x-10">
              <a
                href="https://github.com/nidanasar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-300 transition">
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/nida-shafqet-37452914b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-300 transition">
                <FaLinkedinIn size={40} />
              </a>
              <a
                href="mailto:nidashafqet@gmail.com"
                className="text-white hover:text-red-300 transition">
                <AiOutlineMail size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end md:mb-20">
          <Image
            src="/images/card.png"
            alt="Contact Image"
            width={500}
            height={400}
            className="rounded-full m-60
            mt-10"
          />
        </div>
      </section>
    </div>
    
  );
}



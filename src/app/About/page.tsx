"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center p-10 min-h-[90vh] bg-[url('https://static.vecteezy.com/system/resources/previews/020/297/746/non_2x/abstract-low-poly-dark-background-with-triangle-shapes-free-vector.jpg')] bg-cover bg-center w-full">
        <div className="text-center md:text-left md:w-1/2 p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">Who Am I...</h2>

        <div>
            <p className="text-lg md:text-xl mt-2 mb-10">
              I'm <b className='text-red-300'>Nida Nasar</b> a passionate Front-End Developer and Programmer with a love for creating user-friendly, efficient, and visually appealing websites and applications. I specialize in JavaScript, TypeScript, and Next.js.
            </p>
        
            <p className="text-lg md:text-xl mt-2 mb-10">
              I’m always eager to learn new technologies to improve my skills and keep up with industry trends. Whether it's building responsive layouts, improving user experience, I strive to create clean, maintainable code with a strong emphasis on design and functionality.
            </p>
            </div>
          <Link href="Contact" className="px-6 py-2  bg-red-200 rounded-full text-black hover:bg-yellow-600 text-lg ">Contact</Link>

        </div>

      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/Web Developer.png"



export default function Header(){
    return(
         
      <header className="flex justify-between items-center px-20 font-sans font-semibold text-white bg-[#1b0d3a]">
      <div>
    <Image src={logo} alt={"logo"}width={100} height={50}/>
      </div>
      <nav className="hidden md:flex space-x-8 text-xl">
        <Link href="/"className="hover:text-yellow-500">Home</Link>
        <Link href="About"className="hover:text-yellow-500">About</Link>
        <Link href="Services"className="hover:text-yellow-500">Services</Link>
        <Link href="Contact"className="px-6 py-2 bg-red-200 rounded-full text-black hover:bg-yellow-600">Contact</Link>
      </nav>
    </header>
    )
}
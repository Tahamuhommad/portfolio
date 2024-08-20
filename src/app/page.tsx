import Image from "next/image";
// import Navbar from "../../components/navbar/navbar";
import Link from "next/link";
import { Component } from "react";
// import Bg from "../../components/images/home.png"

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-lime-500 to-green-950">
      
      <h1 className="font-serif size-9">WELCOME</h1>
      <p>This is my portfolio website.This is made by me by using next.js.To see more about me click go to
         <Link href="/about" className="hover:text-orange-500"> About</Link>
        
        </p>
    </div>
  );
}

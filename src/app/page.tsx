import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-blue-950 to-teal-950 text-white">      
      <h1 className="font-serif size-9">WELCOME</h1>
      <p>This is my portfolio website.This is made by me by using next.js.To see more about me click go to about 
        
        </p>
        <Image
        src={require("../../components/images/port.jpg")}
        alt="background"
        width={12000}
        height={300}
        className="w-full"/>
    </div>
  );
}

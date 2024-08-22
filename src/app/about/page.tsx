import Image from "next/image"

function About(){
    return(
        <div className="bg-gradient-to-r from-teal-700 to-blue-950">
            <h2>About Me</h2>
            <p>My name is Taha. I studied in class 10.i am a student of computer science. I have started learning web development at <a href="https://www.piaic.org" className="text-green-600 hover:text-lime-950">PIAIC</a> and i am part of its generative AI engineering since April 2024.</p>
            <Image 
            src={require("../../../components/images/about.jpg")}
            alt="about background"
            width={1500}
            />
            </div>
    )
}
export default About
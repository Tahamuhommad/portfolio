import Image from "next/image";

export default function Movies() {
    return (
        <div className="bg-gradient-to-r from-teal-700 to-blue-950">
            <h1>Movies</h1>
            <p>I love watching movies and i watched many movies and I like mostly action and horror movies 
                my favourite movie is fast and furious series...
            </p>
            <Image 
            src={require("../../../components/images/movie1.jpeg")}
            alt="movie background"
            width={1200}
            height={800}
            className="w{1200} "/>
        </div>
    );
}
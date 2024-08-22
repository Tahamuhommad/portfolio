import Image from "next/image"

export default function Sports(){
    return(
        <div className="bg-gradient-to-r from-teal-700 to-blue-950">
        {/* // <div className="bg-gradient-to-t from-blue-800 to-red-950"> */}
            <h1 className="bg-gray-950 hover:text-teal-700 text-blue-500">Sports</h1>
            <p>my favourite sports is cricket.I also watch wrestling,football and olympics.
                my favourite cricketer is virat kohli and babar azam.My favourite wrestler is roman reigns.                
                                              </p>
                <Image
                src={require("../../../components/images/sports.jpeg")}
                alt="cricket" 
                width={1000}
                
                />

        </div>
    )
}
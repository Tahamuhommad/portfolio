import Image from "next/image"

export default function Gaming(){
    return(
        <div className="bg-gradient-to-r from-pink-600 to-sky-600">
            <h1 className="bg-cyan-800 hover:text-red-950">Gaming Experience</h1>
            <p>I have played a lot of games and my favourite game is DriveClub.
                 DriveClub is on ps-4. this is my favourite game because of its clear graphics and gaming experience.
                 It has many cars i.e:bmw,lotus,mercedes and many other.</p>
                 <br />
                 <p>My seond favourite game is need for speed no limits.
                    it is EA created game.
                    I have played it too much.
                    i love this game and its contents.
                    it has many cars i.e:bmw,toyota,nissan,mercedes and almost all of the real world cars.</p>
                    <br />
                    <p>Real Racing 3 is also my one of the favourite games.
                        it is created by EA.
                        i played it and love it.
                        it has almost all real world cars.</p>
                        <br />
                        <Image 
                        src={require("../../../components/images/gaming1.jpeg")}
                        alt="gaming background"
                        width={1400}
                        height={1200}/>


        </div>
    )
}
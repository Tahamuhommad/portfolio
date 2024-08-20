import Link from "next/link";

function Navbar(){
    return(
        <div>
            <Link href={"/"}> (Home  )</Link>
            <Link href={"/about"}> (About me  )</Link>
            <Link href={"/gaming"}> (Gaming Experience  )</Link>
            <Link href={"/movies"}> (movies  ) </Link>
            <Link href={"/cars"}> (cars  ) </Link>
            <Link href={"/counter"}>(counter )</Link>
            <Link href={"/sports"}>(sports  )</Link>
            <Link href={"/watches"}>(Watches  )</Link>
            <Link href={"/studies"}>(educational background  )</Link>


        </div>
    )
}

export default Navbar
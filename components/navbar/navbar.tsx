import Link from "next/link";

function Navbar(){
    return(
        <div>
            <ul>
         <li><Link href={"/"}>Home</Link>
            <Link href={"/about"}>About me </Link>
            <Link href={"/gaming"}>Gaming Experience </Link>
            <Link href={"/movies"}> movies </Link>
            <Link href={"/cars"}> cars</Link>
            <Link href={"/counter"}>counter</Link>
            <Link href={"/sports"}>sports</Link>
            <Link href={"/watches"}>Watches</Link>
            <Link href={"/studies"}>educational background</Link></li>
           </ul>

        </div>
    )
}

export default Navbar
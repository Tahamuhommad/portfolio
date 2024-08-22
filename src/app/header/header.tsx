import Link from "next/link"

export default function Header(){
    return(
        <div>
            <header className="flex justify-between font-semibold bg-cyan-950 p-3 justify-items-center space-x-5 text-emerald-500">
                <h1 className="font-semibold text-4xl text-emerald-500">T..</h1>
                <nav>
                <ul>
         <li className="flex justify-items-center space-x-5"><Link href={"/"}>Home</Link>
            <Link href={"/about"}>About me </Link>
            <Link href={"/gaming"}>Gaming Experience </Link>
            <Link href={"/movies"}> movies </Link>
            <Link href={"/cars"}> cars</Link>
            <Link href={"/counter"}>counter</Link>
            <Link href={"/sports"}>sports</Link>
            <Link href={"/watches"}>Watches</Link>
            <Link href={"/studies"}>educational background</Link></li>
           </ul>

                </nav>
            </header>
        </div>
    )
}
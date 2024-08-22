import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"



export default function Header(){
    return(
        <div>
            <header className="flex justify-between font-semibold bg-cyan-950 p-3 justify-items-center space-x-5 text-emerald-500">
                <h1 className="font-semibold text-4xl text-emerald-500">T..</h1>
              

               <nav>
                <Sheet>
                    <SheetTrigger className="md:hidden">
                         <Menu />
                     </SheetTrigger>
                     <SheetContent>


                <ul>
         <li className="flex justify-items-center space-x-5"><Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <br />
            <Link href={"/gaming"}>Gaming</Link>
            <br />
            <Link href={"/movies"}>movies</Link>
            <br />
            <Link href={"/cars"}> cars</Link>
            <br />
            <Link href={"/counter"}>counter</Link>
            <br />
            <Link href={"/sports"}>sports</Link>
            <br />
            <Link href={"/watches"}>Watches</Link>
            <br />
            <Link href={"/studies"}>educational</Link></li>
            <br />
           </ul>

                

                </SheetContent>
                </Sheet>

                <ul className="gap-x-4 hidden md:flex">

         <li className="flex justify-items-center space-x-5"><Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/gaming"}>Gaming</Link>
            <Link href={"/movies"}>movies</Link>
            <Link href={"/cars"}> cars</Link>
            <Link href={"/counter"}>counter</Link>
            <Link href={"/sports"}>sports</Link>
            <Link href={"/watches"}>Watches</Link>
            <Link href={"/studies"}>educational</Link></li>
           </ul>
           
           </nav>

            </header>
        </div>
    )
}

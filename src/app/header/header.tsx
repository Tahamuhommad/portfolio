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
                     <SheetContent className="bg-cyan-950 text-emerald-500">


                <ul>
         <li className="flex justify-items-center space-x-5"><Link href={"/"}  className="hover:underline">Home</Link></li>
         <br />
          <li><Link href={"/about"} className="hover:underline">About</Link></li>
            <br />
            <li>   <Link href={"/gaming"}  className="hover:underline">Gaming</Link></li>
            <br />
            <li> <Link href={"/movies"}  className="hover:underline">movies</Link></li>
            <br />
            <li> <Link href={"/cars"}  className="hover:underline"> cars</Link></li>
            <br />
            <li> <Link href={"/counter"}  className="hover:underline">counter</Link></li>
            <br />
            <li> <Link href={"/sports"}  className="hover:underline">sports</Link></li>
            <br />
            <li> <Link href={"/watches"}  className="hover:underline">Watches</Link></li>
            <br />
            <li> <Link href={"/studies"}  className="hover:underline">educational</Link></li>
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
// import { Menu } from "lucide-react";
// import Link from "next/link";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"


// function Header() {
//     return (
//         <header className="flex justify-between items-center p-2 bg-gray-200">
//             {/* Logo - left side */}
//             <h1 className="text-4xl font-bold text-yellow-500">H.</h1>

//             {/* Navigation - Right side */}
//             <nav>

//                 <Sheet>
//                     <SheetTrigger className="md:hidden">
//                         <Menu />
//                     </SheetTrigger>
//                     <SheetContent>
//                             <ul>
//                                 <li>
//                                     <Link href="/">
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/about">
//                                         About
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/contact">
//                                         Contact
//                                     </Link>
//                                 </li>
//                             </ul>
//                     </SheetContent>
//                 </Sheet>

//                 <ul className="gap-x-4 hidden md:flex">
//                     <li>
//                         <Link href="/">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header;
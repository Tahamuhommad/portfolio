import Image from "next/image"
import cultus from "../../../components/images/Suzuki-Cultus.jpg"

export default function Cars(){
    return(
        <div className="bg-gradient-to-tr from-slate-600 to-slate-800">
            <h1>Car</h1>
            <p>I have <a className="text-blue-700 hover:text-red-700" href="https://en.wikipedia.org/wiki/Suzuki_Cultus">Suzuki Cultus</a>
             vxr euro2 2005.It has 5 speed manual transmission.I like that car by its look fuel efficiency and economical budget car.
            It has 3 cylinder(inline) engine of 993cc which produces 63 horsepower and 103 Nm of torque.
            <Image
            src={require('../../../components/images/Suzuki-Cultus.jpg')}
            alt="Suzuki Cultus"
            />
            </p>
        </div>
    )
}
// export default function Button(){
//     return(
//         <div></div>
//     )
// }
interface Props{
    text:string
}

let Button = (props:Props) => {
// let Button ({text} : props)

    return(
        <button>{props.text}</button>
    )
}
export default Button
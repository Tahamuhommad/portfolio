"use client"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
    <div className="bg-gradient-to-r from-teal-700 to-blue-950">
        <button onClick={() => setCount(count + 1)} className="border-4 border-black hover:text-teal-950">click here to increase count</button>
        <br />
        <br />

        <button className="flex text-center">{count}</button>
        <br />
        <br />
        <br />
        <button onClick={() => setCount(0)} className="border-4 border-blue-950">reset</button>
    </div>
    )
}
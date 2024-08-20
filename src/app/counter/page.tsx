"use client"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
    <div className="bg-gradient-to-r from-blue-600 to-pink-700">
        <button onClick={() => setCount(count + 1)}>counter = {count}</button>
        <br />
        <button onClick={() => setCount(0)}>reset</button>
    </div>
    )
}
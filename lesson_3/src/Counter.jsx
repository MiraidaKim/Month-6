import { useState } from "react"
import { useCounter } from "./store/counter"


export default function Counter() {
    const [stateInc, setStateInc] = useState()

    const { count, inc, dec, incBy, reset } = useCounter()

    return (
        <div>
            <button onClick={dec}>-</button>
            <b>{count}</b>
            <button onClick={inc}>+</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => incBy(Number(stateInc))}>+ любое значение</button>
            <input value={stateInc} onChange={(e) => setStateInc(e.target.value)} />
        </div>
    )
}
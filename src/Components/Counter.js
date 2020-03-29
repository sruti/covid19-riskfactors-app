import React from 'react'

export default function Counter({counter}) {
    console.log(counter);
    return (
        <div>
            Current counter: {counter}
        </div>
    )
}

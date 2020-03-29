import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Counter({ counter }) {
    console.log(counter);
    return (
        <div className="risk-counter">
            <h5><strong>Risk Factor Count:</strong>  {counter}</h5>
            <ProgressBar variant="danger" now={(counter / 23) * 100}
            />
            <br />
        </div>
    )
}

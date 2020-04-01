import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Counter({ counter, sum }) {
    // const riskfactorTotal = 18
    
    return (
        <div className="risk-counter">
            <h5><strong>Risk Factor Count:</strong>  {counter}</h5>
            <ProgressBar variant="danger" now={(counter / sum) * 100}
            />
            <br />
        </div>
    )
}

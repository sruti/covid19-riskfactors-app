import React from 'react'

export default function StudyLegend({ study: { info, citation, comment }}) {
    
    return (
        <>
            <p> { info } </p>
            <p> { citation } </p>
            <p> { comment } </p>
        </>
    )
}

import React from 'react';
import Container from 'react-bootstrap/Container';


export default function StudyLegend({ study: { info, citation, comment }}) {
    
    return (
        <Container fluid
                style={{
                    backgroundColor: "#007bff40",
                    margin: "2% 0 1% 0",
                    textAlign: "left",
                    padding: "1% 1% 1% 1%"
                }}
            >
            <p> <strong>Source: </strong>{ citation } </p>
            {
                comment 
                ? <p> <strong>Note: </strong>{ comment } </p>
                : null
            }
            <span> { info } </span>
        </Container>
    )
}

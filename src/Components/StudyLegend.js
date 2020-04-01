import React from 'react';
import Container from 'react-bootstrap/Container';


export default function StudyLegend({ study: { ratios, ratiosEx, info, citation, comment, additionalReading } }) {

    return (
        <Container fluid
            style={{
                backgroundColor: "#007bff40",
                margin: "2% 0 1% 0",
                textAlign: "left",
                padding: "1% 1% 1% 1%"
            }}
        >
            <p><strong>Ratios: </strong>{ratios}</p>
            { ratiosEx 
            ? <p><strong>Examples: </strong>{ratiosEx}</p>
            : null 
            }
            <p> <strong>Source: </strong>{citation} </p>
            {
                additionalReading
                    ? <p> <strong>Recommended Additional Reading: </strong>{additionalReading} </p>
                    : null
            }
            {
                comment
                    ? <p> <strong>Note: </strong>{comment} </p>
                    : null
            }
            <span> {info} </span>
        </Container>
    )
}

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


export class HowTo extends Component {
    render() {
        return (
            <Container fluid
                style={{
                backgroundColor: "#007bff40",
                margin: "2% 0 1% 0",
                textAlign: "left",
                padding: "1% 1% 1% 1%"
                }}
            >
            <p><strong>Description: </strong> This app is for medical practitioners to perform a basic assessment and risk calculation of a COVID-19 patient ending up in the ICU, developing acute respiratory distress syndrome (ARDS), and overall death. The data has been reviewed and compiled from studies published from patients in Wuhan and is available at the bottom on the app.</p>
            <p> <strong>Disclaimer: </strong> The data below is for informational purposes only. The objective is to provide an easier format to quickly review pertinent data. </p>
            <p> <strong>Hint: </strong> Tap or click on entries with ℹ️ to see statistical details. </p>

            </Container>
        )
    }
}

export default HowTo

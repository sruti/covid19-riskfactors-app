import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class FormRowContainer extends Component {

    handleChange = (val) => {
        this.props.handleClick(this.props.rowData.state, val)
    }

    determineColor = () => {

    }

    render() {
        let { rowData, currentState } = this.props

        let btnvariant = "outline-success"
        let bgcolor;

        switch (rowData.ratio) {
            case "Insignificant":
                // btnvariant = "outline-danger"
                currentState 
                ?
                    bgcolor = "lightcoral"
                : 
                    bgcolor = "white"
                break
            case "?":
                // btnvariant = "outline-danger"
                    bgcolor = "white"
                break
            case "Excluded":
                // btnvariant = "outline-secondary"
                currentState 
                ?
                    bgcolor = "lightgrey"
                : 
                    bgcolor = "white"
                break
            default:
                // btnvariant = "outline-success"
                currentState 
                ?
                    bgcolor = "lightgreen"
                :
                    bgcolor = "white"
        }

        return (
            <Container
                style={{
                    backgroundColor: bgcolor,
                    marginTop: "2px",
                    marginBottom: "2px",
                }}>
                <Row>
                    <Col>
                        <p>{rowData.title}</p>
                    </Col>
                    <Col>
                    { currentState 
                    ?
                        <p> {rowData.ratio.includes("?") ? null : rowData.ratio}</p>
                    : 
                        null 
                    }
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="checkbox" name="studyOptions" value={currentState} onChange={this.handleChange}>
                            <ToggleButton variant={btnvariant} value={currentState ? "Yes" : "No"} >{currentState ? "Yes" : "No"}</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row> 
            </Container>
        )
    }
}

export default FormRowContainer

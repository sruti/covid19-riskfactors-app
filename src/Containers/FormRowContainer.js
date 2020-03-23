import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class FormRowContainer extends Component {

    handleChange = (val) => {
        this.props.handleOption(this.props.rowData.state, val)
    }

    render() {
        let { rowData, currentState, index } = this.props

        var btcolor = ""
        var bgcolor = ""
        switch (rowData.ratio) {
            case "Insignificant":
                btcolor = "danger"
                bgcolor = "lightcoral"
                break
            case "Excluded":
                btcolor = "secondary"
                bgcolor = "lightgrey"
                break
            default:
                btcolor = "success"
                bgcolor = "lightgreen"
        }

        if (rowData.state == "age") {
            console.log("CURRENT STATE OF", rowData.title, currentState);
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
                        <p> {rowData.ratio}</p>
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="radio" name="studyOptions" value={currentState} onChange={this.handleChange}>
                            <ToggleButton variant={btcolor} value={"Yes"}>Yes</ToggleButton>
                            <ToggleButton variant={btcolor} value={"No"}>No</ToggleButton>
                            <ToggleButton variant={btcolor} value={"Unknown"}>Unknown</ToggleButton>
                        </ToggleButtonGroup >
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormRowContainer

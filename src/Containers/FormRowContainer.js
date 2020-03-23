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
        let { rowData, currentState } = this.props

        var btnvariant = ""
        var bgcolor = ""
        switch (rowData.ratio) {
            case "Insignificant":
                btnvariant = "outline-danger"
                bgcolor = "lightcoral"
                break
            case "Excluded":
                btnvariant = "outline-secondary"
                bgcolor = "lightgrey"
                break
            default:
                btnvariant = "outline-success"
                bgcolor = "lightgreen"
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
                        <ToggleButtonGroup type="checkbox" name="studyOptions" value={currentState} onChange={this.handleChange}>
                            <ToggleButton variant={btnvariant} value={"Yes"}>Yes</ToggleButton>
                        </ToggleButtonGroup >
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormRowContainer

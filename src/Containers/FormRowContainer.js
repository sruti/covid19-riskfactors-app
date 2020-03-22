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

        if (rowData.state == "age") {
            console.log("CURRENT STATE OF", rowData.title, currentState);
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <p>{index}. {rowData.title}</p>
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="radio" name="studyOptions" value={currentState} onChange={this.handleChange}>
                            <ToggleButton value={"Yes"}>Yes</ToggleButton>
                            <ToggleButton value={"No"}>No</ToggleButton>
                            <ToggleButton value={"Unknown"}>Unknown</ToggleButton>
                        </ToggleButtonGroup >
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormRowContainer

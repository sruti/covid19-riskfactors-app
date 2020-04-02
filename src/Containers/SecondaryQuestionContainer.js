import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class SecondaryQuestionContainer extends Component {
    state = {
        showOtherLabel: false
    }

    handleButtonRelease = (event) => {
        this.setState({
            showOtherLabel: false
        })
    }

    handleButtonPress = (event) => {
        this.setState({
            showOtherLabel: true
        })
    }

    render() {
        let { rowData, currentParentState, parentStateName, handleYNClick } = this.props
        let bgcolor = "white";
        if (currentParentState) {
            switch (rowData.ratio) {
                case "?":
                    break
                case "Insignificant":
                case "Excluded":
                    bgcolor = "lightgrey"
                    break
                default:
                    bgcolor = rowData.protective ? "lightgreen" : "lightcoral"
            }
        }

        return (
            <>
                <Container
                    className="rowInForm"
                    style={
                        currentParentState ?
                            {
                                backgroundColor: bgcolor,
                                border: ".25px solid rgb(92, 87, 87)"
                            } :
                            {
                                backgroundColor: bgcolor,
                            }}
                >
                    <Row>
                        <Col>
                            <p>{rowData.title}</p>
                        </Col>
                        <Col
                            onTouchStart={this.handleButtonPress}
                            onTouchEnd={this.handleButtonRelease}
                            onMouseDown={this.handleButtonPress}
                            onMouseUp={this.handleButtonRelease}
                            onMouseLeave={this.handleButtonRelease}
                        >
                            <p> {currentParentState ? rowData.ratioTitle : null}</p>
                        </Col>
                        <Col>
                            <ToggleButtonGroup
                                type="radio"
                                name="studyOptions"
                                value={currentParentState}
                                onChange={
                                    (val) => {
                                        handleYNClick(parentStateName, val)
                                    }}
                            >
                                <ToggleButton
                                    variant={this.props[rowData.stateName] ? "dark" : "outline-dark"}
                                    value={"Y"}
                                >Y</ToggleButton>
                                <ToggleButton
                                    variant={this.props[rowData.stateName] ? "dark" : "outline-dark"}
                                    value={"N"}
                                >N</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

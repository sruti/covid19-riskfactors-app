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
        let { rowData, setColor, questionTitle, currentParentState, parentStateName, handleYNClick, showOtherLabel } = this.props
        // this is a function that determines the color -- it's located in MainContainer; it accepts three arguments: ratio, stateName, and whether sth is protective (which I hardcoded here)
        let bgcolor = setColor(rowData.ratio, rowData.stateName, rowData.protective)

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
                            <p>{questionTitle}</p>
                        </Col>
                        <Col
                            onTouchStart={this.handleButtonPress}
                            onTouchEnd={this.handleButtonRelease}
                            onMouseDown={this.handleButtonPress}
                            onMouseUp={this.handleButtonRelease}
                            onMouseLeave={this.handleButtonRelease}
                        >
                            <p> {(this.props.state[parentStateName + "Yes"] || this.props.state[parentStateName + "No"])
                                ? showOtherLabel
                                    ? rowData.ratioTitle
                                    : rowData.ratio
                                : null}</p>
                        </Col>
                        <Col>
                            <ToggleButtonGroup
                                type="radio"
                                name="studyOptions"
                                value={currentParentState}
                                onChange={
                                    (val) => {
                                        handleYNClick(parentStateName, val)
                                        console.log(parentStateName, currentParentState)
                                    }}
                            >
                                <ToggleButton
                                    variant={this.props.state[parentStateName + "Yes"] ? "dark" : "outline-dark"}
                                    value={"Y"}
                                >Y</ToggleButton>
                                <ToggleButton
                                    variant={this.props.state[parentStateName + "No"] ? "dark" : "outline-dark"}
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

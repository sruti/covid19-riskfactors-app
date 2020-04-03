import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class SecondaryQuestionContainer extends Component {

    render() {        
        let { rowData, setColor, currentParentState, parentStateName, handleYNClick, showOtherLabel, handleButtonPress, handleButtonRelease, questionTitle, state } = this.props
        // this is a function that determines the color -- it's located in MainContainer; it accepts three arguments: ratio, stateName, and whether sth is protective (which I hardocoded)
        let protective;
        parentStateName === "temp" ? protective = true : protective = false;
        
        let bgcolor = setColor(rowData.ratio, rowData.stateName, protective)

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
                            onTouchStart={handleButtonPress}
                            onTouchEnd={handleButtonRelease}
                            onMouseDown={handleButtonPress}
                            onMouseUp={handleButtonRelease}
                            onMouseLeave={handleButtonRelease}
                        >
                            <p> {(this.props.state[parentStateName + "Yes"] || this.props.state[parentStateName + "No"])
                                ? showOtherLabel
                                    ? rowData.ratio
                                    : rowData.ratioTitle
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

import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class SecondaryQuestionContainer extends Component {

    render() {
        let { rowData, setColor, questionTitle, state, currentParentState, parentStateName, handleYNClick, showOtherLabel, handleButtonRelease, handleButtonPress } = this.props
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
                            onTouchStart={handleButtonPress}
                            onTouchEnd={handleButtonRelease}
                            onMouseDown={handleButtonPress}
                            onMouseUp={handleButtonRelease}
                            onMouseLeave={handleButtonRelease}
                        >
                            <p> {(state[parentStateName + "Yes"] || state[parentStateName + "No"])
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
                                    variant={state[parentStateName + "Yes"] ? "dark" : "outline-dark"}
                                    value={"Y"}
                                >Y</ToggleButton>
                                <ToggleButton
                                    variant={state[parentStateName + "No"] ? "dark" : "outline-dark"}
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

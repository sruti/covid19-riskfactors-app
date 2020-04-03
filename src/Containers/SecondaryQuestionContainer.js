import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class SecondaryQuestionContainer extends Component {

    render() {        
        let { rowData, setColor, currentParentState, parentStateName, handleYNClick, showOtherLabel, handleButtonPress, handleButtonRelease } = this.props
        // this is a function that determines the color -- it's located in MainContainer; it accepts three arguments: ratio, stateName, and whether sth is protective (which I hardocoded)
        let bgcolor = setColor(rowData.ratio, rowData.stateName, false)

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
                            onTouchStart={handleButtonPress}
                            onTouchEnd={handleButtonRelease}
                            onMouseDown={handleButtonPress}
                            onMouseUp={handleButtonRelease}
                            onMouseLeave={handleButtonRelease}
                        >
                            <p> {currentParentState 
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

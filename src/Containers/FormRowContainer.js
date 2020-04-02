import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';

export class FormRowContainer extends Component {

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
        let { rowData, currentParentState, exceptions, handleClick } = this.props
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
                {rowData.ratio.includes("?")
                    ?
                    <Container
                        className="rowInForm"
                        style={
                            currentParentState ?
                                {
                                    backgroundColor: bgcolor,
                                    top: "10%",
                                    paddingTop: "0.5rem",
                                    border: "red 1px solid"
                                }
                                :
                                {
                                    backgroundColor: bgcolor,
                                    top: "10%",
                                    paddingTop: "0.5rem",
                                }
                        }
                    >
                        <Row>
                            <Col>
                                <p>{rowData.title}</p>
                            </Col>
                            <Col>
                                <p><strong> {currentParentState ? "⭕️ Choose an option below ⭕️" : null}</strong></p>
                            </Col>
                            <Col>
                                <ToggleButtonGroup
                                    type="checkbox"
                                    name="studyOptions"
                                    value={currentParentState}
                                    onChange={(value) => handleClick(rowData.stateName, value)}
                                >
                                    <ToggleButton
                                        variant={currentParentState ? "dark" : "outline-dark"}
                                        value={"✓"}
                                    >✓</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            {/* if you click on the button, create two new rows*/}
                            {currentParentState
                                ?
                                <>
                                    {/* depending on the row, conditionally render the correct data */}
                                    < FormRow
                                        handleClick={handleClick}
                                        rowData={rowData.stateName.includes("dyspnea")
                                            ? exceptions[0]
                                            : (rowData.stateName.includes("alt40") ? exceptions[2] : exceptions[4])}
                                        currentParentState={rowData.stateName.includes("dyspnea")
                                            ? this.props.rr24YesState
                                            : (rowData.stateName.includes("alt40") ? this.props.alt40YesState : this.props.astYesState)} />
                                    < FormRow
                                        handleClick={handleClick}
                                        rowData={rowData.stateName.includes("dyspnea")
                                            ? exceptions[1]
                                            : (rowData.stateName.includes("alt40") ? exceptions[3] : exceptions[5])}
                                        currentParentState={rowData.stateName.includes("dyspnea")
                                            ? this.props.rr24NoState
                                            : (rowData.stateName.includes("alt40") ? this.props.alt40NoState : this.props.astNoState)} />
                                </>
                                : null}
                        </Row>
                    </Container>
                    : /////////////////// this is for the non-exceptions /////////////////
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
                                {
                                    // these terms are not correct
                                    rowData.stateName.includes("dyspnea") || rowData.stateName.includes("leuko")
                                    ?
                                    <>
                                        <ToggleButtonGroup
                                            type="radio"
                                            name="studyOptions"
                                            value={currentParentState}
                                            onChange={
                                            (val) => {                        
                                                handleClick(rowData.stateName, val)
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

                                    </>
                                    :
                                    <>
                                        <ToggleButtonGroup
                                            type="checkbox"
                                            name="studyOptions"
                                            value={currentParentState}
                                            onChange={(value) => handleClick(rowData.stateName, value)}
                                        >
                                        <ToggleButton
                                            variant={currentParentState ? "dark" : "outline-dark"}
                                            value={"✓"}
                                        >✓</ToggleButton>
                                        </ToggleButtonGroup>
                                    </>
                                }
                            </Col>
                        </Row>
                    </Container>
                }
            </>
        )
    }
}

export default FormRowContainer


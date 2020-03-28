import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';
import { rr24Yes, rr24No, alt40Yes, alt40No, astYes, astNo } from '../data.js'


export class FormRowContainer extends Component {

    // this state exists here only for the two exceptions when this component is recursively a parent of another component of the same type
    state = {
        alt40Yes: false,
        alt40No: false,
        astYes: false,
        astNo: false,
        rr24Yes: false,
        rr24No: false,
    }

    // in recursive situation, this component becomes the parent and because of that, we need to place this function here as well as we can pass it
    handleClick = (stateName) => {
        this.setState(prevState => {
            return {
                [stateName]: !prevState[stateName]
            }
        })
    }

    handleChange = (val) => {
        this.props.handleClick(this.props.rowData.stateName)
    }

    render() {
        let { rowData, currentParentState } = this.props
        console.log(rowData, currentParentState)
        if (rowData.stateName === "alt40") {
            console.log(this.state.alt40);
        }

        let bgcolor;

        switch (rowData.ratio) {
            case "Insignificant":
                currentParentState
                    ?
                    bgcolor = "lightcoral"
                    :
                    bgcolor = "white"
                break
            case "?":
                bgcolor = "white"
                break
            case "Excluded":
                currentParentState
                    ?
                    bgcolor = "lightgrey"
                    :
                    bgcolor = "white"
                break
            default:
                currentParentState
                    ?
                    bgcolor = "lightgreen"
                    :
                    bgcolor = "white"
        }

        return (
            <>
                {rowData.ratio.includes("?")
                    ? /////////////////// this is the treatment for the two exceptions ///////////////////
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
                                    onChange={this.handleChange}
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
                                    < FormRow
                                        rowData={rowData.stateName.includes("dyspnea") ? rr24Yes :
                                            (rowData.stateName.includes("alt40") ? alt40Yes : astYes)}
                                        handleChange={this.handleChange}
                                        handleClick={this.handleClick}
                                        currentParentState={rowData.stateName.includes("dyspnea") ? this.state.rr24Yes :
                                            (rowData.stateName.includes("alt40") ? this.state.alt40Yes : this.state.astYes)} />
                                    < FormRow
                                        rowData={rowData.stateName.includes("dyspnea") ? rr24No :
                                            (rowData.stateName.includes("alt40") ? alt40No : astNo)}
                                        handleChange={this.handleChange}
                                        handleClick={this.handleClick}
                                        currentParentState={rowData.stateName.includes("dyspnea") ? this.state.rr24No :
                                            (rowData.stateName.includes("alt40") ? this.state.alt40No : this.state.astNo)} />
                                </>
                                : null}
                        </Row>
                    </Container>
                    : /////////////////// this is for the non-exceptions /////////////////
                    <Container
                        className="rowInForm"
                        style={{
                            backgroundColor: bgcolor,
                            top: "20%",
                            paddingTop: "0.5rem",
                        }}
                    >
                        <Row>
                            <Col>
                                <p>{rowData.title}</p>
                            </Col>
                            <Col>
                                <p> {currentParentState ? rowData.ratioTitle : null}</p>
                            </Col>
                            <Col>
                                <ToggleButtonGroup
                                    type="checkbox"
                                    name="studyOptions"
                                    value={currentParentState}
                                    onChange={this.handleChange}
                                >
                                    <ToggleButton
                                        variant={currentParentState ? "dark" : "outline-dark"}
                                        value={"✓"}
                                    >✓</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                }
            </>
        )
    }
}

export default FormRowContainer

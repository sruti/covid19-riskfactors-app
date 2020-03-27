import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';
import Button from 'react-bootstrap/Button'


export class FormRowContainer extends Component {

    // this state exists here only for the two exceptions when this component is recursively a parent of another component of the same type
    state = {
        rr24: false,
        leukocytosisNo: false,
        rr24Yes: false,
        rr24No: false,
    }

    // in recursive situation, this component becomes the parent and because of that, we need to place this function here as well as we can pass it
    handleClick = (stateName, val) => {
        this.setState(prevState => {
            if (val === "Y") {
                return { [stateName]: true }
            }
            else if (val === "N") {
                return { [stateName]: false }
            }
            else {
                return { [stateName]: !prevState[stateName] }
            }
        })
    }

    handleChange = (val) => {
        this.props.handleClick(this.props.rowData.stateName, val)
    }

    render() {
        let { rowData, currentParentState } = this.props

        // console.log("state", this.state[rowData.stateName])
        // if (rowData.stateName === "leukocytosis") {
        //     console.log(this.state.leukocytosis);
        // }

        let bgcolor;

        switch (rowData.ratio) {
            case "Insignificant":
                (currentParentState || this.state[rowData.stateName])
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
                    ? /////////////////// the exceptions ///////////////////
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
                                ? rowData.stateName.includes("dyspnea", "ast", "neutro")
                                    ? <>
                                        < FormRow
                                            rowData={rowData.secondaryState}
                                            handleChange={this.handleChange}
                                            handleClick={this.handleClick}
                                            currentParentState={this.state[rowData.secondaryState.stateName]}
                                            secondaryQuestion={this.state[rowData.secondaryState.stateName]}
                                        />
                                    </>
                                    : <>
                                        <Button>N</Button>
                                    </>
                                : null
                            }

                            {/* -------Sylwia's elegant previous code------ */}
                            {/* {currentParentState
                                ?
                                rowData.stateName.includes("dyspnea")
                                    ? <>
                                        < FormRow
                                            rowData={rr24Yes}
                                            handleChange={this.handleChange}
                                            handleClick={this.handleClick}
                                            currentParentState={this.state.rr24Yes} />
                                        < FormRow
                                            rowData={rr24No}
                                            handleChange={this.handleChange}
                                            handleClick={this.handleClick}
                                            currentParentState={this.state.rr24No} />
                                    </>
                                    :
                                    <>
                                        < FormRow
                                            rowData={leukocytosisYes}
                                            handleChange={this.handleChange}
                                            handleClick={this.handleClick}
                                            currentParentState={this.state.leukocytosisYes} />
                                        < FormRow
                                            rowData={leukocytosisNo}
                                            handleChange={this.handleChange}
                                            handleClick={this.handleClick}
                                            currentParentState={this.state.leukocytosisNo} />
                                    </>
                                : null} */}
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
                                <p> {currentParentState ? rowData.ratio : null}</p>
                            </Col>
                            <Col>{
                                rowData.stateName.includes("rr24")
                                    ?
                                    <>
                                        <ToggleButtonGroup
                                            type="radio"
                                            name="secondaryQs"
                                            onChange={
                                            (val) => {
                                                rowData.ratio = val === "N" ? "Insignificant" : rowData.ratioY
                                                this.props.handleClick(this.props.rowData.stateName, val)

                                            }}
                                        >
                                            <ToggleButton
                                                variant={this.state[rowData.stateName] ? "dark" : "outline-dark"}
                                                value={"Y"}
                                            >Y</ToggleButton>
                                            <ToggleButton
                                                variant={this.state[rowData.stateName] ? "dark" : "outline-dark"}
                                                value={"N"}
                                            >N</ToggleButton>
                                        </ToggleButtonGroup>

                                    </>
                                    :
                                    <>
                                        <ToggleButtonGroup
                                            type="checkbox"
                                            name="studyOptions"
                                            onChange={this.handleChange}
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

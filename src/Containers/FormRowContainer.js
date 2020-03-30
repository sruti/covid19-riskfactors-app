import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';

export class FormRowContainer extends Component {

    // this state exists here only for when this component is recursively a parent
    // state = {
    //     alt40YesState: false,
    //     alt40NoState: false,
    //     astYesState: false,
    //     astNoState: false,
    //     rr24YesState: false,
    //     rr24NoState: false,
    // }

    // in recursion, this component becomes the parent and function is here as well as in FormCont so we can pass it
    // handleClick = (stateName) => {
    //     this.setState(prevState => {
    //         return {
    //             [stateName]: !prevState[stateName]
    //         }
    //     })
    // }

    handleClick = (val) => {
        // let points;

        // if (val[0] === false) {
        //     points = this.props.rowData.points
        // } else {
        //     points = this.props.rowData.points * -1
        // }
        this.props.handleClick(this.props.rowData.stateName)
    }

    render() {
        let { rowData, currentParentState, exceptions, handleClick } = this.props
        console.log(currentParentState);
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
                onChange={this.props.handleClick}
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
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleCounter={this.props.handleCounter}
            rowData={rowData.stateName.includes("dyspnea")
                ? exceptions[0]
                : (rowData.stateName.includes("alt40") ? exceptions[2] : exceptions[4])}
            currentParentState={rowData.stateName.includes("dyspnea")
                ? this.state.rr24YesState
                : (rowData.stateName.includes("alt40") ? this.state.alt40YesState : this.state.astYesState)} />
        < FormRow
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleCounter={this.props.handleCounter}
            rowData={rowData.stateName.includes("dyspnea")
                ? exceptions[1]
                : (rowData.stateName.includes("alt40") ? exceptions[3] : exceptions[5])}
            currentParentState={rowData.stateName.includes("dyspnea")
                ? this.state.rr24NoState
                : (rowData.stateName.includes("alt40") ? this.state.alt40NoState : this.state.astNoState)} />
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
        <Col>
            <p> {currentParentState ? rowData.ratioTitle : null}</p>
        </Col>
        <Col>
            <ToggleButtonGroup
                type="checkbox"
                name="studyOptions"
                value={currentParentState}
                onChange={this.props.handleClick}
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
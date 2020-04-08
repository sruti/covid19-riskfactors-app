import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { SecondaryQuestionContainer as SecondaryQuestion } from './SecondaryQuestionContainer';

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
        let { rowData, currentParentState, handleClick, handleYNClick, setColor } = this.props

        let bgcolor = setColor(rowData.ratio, rowData.stateName, rowData.protective)
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
                                    border: "darkblue 1px solid"
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
                                    onChange={(value) => {
                                        handleClick(rowData.stateName, value)
                                    }}
                                >
                                    <ToggleButton
                                        variant={currentParentState ? "dark" : "outline-dark"}
                                        value={"✓"}
                                    >✓</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                        <Row>
                            {currentParentState
                                ?
                                <>
                                    {/* depending on the row, conditionally render the correct data */}
                                    <SecondaryQuestion
                                        handleClick={handleClick}
                                        questionTitle={rowData.secondaryQuestion.title}
                                        rowData={
                                            this.props.state[rowData.stateName + "Yes"] ?
                                                rowData.secondaryQuestion.yes : rowData.secondaryQuestion.no}
                                        parentStateName={rowData.stateName}
                                        currentParentState={currentParentState}
                                        handleButtonRelease={this.handleButtonRelease}
                                        handleButtonPress={this.handleButtonPress}
                                        handleYNClick={handleYNClick}
                                        showOtherLabel={this.state.showOtherLabel}
                                        setColor={setColor}
                                        state={this.props.state}
                                    />
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
                                <p> {currentParentState
                                    ? this.state.showOtherLabel
                                        ? rowData.ratio
                                        : rowData.ratioTitle
                                    : null}</p>
                            </Col>
                            <Col>
                                {
                                    <ToggleButtonGroup
                                        type="checkbox"
                                        name="studyOptions"
                                        value={currentParentState}
                                        onChange={(value) => {
                                            handleClick(rowData.stateName, value)
                                        }}
                                    >
                                        <ToggleButton
                                            variant={currentParentState ? "dark" : "outline-dark"}
                                            value={"✓"}
                                        >✓</ToggleButton>
                                    </ToggleButtonGroup>
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


import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';
import { dyspneaYes, dyspneaNo, leukocytosisNo, leukocytosisYes } from '../data.js'


export class FormRowContainer extends Component {

    // this state exists here only for the two exceptions when this component is recursively a parent of another component of the same type
    state = {
        leukocytosisYes: false,
        leukocytosisNo: false,
        dyspneaYes: false,
        dyspneaNo: false,
    }

    // in recursive situation, this component becomes the parent and because of that, we need to place this function here as well as we can pass it
    handleClick = (stateName, val) =>{
        this.setState( prevState => {      
            return {
                [stateName]: !prevState[stateName]
            }
        })
    }

    handleChange = (val) => { 
            this.props.handleClick(this.props.rowData.stateName, val)
    }

    render() {
        let { rowData, currentParentState } = this.props
        if (rowData.stateName === "leukocytosis"){
            console.log(this.state.leukocytosis);
        }

        let btnvariant = "outline-success"
        let bgcolor;

        switch (rowData.ratio) {
            case "Insignificant":
                // btnvariant = "outline-danger"
                currentParentState 
                ?
                    bgcolor = "lightcoral"
                : 
                    bgcolor = "white"
                break
            case "?":
                // btnvariant = "outline-danger"
                    bgcolor = "white"
                break
            case "Excluded":
                // btnvariant = "outline-secondary"
                currentParentState 
                ?
                    bgcolor = "lightgrey"
                : 
                    bgcolor = "white"
                break
            default:
                // btnvariant = "outline-success"
                currentParentState 
                ?
                    bgcolor = "lightgreen"
                :
                    bgcolor = "white"
        }

        return (
            <>
            { rowData.ratio.includes("?") 
            ? /////////////////// this is the treatment for the two exceptions ///////////////////
            <Container 
            className = "rowInForm"
                style={
                    currentParentState ? 
                    {
                        backgroundColor: bgcolor,
                        top: "20%",
                        marginTop: "1rem",
                        marginBottom: "2px",
                        border: "red 1px solid"
                    }
                    :
                    {
                        backgroundColor: bgcolor,
                        top: "20%",
                        marginTop: "1rem",
                        marginBottom: "2px",
                    }
            }
            >
            <Row>
                <Col>
                    <p>{rowData.title}</p>
                </Col>
                <Col>
                    <p><strong> {currentParentState ? "⭕️ Choose an option below ⭕️ " : null }</strong></p>
                </Col>
                <Col>
                    <ToggleButtonGroup 
                        type="checkbox" 
                        name="studyOptions" 
                        value={currentParentState} 
                        onChange={this.handleChange}
                    >
                        <ToggleButton 
                            variant={btnvariant} 
                            value={currentParentState ? "Yes" : "No"} 
                        >{currentParentState ? "Yes" : "No"}</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                {/* if you click on the button, create two new rows*/}
                { currentParentState 
                ? 
                    rowData.stateName.includes("rr24") 
                    ? <> 
                    < FormRow 
                        rowData={dyspneaYes} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick}
                        currentParentState={this.state.dyspneaYes}/>
                    < FormRow 
                        rowData={dyspneaNo} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick}
                        currentParentState={this.state.dyspneaNo}/>
                    </>
                    : 
                    <>
                    < FormRow 
                        rowData={leukocytosisYes} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        currentParentState={this.state.leukocytosisYes}/>
                    < FormRow 
                        rowData={leukocytosisNo} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        currentParentState={this.state.leukocytosisNo}/>
                    </>
                : null }
            </Row>
            </Container>
            : /////////////////// this is for the non-exceptions /////////////////
            <Container 
            className = "rowInForm"
                style={{
                    backgroundColor: bgcolor,
                    top: "20%",
                    marginTop: "1rem",
                    marginBottom: "2px",
                }}
            >
            <Row>
                <Col>
                    <p>{rowData.title}</p>
                </Col>
                <Col>
                    <p> { currentParentState ? rowData.ratio : null}</p>
                </Col>
                <Col>
                    <ToggleButtonGroup 
                        type="checkbox" 
                        name="studyOptions" 
                        value={currentParentState} 
                        onChange={this.handleChange}
                    >
                        <ToggleButton 
                            variant={btnvariant} 
                            value={currentParentState ? "Yes" : "No"} 
                        >{currentParentState ? "Yes" : "No"}</ToggleButton>
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
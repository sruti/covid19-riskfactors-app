import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormRowContainer as FormRow } from './FormRowContainer';


export class FormRowContainer extends Component {

    // this state exists here only for the two exceptions when this component is recursively a parent of another component of the same type
    state = {
        leukocytosis: false,
        dyspnea: false,
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
            this.props.handleClick(this.props.rowData.state, val)
    }

    render() {
        let { rowData, currentState } = this.props
        if (rowData.state === "leukocytosis"){
            console.log(this.state.leukocytosis);
        }

        let btnvariant = "outline-success"
        let bgcolor;

        switch (rowData.ratio) {
            case "Insignificant":
                // btnvariant = "outline-danger"
                currentState 
                ?
                    bgcolor = "lightcoral"
                : 
                    bgcolor = "white"
                break
            case /\?/: //"?" leaves it white and regex makes it green; I'm leaving regex because perhaps we want to ask the question
                // btnvariant = "outline-danger"
                    bgcolor = "white"
                break
            case "Excluded":
                // btnvariant = "outline-secondary"
                currentState 
                ?
                    bgcolor = "lightgrey"
                : 
                    bgcolor = "white"
                break
            default:
                // btnvariant = "outline-success"
                currentState 
                ?
                    bgcolor = "lightgreen"
                :
                    bgcolor = "white"
        }

        return (
            <Container 
                style={{
                    backgroundColor: bgcolor,
                    marginTop: "2px",
                    marginBottom: "2px",
                }}
            >
            { rowData.ratio.includes("?") 
            ? // this is the treatment for the exceptions
            <>
            <Row>
                <Col>
                    <p>{rowData.title}</p>
                </Col>
                <Col>
                    {/* this is an empty column because exceptions don't have text */}
                </Col>
                <Col>
                    <ToggleButtonGroup 
                        type="checkbox" 
                        name="studyOptions" 
                        value={currentState} 
                        onChange={this.handleChange}
                    >
                        <ToggleButton 
                            variant={btnvariant} 
                            value={currentState ? "Yes" : "No"} 
                        >{currentState ? "Yes" : "No"}</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                {/* if you click on the button, create a new row*/}
                { currentState 
                ? 
                    rowData.ratio.includes("dyspnea") 
                    ? < FormRow 
                        rowData={{ "state": "dyspnea", "title": "Dyspnea", "ratio": "p=<0.05" }} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick}
                        currentState={this.state.dyspnea}/>
                    : < FormRow 
                        rowData={{ "state": "leukocytosis", "title": "Leukocytosis >10", "ratio": "(OR 6.60*)" }} 
                        handleChange={this.handleChange} 
                        handleClick={this.handleClick} 
                        currentState={this.state.leukocytosis}/>
                : null }
            </Row>
            </>
            : /////////////////// this is for the non-exceptions /////////////////
            <Row>
                <Col>
                    <p>{rowData.title}</p>
                </Col>
                <Col>
                    <p> { currentState ? rowData.ratio : null}</p>
                </Col>
                <Col>
                    <ToggleButtonGroup 
                        type="checkbox" 
                        name="studyOptions" 
                        value={currentState} 
                        onChange={this.handleChange}
                    >
                        <ToggleButton 
                            variant={btnvariant} 
                            value={currentState ? "Yes" : "No"} 
                        >{currentState ? "Yes" : "No"}</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            }
            </Container>
        )
    }
}

export default FormRowContainer
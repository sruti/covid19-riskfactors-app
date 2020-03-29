import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';
import Button from 'react-bootstrap/Button'


export class FormContainer extends Component {

    state = {
        show: false,
        hypertension: false,
        age: false,
        covidExposure: false,
        diabetes: false,
        cad: false,
        dyspnea: false,
        temp: false,
        sofa: false,
        neutro: false,
        lympho: false,
        ddimer: false,
        ferritin: false,
        ldh: false,
        plateles: false,
        pt: false,
        procal: false,
        cr: false,
        hstrop: false,
        hscrp: false,
        albumin: false,
        bilirubin: false,
        alt40: false,
        ast: false,
        astalt: false,
        urea: false,
        glucose: false,
        alt40YesState: false,
        alt40NoState: false,
        astYesState: false,
        astNoState: false,
        rr24YesState: false,
        rr24NoState: false,
    }

    getThePoints = () => {
        // check which state objects are true
        let data = this.props.data
        let stateNamesOfTheSelected = Object.entries(this.state).filter((subArray) => subArray[1] === true).map((array) => array[0]);
        console.log(stateNamesOfTheSelected);

        // get only the points
        let points = stateNamesOfTheSelected.map((selected) => data[0].basic.find((piece) => piece.stateName === selected ) || data[0].advanced.find((piece) => piece.stateName === selected ) ).map(object => object.points).map(point => {
            return point === 'undefined' || isNaN(point) ? point = 0 : point
        })
        
        // // sum it up
        let sum = points.reduce((point, currentValue) => {
            return point + currentValue
        }, 0)

        this.props.handleCounter(sum)
    }

    //these two methods could become one
    handleClick = (title) => {
        this.setState(prevState => {
            return {
                [title]: !prevState[title]
            }
        }, () => this.getThePoints())

    }

    handleChange = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {


        return (
            <section className="mainContainer" >
                {this.props.data[0].basic.map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={this.handleClick}
                        section="basic"
                        currentParentState={this.state[rowData.stateName]}
                        handleCounter={this.props.handleCounter}
                        // stateNamesOfTheSelected = {stateNamesOfTheSelected}
                    />
                })
                }
                {this.state.show ?
                    <>
                        <Button variant="link" onClick={this.handleChange}>Hide Labs</Button>
                        {this.props.data[1].advanced.map((rowData) =>
                            <FormRowContainer
                                rowData={rowData}
                                key={rowData.title}
                                handleClick={this.handleClick}
                                section="advanced"
                                currentParentState={this.state[rowData.stateName]}
                                handleCounter={this.props.handleCounter}
                                // countThemUp={this.countThemUp}
                                // stateNamesOfTheSelected = {stateNamesOfTheSelected}
                            />)}
                    </>
                    :
                    <Button variant="link" onClick={this.handleChange}>Labs</Button>
                }
            </section>
        )
    }
}

export default FormContainer

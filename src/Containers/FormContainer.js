import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';
import Button from 'react-bootstrap/Button'
import { rr24Yes } from '../data.js'

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
        astalt: false,
        urea: false,
        glucose: false,
        rr24Y: false,
        rr24N: false,
        leukocytosisYes: false,
        leukocytosisNo: false,
        alt40: false,
        ast: false,
    }

    //these two methods could become one
    handleClick = (title, val) => {
        console.log(title);
        console.log(val);
        
        this.setState(prevState => {
            return {
                [title]: !prevState[title]
            }
        })
    }

    handleChange = () => {        
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        // console.log("rr24 in formcont", this.state.rr24Y );
        
        return (
            <section className="mainContainer" >
                {this.props.data[0].basic.map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={this.handleClick}
                        currentParentState={this.state[rowData.stateName]}
                        rr24Y={this.state.rr24Y}
                        rr24N={this.state.rr24N}
                        rr24Yes={rr24Yes}
                    />
                })
                }
                {this.state.show ?
                    <>
                        <Button variant="link" onClick={this.handleChange}>Hide Labs</Button>
                        {this.props.data[1].advanced.map((rowData) =>
                            <FormRowContainer
                                rowData={rowData} key={rowData.title}
                                handleClick={this.handleClick}
                                currentParentState={this.state[rowData.stateName]}
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

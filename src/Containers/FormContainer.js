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
        astalt: false,
        urea: false,
        glucose: false,
        rr24: false,
        leukocytosis: false,
        alt40: false,
        ast: false,
    }

    secondaryState = {
        rr24: false,
        leukocytosis: false,
        alt40: false,
        ast: false,

    }

    //these two methods could become one
    handleClick = (title) => {
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

        return (
            <section className="mainContainer" >
                {this.props.data[0].basic.map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={this.handleClick}
                        currentParentState={this.state[rowData.stateName]}
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

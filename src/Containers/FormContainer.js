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
        rr24: false,
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
        ast: false,
        urea: false,
        glucose: false,
    }

    //these two methods could become one
    handleClick = (title, newOptionValue) => {
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
            <section style={{ "border": "black solid 2px" }}>
                {this.props.data[0].basic.map((rowData) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleClick={this.handleClick}
                        currentState={this.state[rowData.state]}
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
                                currentState={this.state[rowData.state]}
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

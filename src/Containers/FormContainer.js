import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';
import Button from 'react-bootstrap/Button'


export class FormContainer extends Component {

    state = {
        show: false,
        hypertension: "Unknown",
        age: "Unknown",
        covidExposure: "Unknown",
        diabetes: "Unknown",
        cad: "Unknown",
        rr24: "Unknown",
        temp: "Unknown",
        sofa: "Unknown",
        neutro: "Unknown",
        lympho: "Unknown",
        ddimer: "Unknown",
        ferritin: "Unknown",
        ldh: "Unknown",
        plateles: "Unknown",
        pt: "Unknown",
        procal: "Unknown",
        cr: "Unknown",
        hstrop: "Unknown",
        hscrp: "Unknown",
        albumin: "Unknown",
        bilirubin: "Unknown",
        ast: "Unknown",
        urea: "Unknown",
        glucose: "Unknown",
    }

    handleOption = (title, newOptionValue) => {
        this.setState({
            [title]: newOptionValue
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
                {this.props.data[0].basic.map((rowData, index) => {
                    return <FormRowContainer
                        rowData={rowData}
                        key={rowData.title}
                        handleOption={this.handleOption}
                        currentState={this.state[rowData.state]}
                        index={index + 1} />
                })
                }
                {this.state.show ?
                    <>
                        <Button variant="link" onClick={this.handleChange}>Hide Labs</Button>
                        {this.props.data[1].advanced.map((rowData, index) =>
                            <FormRowContainer
                                rowData={rowData} key={rowData.title}
                                handleOption={this.handleOption}
                                currentState={this.state[rowData.state]}
                                index={index + 1} />)}
                    </>
                    :
                    <Button variant="link" onClick={this.handleChange}>Labs</Button>
                }
            </section>
        )
    }
}

export default FormContainer

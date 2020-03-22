import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';


export class FormContainer extends Component {

    state = {
        hypertension: "Unknown",
        age: "Unknown",
        covidExposure: "Unknown",
        diabetes: "Unknown",
        cad: "Unknown",
        rr24: "Unknown",
        temp: "Unknown",
    }

    handleOption = (title, newOptionValue) => {        
        this.setState({
            [title]: newOptionValue
        })
    }

    render() {
        return (
            <section style={{"border":"black solid 2px"}}>
                {this.props.data.map(rowData => { 
                return <FormRowContainer 
                        rowData={rowData} 
                        key={rowData.title}
                        handleOption={this.handleOption}
                        currentState={this.state[rowData.state]}/>})}
            </section>
        )
    }
}

export default FormContainer

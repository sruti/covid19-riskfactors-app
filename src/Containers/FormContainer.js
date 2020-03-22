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
                <h2> basic</h2>
                {this.props.data.basic.map((rowData, index) => { 
                return <FormRowContainer 
                        rowData={rowData} 
                        key={rowData.title}
                        handleOption={this.handleOption}
                        currentState={this.state[rowData.state]}
                        index = {index+1}/>})}
                <h2> advanced</h2>
                    
            </section>
        )
    }
}

export default FormContainer

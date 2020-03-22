import React, { Component } from 'react'
import FormRowContainer from './FormRowContainer';


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
        console.log(this.props.data[0]);
        
        return (
            <section style={{"border":"black solid 2px"}}>
                <h2> basic</h2>
                {this.props.data[0].basic.map((rowData, index) => { 
                    return <FormRowContainer 
                            rowData={rowData} 
                            key={rowData.title}
                            handleOption={this.handleOption}
                            currentState={this.state[rowData.state]}
                            index = {index+1}/>})
                }
                {this.state.show ? 
                    <>
                    <h2> advanced</h2>
                    <label> 
                        <span> Hide advanced</span>
                        <input type="checkbox" onChange={this.handleChange}/> 
                    </label>
                    {this.props.data[1].advanced.map((rowData, index) => <FormRowContainer rowData={rowData} key={rowData.title} handleOption={this.handleOption} currentState={this.state[rowData.state]} index = {index+1}/>)}
                    </>
                :                 
                    <label> 
                        <span> Show advanced</span>
                        <input type="checkbox" onChange={this.handleChange}/> 
                    </label>
                }
            </section>
        )
    }
}

export default FormContainer

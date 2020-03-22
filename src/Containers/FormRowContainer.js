import React, { Component } from 'react'

export class FormRowContainer extends Component {

    handleChange = (e) => {
        this.props.handleOption(this.props.rowData.state, e.target.value)
    }

    render() {
        let {rowData, currentState, index} = this.props

        if (rowData.state == "age"){
            console.log("CURRENT STATE OF", rowData.title, currentState);
        }

        return (
            <section> 
            <h2>{index}. {rowData.title}</h2>
                <select onChange={this.handleChange} value={currentState}> 
                    <option value="Yes">Yes </option>
                    <option value="No"> No </option>
                    <option value="Unknown"> Unknown </option>
                </select> 
            </section>
        )
    }
}

export default FormRowContainer

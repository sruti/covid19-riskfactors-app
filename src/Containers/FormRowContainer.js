import React, { Component } from 'react'

export class FormRowContainer extends Component {

    handleChange = (e) => {
        this.props.handleOption(this.props.rowData.state, e.target.value)
    }

    render() {
        if (this.props.rowData.state == "age"){
            console.log("CURRENT STATE OF", this.props.rowData.title, this.props.currentState);
        }
        return (
            <section>
                ---------- <br/>
            <h2>{this.props.index}. {this.props.rowData.title}</h2>
                <select onChange={this.handleChange} value={this.props.currentState}> 
                    <option value="Yes">Yes </option>
                    <option value="No"> No </option>
                    <option value="Unknown"> Unknown </option>
                </select> 
            </section>
        )
    }
}

export default FormRowContainer

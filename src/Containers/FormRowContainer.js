import React, { Component } from 'react'

export class FormRowContainer extends Component {

    handleChange = (e) => {
        this.props.handleOption(this.props.rowData.state, e.target.value)
    }

    render() {
        
        return (
            <section>
                ---------- <br/>
                form row
                <p>{this.props.rowData.title}</p>
                <select onChange={this.handleChange}> 
                    <option value="Yes">Yes </option>
                    <option value="No"> No </option>
                    <option value="Unknown"> Unknown </option>
                </select> 
            </section>
        )
    }
}

export default FormRowContainer

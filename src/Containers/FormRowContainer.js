import React, { Component } from 'react'
// import FormOptionText from '../Components/FormOptionText'
// import FormOptionButton from '../Components/FormOptionButton'

export class FormRowContainer extends Component {

    handleChange = (e) => {
        // console.log("ROW", this.props.rowData.title, e.target.value)
        this.props.handleOption(this.props.rowData.state, e.target.value)
    }

    render() {
        // console.log(this.props.rowData);
        
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

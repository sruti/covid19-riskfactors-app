import React, { Component } from 'react'
// import FormOptionText from '../Components/FormOptionText'
// import FormOptionButton from '../Components/FormOptionButton'

export class FormRowContainer extends Component {

    handleChange = (e) => {
        console.log("what")
    }

    render() {
        console.log(this.props.rowData);
        
        return (
            <section>
                ---------- <br/>
                form row
                <p>{this.props.rowData.title}</p>
                <select onChange={this.handleChange}> 
                    {this.props.rowData.options.map(option => 
                        <option value={option}> {option}</option>)
                    }
                </select> 
            </section>
        )
    }
}

export default FormRowContainer

import React, { Component } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class FormRowContainer extends Component {

    handleChange = (val) => {
        this.props.handleOption(this.props.rowData.state, val)
    }

    render() {
        let { rowData, currentState, index } = this.props

        if (rowData.state == "age") {
            console.log("CURRENT STATE OF", rowData.title, currentState);
        }

        return (
            <section>
                <p>{index}. {rowData.title}</p>

                <ToggleButtonGroup type="radio" name="studyOptions" value={currentState} onChange={this.handleChange}>
                    <ToggleButton value={"Yes"}>Yes</ToggleButton>
                    <ToggleButton value={"No"}>No</ToggleButton>
                    <ToggleButton value={"Unknown"}>Unknown</ToggleButton>
                </ToggleButtonGroup >
                {/* <select onChange={this.handleChange} value={currentState}>
                    <option value="Yes">Yes </option>
                    <option value="No"> No </option>
                    <option value="Unknown"> Unknown </option>
                </select> */}
            </section>
        )
    }
}

export default FormRowContainer

import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { ardsStudy, mortalityStudy } from '../studies.js'
import StudyLegend from '../Components/StudyLegend'

export default class FormRowContainer extends Component {

    state = {
        selected: "Mortality"
    }

    handleChange = (val) => {
        this.props.handleSort(val)
        this.setState({
            selected: val
        })
    }

    prepareProps = () => {
        let { selected } = this.state
        if (selected === "Mortality"){
            return mortalityStudy
        } else {
            return ardsStudy
        }
    }


    render() {
        return (
            <>
                <ToggleButtonGroup type="radio" name="studyOptions" defaultValue={"Mortality"} onChange={this.handleChange}>
                    <ToggleButton value={"Mortality"}>Mortality</ToggleButton>
                    <ToggleButton value={"ARDS"}>ARDS</ToggleButton>
                    <ToggleButton value={"ARDS Death"}>ARDS Death</ToggleButton>
                </ToggleButtonGroup >
                <StudyLegend study={ this.prepareProps() }/>
            </>
        )
    }
}

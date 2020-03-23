import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import { ardsStudy, mortalityStudy } from '../studies.js'
import StudyLegend from '../Components/StudyLegend'

export default class FormRowContainer extends Component {

    state = {
        selected: "Mortality",
        show: false
    }

    handleChange = (val) => {
        this.props.handleSort(val)
        this.setState({
            selected: val
        })
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
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
                {
                    this.state.show 
                    ?
                    <>
                        <StudyLegend study={ this.prepareProps() }/>
                        <Button variant="link" onClick={this.toggleShow}>Hide Legend</Button>
                    </>
                    :
                    <div>
                            <Button variant="link" onClick={this.toggleShow}>Show Legend</Button>
                    </div>
                }
                
            </>
        )
    }
}

import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import { ardsStudy, mortalityStudy, icuStudy } from '../studies.js'
import StudyLegend from '../Components/StudyLegend'
import Counter from '../Components/Counter'

export default class FormRowContainer extends Component {

    state = {
        show: true
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    prepareProps = () => {
        let { selected } = this.props
        if (selected === "Mortality") {
            return mortalityStudy
        } else if (selected === "ICU"){
            return icuStudy
        } else {
            return ardsStudy
        }
    }


    render() {
        let {handleDisplay, counter} = this.props
        
        return (
            <>
                <ToggleButtonGroup 
                    type="radio" 
                    name="studyOptions" 
                    defaultValue={"Mortality"} 
                    onChange={handleDisplay}
                >
                    <ToggleButton value={"Mortality"}>Mortality</ToggleButton>
                    <ToggleButton value={"ARDS"}>ARDS</ToggleButton>
                    <ToggleButton value={"ARDS Death"}>ARDS Death</ToggleButton>
                </ToggleButtonGroup >
                {
                    this.state.show
                        ?
                        <>
                            <StudyLegend study={this.prepareProps()} />
                            <Button variant="link" onClick={this.toggleShow}>Hide Legend</Button>
                        </>
                        :
                        <div>
                            <Button variant="link" onClick={this.toggleShow}>Show Legend</Button>
                        </div>
                }
                <Counter counter={counter}/>
            </>
        )
    }
}

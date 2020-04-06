import React, { Component } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Counter from '../Components/Counter'
import HowTo from '../Components/HowTo'


export default class FormRowContainer extends Component {

    render() {
        let {handleDisplay, counter, sum, showHowTo, toggleShow} = this.props
        
        return (
            <>
                <ToggleButtonGroup 
                    type="radio" 
                    name="studyOptions" 
                    defaultValue={"ICU"} 
                    onChange={handleDisplay}
                >   
                    <ToggleButton value={"ICU"}>ICU</ToggleButton>
                    <ToggleButton value={"ARDS"}>ARDS</ToggleButton>
                    <ToggleButton value={"ARDS Death"}>ARDS Death</ToggleButton>
                    <ToggleButton value={"Mortality"}>Mortality</ToggleButton>
                </ToggleButtonGroup >
                {
                    showHowTo
                        ?
                        <>
                            <HowTo />
                            <Button variant="link" onClick={() => toggleShow("HowTo")}>Hide Instructions</Button>
                        </>
                        :
                        <div>
                            <Button variant="link" onClick={() => toggleShow("HowTo")}>Show Instructions</Button>
                        </div>
                }
                <Counter counter={counter} sum={sum}/>
            </>
        )
    }
}

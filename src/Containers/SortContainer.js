import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function SortContainer(props) {
    const handleChange = (val) => {
        props.handleSort(val)
    }

    return (
        <ToggleButtonGroup type="radio" name="studyOptions" defaultValue={"Mortality"} onChange={handleChange}>
            <ToggleButton value={"Mortality"}>Mortality</ToggleButton>
            <ToggleButton value={"ARDS"}>ARDS</ToggleButton>
            <ToggleButton value={"ARDS Death"}>ARDS Death</ToggleButton>
        </ToggleButtonGroup >
    )
}

import React from 'react';

export default function SortContainer(props) {

    const handleChange = (e) => {
        props.handleSort(e.target.value)
    }

    return (
        <section>
            <select onChange={handleChange}> 
                <option value="Mortality">Mortality </option>
                <option value="ARDS"> ARDS </option>
                <option value="ARDS Death"> ARDS Death </option>
            </select>     
            </section>
    )

}

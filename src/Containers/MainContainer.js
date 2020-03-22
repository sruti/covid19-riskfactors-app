import React, { Component } from 'react';
import FilterContainer from './FilterContainer';
import FormContainer from './FormContainer';
import ResultContainer from './ResultContainer';


export class MainContainer extends Component {
    render() {
        return (
            <main>
                MAIN CONT
                <FilterContainer/>
                <FormContainer/>
                <ResultContainer/>
            </main>
        )
    }
}

export default MainContainer

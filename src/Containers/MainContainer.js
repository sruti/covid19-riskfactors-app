import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality"
    }

    handleSort = (newSortValue) => {
        this.setState({
          sortValue: newSortValue
        })
    }


    render() {
        console.log("state", this.state)
        return (
            <main>
                MAIN CONT
                <SortContainer handleSort={this.handleSort}/>
                <FormContainer/>
            </main>
        )
    }
}

export default MainContainer

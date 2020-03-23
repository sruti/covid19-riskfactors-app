import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import {mortality} from '../data.js'
import {ards} from '../data.js'
import {ardsDeath} from '../data.js'



export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
    }

    handleSort = (newSortValue) => {
        this.setState({
            sortValue: newSortValue
        })
    }

    displaySorted = () => {
        let { sortValue } = this.state
        // sorted from the highest to the lowest value

        if (sortValue === "Mortality") {
            return mortality
        } else if (sortValue === "ARDS") {
            return ards
        } else {
            return ardsDeath
        }
    }

    render() {
        return (
            <main>
                {/* MAIN CONT */}
                <SortContainer handleSort={this.handleSort} />
                <FormContainer data={this.displaySorted()} />
            </main>
        )
    }
}

export default MainContainer

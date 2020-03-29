import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath } from '../data.js'

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
        counter: 0,
        showCounter: false,
    }

    handleCounter = (points) => {
        console.log("COUNTER VALUE", points);
        if (typeof (points) === "number") {
            this.setState({
                counter: points
            })
        }
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
        // console.log("POINTS", this.state.counter);
        return (
            <main>
                <SortContainer handleSort={this.handleSort} counter={this.state.counter} />
                <FormContainer data={this.displaySorted()} handleCounter={this.handleCounter} />
            </main>
        )
    }
}

export default MainContainer

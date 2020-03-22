import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';

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
        // sorted from the lowest to the highest value

        if (sortValue === "Mortality") {
            return [
                { "state": "age", "title": "Age (>/=65yr)" },
                { "state": "diabetes", "title": "Diabetes" },
                { "state": "hypertension", "title": "Hypertension" },
                { "state": "rr24", "title": "RR>24" },
                { "state": "cad", "title": "CAD" },
                { "state": "covidExposure", "title": "COVID-19 Exposure" } //doesn't have a value in excel
            ]
        } else if (sortValue === "ARDS") {
            return [
                { "state": "temp", "title": "Temp. >/= 39C" },
                { "state": "hypertension", "title": "Hypertension" },
                { "state": "diabetes", "title": "Diabetes" },
                { "state": "age", "title": "Age (>/=65yr)" },
                { "state": "rr24", "title": "RR>24" }, //excel value unclear
            ]
        } else {
            return [
                { "state": "temp", "title": "Temp. >/= 39C" },
                { "state": "age", "title": "Age (>/=65yr)" },
            ]
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

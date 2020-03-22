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
        // sorted from the highest to the lowest value

        if (sortValue === "Mortality") {
            return [
                {"basic": [
                { "state": "cad", "title": "CAD", "ratio": "OD 21.40" },
                { "state": "rr24", "title": "RR>24", "ratio": "OR 8.89" },
                { "state": "hypertension", "title": "Hypertension", "ratio": "OR 3.05" },
                { "state": "diabetes", "title": "Diabetes", "ratio": "OR 2.85" },
                { "state": "age", "title": "Age (>/=65yr)", "ratio": "OR 1.10" },
                { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "" }, //doesn't have a value in excel
                { "state": "temp", "title": "Temp. >/= 39C", "ratio": "Excluded" }]},
                {"advanced": []}
            ]
        } else if (sortValue === "ARDS") {
            return [
                { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 3.26" },
                { "state": "diabetes", "title": "Diabetes", "ratio": "HR 2.34" },
                { "state": "hypertension", "title": "Hypertension", "ratio": "HR 1.82" },
                { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 1.77" },
                { "state": "rr24", "title": "RR>24", "ratio": "HR 3.26", "ratio": "" }, //excel value unclear
                { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
                { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
            ]
        } else {
            return [
                { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 6.17" },
                { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 0.41" },
                { "state": "hypertension", "title": "Hypertension", "ratio": "Insignificant" },
                { "state": "diabetes", "title": "Diabetes", "ratio": "Insignificant" },
                { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
                { "state": "rr24", "title": "RR>24", "ratio": "Insignificant" },
                { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
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

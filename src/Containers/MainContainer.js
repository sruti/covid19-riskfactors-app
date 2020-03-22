import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
        hypertension: "Unknown",
        age: "Unknown",
        covidExposure: "Unknown",
        diabetes: "Unknown",
        cad: "Unknown",
        rr24: "Unknown",
        temp: "Unknown",
    }

    handleSort = (newSortValue) => {
        this.setState({
          sortValue: newSortValue
        })
    }

    handleOption = (title, newOptionValue) => {
        // console.log("HANDLE OPTION", title, newOptionValue);
        this.setState({
            [title]: newOptionValue
        })
    }

    displaySorted = () => {
        let {sortValue} = this.state
        if (sortValue === "Mortality"){
            return [
                {"state": "hypertension", "title": "Hypertension"}]

        } else if (sortValue === "ARDS"){
            console.log("here we'll plug in ARDS data")
        } else {
            console.log("here we'll plug in ARDS Death data")
        }
    }

    render() {
        console.log("hypertension state", this.state.hypertension)
        return (
            <main>
                MAIN CONT
                <SortContainer handleSort={this.handleSort}/>
                <FormContainer data={this.displaySorted()} handleOption={this.handleOption}/>
            </main>
        )
    }
}

export default MainContainer

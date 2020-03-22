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

    displaySorted = () => {
        let {sortValue} = this.state
        if (sortValue == "Mortality"){
            console.log("here we'll plug in Mortality data")

            return [
                {"title": "Basics", "options": ["Mortality", "ARDS", "ARDS Death"]},
                {"title": "Age", "options": ["OR 1.10", "HR 3.26", "HR 6.17"]}]

        } else if (sortValue == "ARDS"){
            console.log("here we'll plug in ARDS data")
        } else {
            console.log("here we'll plug in ARDS Death data")
        }
    }


    render() {
        // console.log("state", this.state)
        return (
            <main>
                MAIN CONT
                <SortContainer handleSort={this.handleSort}/>
                <FormContainer data={this.displaySorted()}/>
            </main>
        )
    }
}

export default MainContainer

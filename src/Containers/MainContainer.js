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
        if (sortValue === "Mortality"){

            return [
                {"title": "Basics", "options": ["Mortality", "ARDS", "ARDS Death"]},
                {"title": "Hypertension", "options": ["OR 3.05*", "HR 1.82", ""]}]

        } else if (sortValue === "ARDS"){
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

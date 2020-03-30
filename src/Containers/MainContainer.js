import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath, exceptionObjects } from '../data.js'

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
        counter: 0,
        data: mortality,
        exceptions: exceptionObjects
    }

    handleClick = (title) => {
        console.log("hi");
        // console.log(this.state.data);
        // this.setState(prevState => {
        //     return {
        //         [title]: !prevState[title]
        //     }
        // })
    }

    // handleCounter = (points) => {
    //     if (typeof (points) === "number" && !isNaN(points)) {
    //         this.setState(prevState => {
    //             return {
    //                 counter: prevState.counter + points
    //             }
    //         })
    //     }
    // }

    handleSort = (newSortValue) => {
        if (newSortValue === "Mortality") {
            this.setState({
                sortValue: newSortValue,
                data: mortality
            })
        } else if (newSortValue === "ARDS") {
            this.setState({
                sortValue: newSortValue,
                data: ards
            })
        } else {
            this.setState({
                sortValue: newSortValue,
                data: ardsDeath
            })
        }
    }

    displaySorted = () => {
        let { sortValue } = this.state

        // sorted from the highest to the lowest value

    }

    render() {
        return (
            <main>
                hello
                <SortContainer handleSort={this.handleSort} counter={this.state.counter} />
                <FormContainer data={this.state.data} handleClick={this.handleClick} exceptions={this.state.exceptions}/>
            </main>
        )
    }
}

export default MainContainer

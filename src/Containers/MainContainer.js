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
        // const elementToBeUpdated = this.state.data[0][1].find(element => element.stateName === title ) || this.state.data[1][1].find(element => element.stateName === title ) || this.state.exceptions.find(element => element.stateName === title )
        // debugger
        let newStateObject;
        let stateKeyToUpdate; 
        
        if (this.state.data[0][1].find(element => element.stateName === title )){
            stateKeyToUpdate = this.state.data[0][1]
            newStateObject = stateKeyToUpdate.map(element => {
            if (element.stateName === title){
                element.showing = !element.showing
                return element
            } else {
                return element
            }}) 
        } else if (this.state.data[1][1].find(element => element.stateName === title )){
            newStateObject = this.state.data[1][1].map(element => {
                if (element.stateName === title){
                    element.showing = !element.showing
                    return element
                } else {
                    return element
                }}) 
        } else {
            newStateObject = this.state.exceptions.map(element => {
                if (element.stateName === title){
                    element.showing = !element.showing
                    return element
                } else {
                    return element
                }}) 
        }

        this.setState({
            [stateKeyToUpdate]: newStateObject
        }, ()=> console.log("UPDATED STATE IN CONSOLE LOG", this.state))
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

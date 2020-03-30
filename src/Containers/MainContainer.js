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

    handleClick = (title, value) => {
        let newStateObject;
        let stateKeyToUpdate; 
        let points;     
        // debugger
        console.log(title);
        
        if (this.state.data[0][1].find(element => element.stateName === title )){
            stateKeyToUpdate = this.state.data[0][1]
            newStateObject = stateKeyToUpdate.map(element => {
            if (element.stateName === title){
                element.showing = !element.showing
                if (value[0] === false || value[0] === "undefined") {
                    if (typeof(element.points) === "undefined" || isNaN(element.points)){
                        points = 0
                    } else {
                        points = element.points
                    }
                } else {
                    if (typeof(element.points) === "undefined" || isNaN(element.points)){
                        points = 0
                    } else {
                        points = element.points * -1
                    }
                }
                return element
            } else {
                return element
            }}) 
        } else if (this.state.data[1][1].find(element => element.stateName === title )){
            stateKeyToUpdate = this.state.data[1][1]
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title){
                    element.showing = !element.showing
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }}) 
        } else {
            stateKeyToUpdate = this.state.exceptions
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title){
                    element.showing = !element.showing
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }}) 
        }

        this.setState(prevState => {
            return {
                [stateKeyToUpdate]: newStateObject,
                counter: prevState.counter + points,
            }
        }, ()=> console.log("UPDATED STATE IN CONSOLE LOG", this.state))
    }

    countPoints = (val) => {
        let points;

        
        return points
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

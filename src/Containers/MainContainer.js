import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath, exceptionObjects } from '../data.js'

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
        counter: 0,
        data: mortality,
        exceptions: exceptionObjects,
        hypertension: false,
        age: false,
        covidExposure: false,
        diabetes: false,
        cad: false,
        dyspnea: false,
        temp: false,
        sofa: false,
        neutro: false,
        lympho: false,
        ddimer: false,
        ferritin: false,
        ldh: false,
        plateles: false,
        pt: false,
        procal: false,
        cr: false,
        hstrop: false,
        hscrp: false,
        albumin: false,
        bilirubin: false,
        alt40: false,
        ast: false,
        astalt: false,
        urea: false,
        glucose: false,
        alt40YesState: false,
        alt40NoState: false,
        astYesState: false,
        astNoState: false,
        rr24YesState: false,
        rr24NoState: false,
    }

    handleClick = (title, value) => {
        let newStateObject;
        let stateKeyToUpdate; 
        let points;     
        // debugger
        console.log(title);

        // this.setState(prevState => {
        //     return {
        //         [title]: !prevState[title],
        //         counter: prevState.counter + points,
        //     }
        // }, ()=> console.log("UPDATED STATE IN CONSOLE LOG", this.state))
        
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

        if (isNaN(points)){
            points = 0
        }

        this.setState(prevState => {
            return {
                [stateKeyToUpdate]: newStateObject,
                [title]: !prevState[title],
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
                <FormContainer data={this.state.data} handleClick={this.handleClick} exceptions={exceptionObjects}/>
            </main>
        )
    }
}

export default MainContainer

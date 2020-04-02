import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath, exceptionObjects, icu } from '../data.js'

export class MainContainer extends Component {

    state = {
        displayValue: "ICU",
        counter: 1,
        data: icu,
        exceptions: exceptionObjects,
        hypertension: false,
        age: true,
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
        il6: false,
        alt40YesState: false,
        alt40NoState: false,
        astYesState: false,
        astNoState: false,
        rr24YesState: false,
        rr24NoState: false,
    }

    handleYNClick = (title, value) => {
        
    }

    handleClick = (title, value) => {
        console.log(`VALUE of ${title}`, value[0]);
        console.log("STATE of the object", this.state[title]);
        
                
        let newStateObject;
        let stateKeyToUpdate;
        let points;

        // 1. find where the element lives: adv or basic -> it's found
        // 2. check if:
        // - the value is false or undefined, in which case set the points;
        // - the value is ok, and then deduct points
        // - if the points are undefined, points equal 0
        // 3. setState with the points

        if (this.state.data[0][1].find(element => element.stateName === title)) {
            //logic is to click and unclick and update counter
            stateKeyToUpdate = this.state.data[0][1]
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {                    
                    if (value[0] === false || value[0] === "undefined") {
                        if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                            points = 0
                        } else {
                            points = element.points
                        }
                    } else {
                        if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                            points = 0
                        } else {
                            points = element.points * -1
                        }
                    }
                    return element
                } else {
                    return element
                }
            })
        } else if (this.state.data[1][1].find(element => element.stateName === title)) {            
            //logic to handle clicking and unclicking of advanced data
            stateKeyToUpdate = this.state.data[1][1]
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }
            })
        } else {
            stateKeyToUpdate = this.state.exceptions
            //logic to handle clicking and unclicking of exceptions
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }
            })
        }

        if (isNaN(points)) {
            points = 0
        }

        this.setState(prevState => {
            return {
                [stateKeyToUpdate]: newStateObject,
                [title]: !prevState[title],
                counter: prevState.counter + points,
            }
        })
    }

    handleDisplay = (newdisplayValue) => {
        if (newdisplayValue === "Mortality") {
            this.setState({
                displayValue: newdisplayValue,
                data: mortality,
                counter: 1,
                age: true,
            }, () => this.calculateCount(this.state.data, this.state, this.state.exceptions.filter(factor => {
                return ["rr24YesState", "rr24NoState", "alt40YesState", "alt40NoState"].includes(factor.stateName)
            })))
        } else if (newdisplayValue === "ICU") {
            this.setState({
                displayValue: newdisplayValue,
                data: icu,
                counter: 1,
                age: true,
            }, () => this.calculateCount(this.state.data, this.state, this.state.exceptions))
        }else if (newdisplayValue === "ARDS") {

            this.setState({
                displayValue: newdisplayValue,
                data: ards,
                age: false,
            }, () => this.calculateCount(this.state.data, this.state, this.state.exceptions.filter(factor => {
                return ["astNoState", "astYesState"].includes(factor.stateName)
            })))
        } else {
            this.setState({
                displayValue: newdisplayValue,
                data: ardsDeath,
                age: false,
            }, () => this.calculateCount(this.state.data, this.state, []))
        }
    }

    displaySorted = (data) => {        
        let newBasicArray = [...data]
        let newArr = []
        let excludedArr = []
        for (let i = 0; i < newBasicArray.length; i++) {
            if (this.state[newBasicArray[i]["stateName"]]) {
                if (newBasicArray[i]["ratio"] === "Excluded" || newBasicArray[i]["ratio"] === "Insignificant") {
                    excludedArr = [...excludedArr, newBasicArray[i]]
                }
                else {
                    newArr = [...newArr, newBasicArray[i]]
                }
            } else {
                newArr = [...newArr, newBasicArray[i]]
            }
        }
        const sortedArr = [...newArr, ...excludedArr]
        return sortedArr
    }


    calculateCount = (data, state, exceptions) => {
        //calculates the count every time a study renders based on the current state
        let count = 0
        data[0][1].map(factor => {
            return count = count + (state[factor.stateName] ? factor.points : 0)
        })
        data[1][1].map(factor => {
            return count = count + (state[factor.stateName] ? factor.points : 0)
        })
        exceptions.map(factor => {
            return count = count + (state[factor.stateName] ? factor.points : 0)
        })
        this.setState({
            counter: count
        })
    }

    numberOfLabs = () => {
        // debugger
        let basicNumber = this.state.data[0][1].filter(object => !object.ratio.includes("Excluded") && !object.ratio.includes("Insignificant")).length
        
        let advancedNumber = this.state.data[1][1].filter(object => !object.ratio.includes("Excluded") && !object.ratio.includes("Insignificant")).length
        
        let sum = basicNumber + advancedNumber
        
        return sum
    }

    render() {
        let { counter, displayValue, data, exceptions } = this.state

        return (
            <main>
                <SortContainer
                    handleDisplay={this.handleDisplay}
                    counter={counter}
                    selected={displayValue}
                    sum={this.numberOfLabs()}
                />
                <FormContainer
                    basicData={this.displaySorted(data[0][1])}
                    advancedData={this.displaySorted(data[1][1])}
                    handleClick={this.handleClick}
                    state={this.state}
                    exceptions={exceptions}
                />
            </main>
        )
    }
}

export default MainContainer

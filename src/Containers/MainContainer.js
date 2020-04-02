import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath, icu } from '../data.js'

export class MainContainer extends Component {

    state = {
        displayValue: "ICU",
        counter: 1,
        data: icu,
        hypertension: false,
        exceptions: [],
        age: true,
        covidExposure: false,
        diabetes: false,
        cad: false,
        dyspnea: false,
        temp: false,
        sofa: false,
        leuko: false,
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
        alt40Yes: false,
        alt40No: false,
        astYes: false,
        astNo: false,
        dyspneaYes: false,
        dyspneaNo: false,
        leukoYes: false,
        leukoNo: false,
        ddimerYes: false,
        ddimerNo: false,
        ferritinYes: false,
        ferritinNo: false,
        ldhYes: false,
        ldhNo: false,
        ptYes: false,
        ptNo: false,
        crYes: false,
        crNo: false,
        hstropYes: false,
        hstropNo: false,
        tempYes: false,
        tempNo: false,
        ageYes: false,
        ageNo: false,
        procalYes: false,
        procalNo: false
    }

    setColor = (ratio, stateName, protective = false) => {
        let bgcolor = "white"

        if (this.state[stateName]) {
            switch (ratio) {
                case "?":
                    break
                case "Insignificant":
                case "Excluded":
                    bgcolor = "lightgrey"
                    break
                default:
                    bgcolor = protective ? "lightgreen" : "lightcoral"
            }
        }
        return bgcolor
    }

    handleYNClick = (title, value) => {
        console.log("title", title)
        console.log("value", value)
        // 1. add in state: dyspnea, dyspneaYes, dyspneaNo
        // - dyspnea is there to retain the clickability across the tabs
        // - dyspneaYes and dyspneaNo are there to track what was clicked; they need to reset across tabs
        // 2. pass this method down as props and hook it up to the rows that have y/n
        // 3. write conditional for the first click that only updates the state, test with console.log
        // 4. write the second-level conditional to check what was clicked before that only updates the state, test with console.log
        // 5. click through
        // 6.  add yes and no points to dyspnea: !!! I AM CHANGING DYSPNEA IN ICU in data.js!!!!
        // 7. find the element
        // 8. add/deduct points logic
        // 9. click through

        let yes = title + "Yes";
        let no = title + "No";
        let points;
        let element = this.state.data[0][1].find(element => element.stateName === title) || this.state.data[1][1].find(element => element.stateName === title)
        // debugger       

        if (value === "Y") {
            // this is if the person first clicked no and wants to change the answer 
            points = (element.pointsNo * -1) + element.pointsYes
            if (this.state[no] === true) {
                this.setState(prevState => {
                    return {
                        [title]: true,
                        [yes]: true,
                        [no]: false,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
                // now, this else if unclicks the earlier clicked yes
            } else if (this.state[yes] === true) {
                points = element.pointsYes * -1
                this.setState(prevState => {
                    return {
                        [title]: false,
                        [yes]: false,
                        [no]: false,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
                // and this is when they choose yes the first time
            } else if (this.state[yes] === false) {
                points = element.pointsYes
                this.setState(prevState => {
                    return {
                        [title]: true,
                        [yes]: true,
                        [no]: false,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
            } else {
                console.log("problem with the conditional on Y branch");
            }
        } else if (value === "N") {
            // this is when the person wants to unclick earlier-clicked no
            if (this.state[no] === true) {
                points = element.pointsNo * -1
                this.setState(prevState => {
                    return {
                        [title]: false,
                        [yes]: false,
                        [no]: false,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
                // now, this else if changes the answer from yes to no
            } else if (this.state[yes] === true) {
                points = (element.pointsYes * -1) + element.pointsNo
                this.setState(prevState => {
                    return {
                        [title]: true,
                        [yes]: false,
                        [no]: true,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
                // and this is when they choose no the first time
            } else if (this.state[yes] === false) {
                points = element.pointsNo
                this.setState(prevState => {
                    return {
                        [title]: true,
                        [yes]: false,
                        [no]: true,
                        counter: prevState.counter + points
                    }
                }, () => console.log(`state of ${title}`, this.state[title], `state of ${no}`, this.state[no], `state of ${yes}`, this.state[yes]))
            } else {
                console.log("problem with the conditional on N branch");
            }
        }
    }

    handleClick = (title, value) => {
        let newStateObject;
        let stateKeyToUpdate;
        let points;

        // what code below does:
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
            // } else {
            //     stateKeyToUpdate = this.state.exceptions
            //     //logic to handle clicking and unclicking of exceptions
            //     newStateObject = stateKeyToUpdate.map(element => {
            //         if (element.stateName === title) {
            //             if (value[0] === false) {
            //                 points = element.points
            //             } else {
            //                 points = element.points * -1
            //             }
            //             return element
            //         } else {
            //             return element
            //         }
            //     })
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
        } else if (newdisplayValue === "ARDS") {

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
        // exceptions.map(factor => {
        //     return count = count + (state[factor.stateName] ? factor.points : 0)
        // })
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
                    handleYNClick={this.handleYNClick}
                    state={this.state}
                    setColor={this.setColor}
                // exceptions={exceptions}
                />
            </main>
        )
    }
}

export default MainContainer

import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import Button from 'react-bootstrap/Button'
import StudyLegend from '../Components/StudyLegend'
import { ardsStudy, mortalityStudy, icuStudy } from '../studies.js'
import { mortality, ards, ardsDeath, icu } from '../data.js'

export class MainContainer extends Component {

    state = {
        showStudyLegend: true,
        showHowTo: true,
        displayValue: "ICU",
        counter: 0,
        data: icu,
        hypertension: false,
        age: false,
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


    prepareProps = () => {
        let { selected } = this.props
        if (selected === "Mortality") {
            return mortalityStudy
        } else if (selected === "ICU") {
            return icuStudy
        } else {
            return ardsStudy
        }
    }

    toggleShow = (componentName) => {
        let slug = "show" + componentName

        this.setState(prevState => {
            return {
                [slug]: !prevState[slug]
            }
        })
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
        let points;
        // what code below does:
        // 1. check if:
        // - the value is false or undefined, in which case set the points;
        // - the value is ok, and then deduct points
        // - if the points are undefined, points equal 0
        // 2. setState with the points

        const element = this.state.data.flat().flat().find(element => element.stateName === title)
        if (value[0] === false || value[0] === "undefined") { //it's been clicked
            if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                points = 0
            } else {
                points = element.points
            }
        } else { //unclicked
            if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                points = 0
            } else { //its child is clicked
                if (this.state[title + "Yes"]) {
                    points = element.pointsYes * -1
                }
                else if (this.state[title + "No"]) {
                    points = element.pointsNo * -1
                }
                else {
                    points = element.points * -1
                }
            }
        }

        if (isNaN(points)) {
            points = 0
        }

        this.setState(prevState => {
            return {
                [title + "Yes"]: prevState[title + "Yes"] && !prevState[title], //changes the child's state based on the parent's
                [title + "No"]: prevState[title + "No"] && !prevState[title],
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
            }, () => this.calculateCount(this.state.data, this.state, ["dyspneaYes", "leukoYes", "ddimerYes", "ferritinYes", "ldhYes", "ptYes", "crYes", "hstropYes", "alt40Yes"]))
        } else if (newdisplayValue === "ICU") {
            this.setState({
                displayValue: newdisplayValue,
                data: icu,
            }, () => this.calculateCount(this.state.data, this.state, ["procalYes"]))
        } else if (newdisplayValue === "ARDS") {

            this.setState({
                displayValue: newdisplayValue,
                data: ards,
            }, () => this.calculateCount(this.state.data, this.state, ["ageYes", "tempYes", "astYes"]))
        } else {
            this.setState({
                displayValue: newdisplayValue,
                data: ardsDeath,
            }, () => this.calculateCount(this.state.data, this.state, ["ageYes", "ardsDeath_tempYes", "astYes"]))
        }
    }

    calculateCount = (data, state, secondaryStates) => {
        //calculates the count every time a study renders based on the current state
        let count = 0
        data[0][1].map(factor => {
            return count = count + (state[factor.stateName] ? factor.points : 0)
        })
        data[1][1].map(factor => {
            return count = count + (state[factor.stateName] ? factor.points : 0)
        })
        secondaryStates.map(factor => {
            if (factor === "ardsDeath_tempYes") { //hack to account for ARDS Death, Fever points = -1
                return count = count + (state["tempYes"] ? -1 : 0)
            }
            else {
                return count = count + (state[factor] ? 1 : 0)
            }
        })
        this.setState({
            counter: count
        })
    }

    numberOfLabs = () => {
        let basicNumber = this.state.data[0][1].filter(object => !object.ratio.includes("Excluded") && !object.ratio.includes("Insignificant")).length

        let advancedNumber = this.state.data[1][1].filter(object => !object.ratio.includes("Excluded") && !object.ratio.includes("Insignificant")).length

        let sum = basicNumber + advancedNumber

        return sum
    }

    render() {
        let { counter, displayValue, data } = this.state

        return (
            <main>
                <SortContainer
                    handleDisplay={this.handleDisplay}
                    counter={counter}
                    selected={displayValue}
                    sum={this.numberOfLabs()}
                    toggleShow={this.toggleShow}
                    showHowTo={this.state.showHowTo}
                />
                <FormContainer
                    basicData={data[0][1]}
                    advancedData={data[1][1]}
                    handleClick={this.handleClick}
                    handleYNClick={this.handleYNClick}
                    state={this.state}
                    setColor={this.setColor}
                />
                {
                    this.state.showStudyLegend
                        ?
                        <>
                            <StudyLegend study={this.prepareProps()} />
                            <Button variant="link" onClick={() => this.toggleShow("StudyLegend")}>Hide Legend</Button>
                        </>
                        :
                        <div>
                            <Button variant="link" onClick={() => this.toggleShow("StudyLegend")}>Show Legend</Button>
                        </div>
                }
            </main>
        )
    }
}

export default MainContainer

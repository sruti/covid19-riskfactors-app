import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
    }

    handleSort = (newSortValue) => {
        this.setState({
            sortValue: newSortValue
        })
    }

    displaySorted = () => {
        let { sortValue } = this.state
        // sorted from the highest to the lowest value

        if (sortValue === "Mortality") {
            return [
                {"basic": [
                    { "state": "cad", "title": "CAD", "ratio": "OD 21.40" },
                    { "state": "rr24", "title": "RR>24", "ratio": "OR 8.89" },
                    { "state": "hypertension", "title": "Hypertension", "ratio": "OR 3.05" },
                    { "state": "diabetes", "title": "Diabetes", "ratio": "OR 2.85" },
                    { "state": "age", "title": "Age (>/=65yr)", "ratio": "OR 1.10" },
                    { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "" },
                    { "state": "temp", "title": "Temp. >/= 39C", "ratio": "Excluded" }
                ]},
                {"advanced": [
                    { "state": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "OR 80.07" },
                    { "state": "ldh", "title": "LDH >245", "ratio": "OR 45.43" },
                    { "state": "ast", "title": "AST/ALT (U/L)", "ratio": ">40 OR 2.87" },
                    { "state": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "OR 18.42" },
                    { "state": "procal", "title": "Elevated Procalcitonin <0.1", "ratio": "OR 13.75" },
                    { "state": "neutro", "title": "Neutrophilia", "ratio": "? Leukocytosis >10 (OR 6.60)" },
                    { "state": "sofa", "title": "Elevated SOFA", "ratio": "OR 5.65" },
                    { "state": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR 4.62" },
                    { "state": "pt", "title": "PT >/= 16", "ratio": "OR 4.62" },
                    { "state": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "" },
                    { "state": "plateles", "title": "Low Platelets", "ratio": "" },
                    { "state": "albumin", "title": "Elevated Albumin (g/L)", "ratio": "" },
                    { "state": "plateles", "title": "Low Platelets", "ratio": "" },
                    { "state": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "" },
                    { "state": "bilirubin", "title": "Elevated Total Bilirubin", "ratio": "" },
                    { "state": "urea", "title": "Elevated Urea", "ratio": "" },
                    { "state": "glucose", "title": "Elevated Glucose", "ratio": "" },
                ]}
            ]
        } else if (sortValue === "ARDS") {
            return [
                {"basic": [
                    { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 3.26" },
                    { "state": "diabetes", "title": "Diabetes", "ratio": "HR 2.34" },
                    { "state": "hypertension", "title": "Hypertension", "ratio": "HR 1.82"},
                    { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 1.77" },
                    { "state": "rr24", "title": "RR>24", "ratio": "" }, 
                    { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
                    { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
                ]},
                {"advanced": [

                ]}
            ]
        } else {
            return [
                {"basic": [
                    { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 6.17" },
                    { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 0.41" },
                    { "state": "hypertension", "title": "Hypertension", "ratio": "Insignificant" },
                    { "state": "diabetes", "title": "Diabetes", "ratio": "Insignificant" },
                    { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
                    { "state": "rr24", "title": "RR>24", "ratio": "Insignificant" },
                    { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
                ]},
                {"advanced": [
                    
                ]}
            ]
        }
    }

    render() {
        return (
            <main>
                {/* MAIN CONT */}
                <SortContainer handleSort={this.handleSort} />
                <FormContainer data={this.displaySorted()} />
            </main>
        )
    }
}

export default MainContainer

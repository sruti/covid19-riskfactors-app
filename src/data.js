const mortality = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "OR 1.10", "ratioTitle": "1.10x per unit↑" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "?", "ratioTitle": "" }, //special case
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*", "ratioTitle": "*3.05x per unit↑" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*", "ratioTitle": "*2.85x per unit↑" },
            { "stateName": "cad", "title": "CAD", "ratio": "OR 21.40*", "ratioTitle": "*21.40x per unit↑" }, //what is it??
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65", "ratioTitle": "5.56x per unit↑" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "?" }, //?Leukocytosis >10 (OR 6.60*)
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "OR 18.42", "ratioTitle": "18.42x per unit↑" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "OR 45.43*", "ratioTitle": "*45.43x per unit↑" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "OR 13.75*", "ratioTitle": "*13.75x per unit↑" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "OR 4.39*", "ratioTitle": "*4.39x per unit↑" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "OR 80.07*", "ratioTitle": "*80.07x per unit↑" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "ast", "title": "AST/ALT (U/L)", "ratio": "ALT >40", "ratioTitle": "ALT >40" },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "Excluded", "ratioTitle": "Excluded" },
        ]
    }
]

const ards = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "HR 3.26", "ratioTitle": "3.26x chance" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "P <0.05", "ratioTitle": "p <0.05" },
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "HR 1.77", "ratioTitle": "77% ↑" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82", "ratioTitle": "82% ↑" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34", "ratioTitle": "2.34x chance" },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "HR 1.14", "ratioTitle": "14% ↑" },
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "HR 0.37", "ratioTitle": "63% ↓" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.03", "ratioTitle": "3% ↑" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "HR 3.53", "ratioTitle": "3.53x chance" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "HR 1.61", "ratioTitle": "61% ↑" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "HR 1.56", "ratioTitle": "56% ↑" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "HR 4.81", "ratioTitle": "4.81x chance" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.49", "ratioTitle": "51% ↓" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.05", "ratioTitle": "5% ↑" },
            { "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "AST HR 1.02", "ratioTitle": "2% ↑" },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "HR 1.13", "ratioTitle": "13% ↑" }, //this one is white in the diagram  
        ]
    }
]

const ardsDeath = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "HR 6.17", "ratioTitle": "6.17x chance" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "HR 0.41", "ratioTitle": "59% ↓" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "HR 1.08", "ratioTitle": "8% ↑" },
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.02", "ratioTitle": "2% ↑" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "HR 3.53", "ratioTitle": "6.17x chance" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "HR 1.30", "ratioTitle": "30% ↑" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "HR 1.08", "ratioTitle": "8% ↑" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded", "ratioTitle": "Excluded" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.19", "ratioTitle": "81% ↓" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.07", "ratioTitle": "7% ↑" },
            { "stateName": "ast", "title": "AST/ALT (U/L)", "ratio": "p <0.05", "ratioTitle": "p <0.05" }, //this one is white
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
        ]
    }]

const rr24Yes = { "stateName": "rr24Yes", "title": "RR>24", "ratio": "OR 8.89*", "ratioTitle": "*8.89x per unit↑" }

const rr24No = { "stateName": "rr24No", "title": "RR<24", "ratio": "Insignificant", "ratioTitle": "Insignificant" }

const leukocytosisYes = { "stateName": "leukocytosisYes", "title": "Leukocytosis >10", "ratio": "OR 6.60*", "ratioTitle": "*6.60x per unit↑" }

const leukocytosisNo = { "stateName": "leukocytosisNo", "title": "Leukocytosis <10", "ratio": "Insignificant", "ratioTitle": "Insignificant" }

export { ards, ardsDeath, mortality, rr24Yes, rr24No, leukocytosisNo, leukocytosisYes }
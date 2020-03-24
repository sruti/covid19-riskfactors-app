const mortality = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "OR 1.10" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "P <0.05" },
            { "stateName": "rr24", "title": "RR>24", "ratio": "OR 8.89*" },
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "Excluded" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*" },
            { "stateName": "cad", "title": "CAD", "ratio": "OD 21.40*" },
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "?" }, //?Leukocytosis >10 (OR 6.60*)
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "P <0.05" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "OR 18.42" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR 4.62*" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "OR 45.43*" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "P <0.05" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "OR 4.62*" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "OR 13.75*" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "OR 4.39*" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "OR 80.07*" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Excluded" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "P <0.05" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "Excluded" },
            { "stateName": "ast", "title": "AST/ALT (U/L)", "ratio": "ALT >40" },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "Excluded" },
        ]
    }
]

const ards = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "HR 3.26" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
            { "stateName": "rr24", "title": "RR>24", "ratio": "?" }, // ?dyspnea (green)
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "HR 1.77" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34" },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant" },
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "HR 1.14" },
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "HR 0.37" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.03" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR HR 3.53" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "HR 1.61" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "HR 1.56" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "HR 4.81" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.49" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.05" },
            { "stateName": "ast", "title": "AST/ALT (U/L)", "ratio": "AST HR 1.02" },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "HR 1.13" }, //this one is white in the diagram  
        ]
    }
]

const ardsDeath = [
    {
        "basic": [
            { "stateName": "age", "title": "Age (>/=65yr)", "ratio": "HR 6.17" },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
            { "stateName": "rr24", "title": "RR>24", "ratio": "Insignificant" },
            { "stateName": "temp", "title": "Temp >/= 39C (102.2F)", "ratio": "HR 0.41" },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "Insignificant" },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "Insignificant" },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant" },
        ]
    },
    {
        "advanced": [
            { "stateName": "sofa", "title": "SOFA", "ratio": "Excluded" },
            { "stateName": "neutro", "title": "Neutrophilia", "ratio": "HR 1.08" },
            { "stateName": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "Insignificant" },
            { "stateName": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.02" },
            { "stateName": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "HR 3.53" },
            { "stateName": "ldh", "title": "LDH >245", "ratio": "HR 1.30" },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant" },
            { "stateName": "pt", "title": "PT >/= 16", "ratio": "HR 1.08" },
            { "stateName": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded" },
            { "stateName": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant" },
            { "stateName": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded" },
            { "stateName": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Insignificant" },
            { "stateName": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.19" },
            { "stateName": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.07" },
            { "stateName": "ast", "title": "AST/ALT (U/L)", "ratio": "P <0.05" }, //this one is white
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13" },
            { "stateName": "glucose", "title": "↑ Glucose", "ratio": "Insignificant" },
        ]
    }]

    const dyspneaYes = { "stateName": "dyspneaYes", "title": "Dyspnea", "ratio": "p=<0.05" }

    const dyspneaNo = { "stateName": "dyspneaNo", "title": "No dyspnea", "ratio": "Insignificant" }

    const leukocytosisYes = { "stateName": "leukocytosisYes", "title": "Leukocytosis >10", "ratio": "OR 6.60*" }

    const leukocytosisNo = { "stateName": "leukocytosisNo", "title": "Leukocytosis <10", "ratio": "Insignificant" }

export { ards, ardsDeath, mortality, dyspneaYes, dyspneaNo, leukocytosisNo, leukocytosisYes }
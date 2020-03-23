const mortality = [
    {
        "basic": [
            { "state": "cad", "title": "CAD", "ratio": "OD 21.40" },
            { "state": "rr24", "title": "RR>24", "ratio": "OR 8.89" },
            { "state": "hypertension", "title": "Hypertension", "ratio": "OR 3.05" },
            { "state": "diabetes", "title": "Diabetes", "ratio": "OR 2.85" },
            { "state": "age", "title": "Age (>/=65yr)", "ratio": "OR 1.10" },
            { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "P <0.05" },
            { "state": "temp", "title": "Temp. >/= 39C", "ratio": "Excluded" }
        ]
    },
    {
        "advanced": [
            { "state": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "OR 80.07" },
            { "state": "ldh", "title": "LDH >245", "ratio": "OR 45.43" },
            { "state": "ast", "title": "AST/ALT (U/L)", "ratio": ">40 OR 2.87" },
            { "state": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "OR 18.42" },
            { "state": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "OR 13.75" },
            { "state": "neutro", "title": "Neutrophilia", "ratio": "? Leukocytosis >10 (OR 6.60)" },
            { "state": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65" },
            { "state": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR 4.62" },
            { "state": "pt", "title": "PT >/= 16", "ratio": "OR 4.62" },
            { "state": "cr", "title": "Cr >133 umol/L", "ratio": "OR 4.3" },
            { "state": "plateles", "title": "Low Platelets", "ratio": "P <0.05" },
            { "state": "albumin", "title": "↑ Albumin (g/L)", "ratio": "P <0.05" },
            { "state": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "P <0.05" },
            { "state": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Excluded" },
            { "state": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "Excluded" },
            { "state": "urea", "title": "↑ Urea", "ratio": "Excluded" },
            { "state": "glucose", "title": "↑ Glucose", "ratio": "Excluded" },
        ]
    }
]

const ards = [
    {
        "basic": [
            { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 3.26" },
            { "state": "diabetes", "title": "Diabetes", "ratio": "HR 2.34" },
            { "state": "hypertension", "title": "Hypertension", "ratio": "HR 1.82" },
            { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 1.77" },
            { "state": "rr24", "title": "RR>24", "ratio": "P <0.05" },
            { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
            { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
        ]
    },
    {
        "advanced": [
            { "state": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "HR 4.81" },
            { "state": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR HR 3.53" },
            { "state": "ldh", "title": "LDH >245", "ratio": "HR 1.61" },
            { "state": "pt", "title": "PT >/= 16", "ratio": "HR 1.56" },
            { "state": "neutro", "title": "Neutrophilia", "ratio": "HR 1.14" },
            { "state": "urea", "title": "↑ Urea", "ratio": "HR 1.13" },
            { "state": "glucose", "title": "↑ Glucose", "ratio": "HR 1.13" }, //this one is white in the diagram
            { "state": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.05" },
            { "state": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.03" },
            { "state": "ast", "title": "AST/ALT (U/L)", "ratio": "AST HR 1.02" },
            { "state": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.49" },
            { "state": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "HR 0.37" },
            { "state": "sofa", "title": "↑ SOFA", "ratio": "Excluded" },
            { "state": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded" },
            { "state": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded" },
            { "state": "plateles", "title": "Low Platelets", "ratio": "Insignificant" },
            { "state": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant" },
        ]
    }
]

const ardsDeath = [
    {
        "basic": [
            { "state": "age", "title": "Age (>/=65yr)", "ratio": "HR 6.17" },
            { "state": "temp", "title": "Temp. >/= 39C", "ratio": "HR 0.41" },
            { "state": "hypertension", "title": "Hypertension", "ratio": "Insignificant" },
            { "state": "diabetes", "title": "Diabetes", "ratio": "Insignificant" },
            { "state": "cad", "title": "CAD", "ratio": "Insignificant" },
            { "state": "rr24", "title": "RR>24", "ratio": "Insignificant" },
            { "state": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded" },
        ]
    },
    {
        "advanced": [
            { "state": "ferritin", "title": "Ferritin >300 ug/L", "ratio": "OR HR 3.53" },
            { "state": "ldh", "title": "LDH >245", "ratio": "HR 1.30" },
            { "state": "albumin", "title": "↑ Albumin (g/L)", "ratio": "HR 0.19" },
            { "state": "urea", "title": "↑ Urea", "ratio": "HR 1.13" },
            { "state": "pt", "title": "PT >/= 16", "ratio": "HR 1.08" },
            { "state": "neutro", "title": "Neutrophilia", "ratio": "HR 1.08" },
            { "state": "bilirubin", "title": "↑ Total Bilirubin", "ratio": "HR 1.07" },
            { "state": "ddimer", "title": "D-Dimer >1 ug/ml", "ratio": "HR 1.02" },
            { "state": "ast", "title": "AST/ALT (U/L)", "ratio": "P <0.05" }, //this one is white
            { "state": "procal", "title": "↑ Procalcitonin <0.1", "ratio": "Excluded" },
            { "state": "hstrop", "title": "hs-Trop >28 pg/ml", "ratio": "Excluded" },
            { "state": "lympho", "title": "Lymphopenia (Abs <0.8)", "ratio": "Insignificant" },
            { "state": "plateles", "title": "Low Platelets", "ratio": "Insignificant" },
            { "state": "cr", "title": "Cr >133 umol/L", "ratio": "Insignificant" },
            { "state": "hscrp", "title": "hs-CRP >5 mg/L", "ratio": "Insignificant" },
            { "state": "glucose", "title": "↑ Glucose", "ratio": "Insignificant" },
        ]
    }]

export { ards, ardsDeath, mortality }
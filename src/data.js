const mortality = [
    [
        "basic", [
            { "stateName": "age", "title": "Age", "ratio": "OR 1.10", "ratioTitle": "1.10x per unit↑", "points": 1, "showing": false, "importance": 7 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1, "showing": false, "importance": 6 },
            {
                "stateName": "dyspnea", "title": "Dyspnea", "ratio": "?", "ratioTitle": "", "points": 0, "showing": false, "importance": 5,
                "secondaryQuestion": { "stateName": "rr24YesState", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "*8.89x per unit↑", "points": 1, "showing": false }
            }, //special case
            { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false, "importance": 4 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*", "ratioTitle": "*3.05x", "points": 1, "showing": false, "importance": 3 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*", "ratioTitle": "*2.85x", "points": 1, "showing": false, "importance": 2 },
            { "stateName": "cad", "title": "CAD", "ratio": "OR 21.40*", "ratioTitle": "*21.40x", "points": 1, "showing": false, "importance": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65", "ratioTitle": "5.56x per unit↑", "points": 1, "showing": false },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1, "showing": false },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "OR 6.60*", "ratioTitle": "*6.60x per unit↑", "points": 1, "showing": false },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "OR 18.42", "ratioTitle": "18.42x per unit↑", "points": 1, "showing": false },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑", "points": 1, "showing": false },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "OR 45.43*", "ratioTitle": "*45.43x per unit↑", "points": 1, "showing": false },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1, "showing": false },
            { "stateName": "pt", "title": "↑ PT", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑", "points": 1, "showing": false },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "OR 13.75*", "ratioTitle": "*13.75x per unit↑", "points": 1, "showing": false },
            { "stateName": "cr", "title": "↑ Creatinine", "ratio": "OR 4.39*", "ratioTitle": "*4.39x per unit↑", "points": 1, "showing": false },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "OR 80.07*", "ratioTitle": "*80.07x per unit↑", "points": 1, "showing": false },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "p <0.05", "ratioTitle": "p <0.05 (protective)", "points": -1, "showing": false, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "alt40", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "showing": false, "points": 0 },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "OR 1.12", "ratioTitle": "1.12x per unit↑", "points": 1, "showing": false }
        ]
    ]
]

const ards = [
    [
        "basic", [
            { "stateName": "age", "title": "Age", "ratio": "HR 3.26", "ratioTitle": "3.26x chance", "points": 1, "showing": false },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "P <0.05", "ratioTitle": "p <0.05", "points": 1, "showing": false },
            { "stateName": "temp", "title": "Fever", "ratio": "HR 1.77", "ratioTitle": "77% ↑", "points": 1, "showing": false },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82", "ratioTitle": "82% ↑", "points": 1, "showing": false },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34", "ratioTitle": "2.34x chance", "points": 1, "showing": false },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "HR 0.37", "ratioTitle": "37% ↑", "points": 1, "showing": false },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 1, "showing": false },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.03", "ratioTitle": "3% ↑", "points": 1, "showing": false },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "3.53x chance", "points": 1, "showing": false },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.61", "ratioTitle": "61% ↑", "points": 1, "showing": false },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.56", "ratioTitle": "56% ↑", "points": 1, "showing": false },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.49", "ratioTitle": "51% ↓ (protective)", "points": -1, "showing": false, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.05", "ratioTitle": "5% ↑", "points": 1, "showing": false },
            { "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "showing": false, "points": 0 },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑", "points": 1, "showing": false },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 1, "showing": false }
        ]
    ]
]

const ardsDeath = [
    [
        "basic", [
            { "stateName": "age", "title": "Age", "ratio": "HR 6.17", "ratioTitle": "6.17x chance", "points": 1, "showing": false },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "temp", "title": "Fever", "ratio": "HR 0.41", "ratioTitle": "59% ↓ (protective)", "points": -1, "showing": false, "protective": true },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 1, "showing": false },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.02", "ratioTitle": "2% ↑", "points": 1, "showing": false },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "6.17x chance", "points": 1, "showing": false },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.30", "ratioTitle": "30% ↑", "points": 1, "showing": false },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.08", "ratioTitle": "8% ↑", "points": 1, "showing": false },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.19", "ratioTitle": "81% ↓ (protective)", "points": -1, "showing": false, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.07", "ratioTitle": "7% ↑", "points": 1, "showing": false },
            { "stateName": "astalt", "title": "↑ AST/ALT (U/L)", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1, "showing": false }, //this one is white
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑", "points": 1, "showing": false },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "HR 1.03", "ratioTitle": "3% ↑", "points": 1, "showing": false }
        ]
    ]]

const icu = [
    ["basic", [
        { "stateName": "age", "title": "Age", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1, "showing": false, "importance": 7 },
        { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false, "importance": 6 },
        { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1, "showing": false, "importance": 5 }, //special case
        { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false, "importance": 4 },
        { "stateName": "hypertension", "title": "Hypertension", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1, "showing": false, "importance": 3 },
        { "stateName": "diabetes", "title": "Diabetes", "ratio": "p=0.009", "ratioTitle": "p=0.009", "points": 1, "showing": false, "importance": 2 },
        { "stateName": "cad", "title": "CAD", "ratio": "p=0.04", "ratioTitle": "p=0.04", "points": 1, "showing": false, "importance": 1 },
    ]],
    ["advanced", [
        { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
        { "stateName": "lympho", "title": "Lymphopenia", "ratio": "p=0.03", "ratioTitle": "p=0.03", "points": 1, "showing": false },
        { "stateName": "leuko", "title": "Leukocytosis", "ratio": "p=0.003", "ratioTitle": "p=0.003", "points": 1, "showing": false },
        { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1, "showing": false },
        { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
        { "stateName": "ldh", "title": "↑ LDH", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1, "showing": false },
        { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
        { "stateName": "pt", "title": "↑ PT", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
        { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "?", "ratioTitle": "", "points": 0, "showing": false },
        { "stateName": "cr", "title": "↑ Creatinine", "ratio": "p=0.04", "ratioTitle": "p=0.04", "points": 1, "showing": false },
        { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "p=0.004", "ratioTitle": "p=0.004", "points": 1, "showing": false },
        { "stateName": "albumin", "title": "↑ Albumin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false, "protective": true },
        { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "p=0.02", "ratioTitle": "p=0.02", "points": 1, "showing": false },
        { "stateName": "alt40", "title": "↑ AST/ALT (U/L)", "ratio": "p<0.05", "ratioTitle": "p<0.05", "showing": false, "points": 1 },
        { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false },
        { "stateName": "il6", "title": "↑ IL-6", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "showing": false }
    ]]
]

const exceptionObjects = [
    { "stateName": "rr24YesState", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "*8.89x per unit↑", "points": 1, "showing": false },
    { "stateName": "rr24NoState", "title": "RR <24", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
    { "stateName": "alt40YesState", "title": "ALT >40", "ratio": "OR 2.87*", "ratioTitle": "*2.87x per unit↑", "points": 1, "showing": false },
    { "stateName": "alt40NoState", "title": "ALT <40", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false },
    { "stateName": "astYesState", "title": "↑ AST", "ratio": "HR 1.02", "ratioTitle": "2% ↑", "points": 1, "showing": false },
    { "stateName": "astNoState", "title": "Not ↑ AST", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0, "showing": false }
]

export { ards, ardsDeath, mortality, exceptionObjects, icu }
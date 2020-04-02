const mortality = [
    [
        "basic", [
            { "stateName": "age", "title": "Age", "ratio": "OR 1.10", "ratioTitle": "1.10x per unit↑ ℹ", "points": 1 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "dyspnea", "title": "Dyspnea", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 24?",
                    "yes": { "stateName": "dyspneaYes", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "*8.89x per unit↑ ℹ" },
                    "no": { "stateName": "dyspneaNo", "title": "RR <24", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }

            }, //special case
            { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*", "ratioTitle": "*3.05x ℹ", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*", "ratioTitle": "*2.85x ℹ", "points": 1 },
            { "stateName": "cad", "title": "CAD", "ratio": "OR 21.40*", "ratioTitle": "*21.40x ℹ", "points": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "OR 5.65", "ratioTitle": "5.56x per unit↑ ℹ", "points": 1 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "leuko", "title": "Leukocytosis", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 10?",
                    "yes": { "stateName": "leukoYes", "title": "Leukocytosis", "ratio": "OR 6.60*", "ratioTitle": "*6.60x per unit↑ ℹ" },
                    "no": { "stateName": "leukoNo", "title": "Leukocytosis", "ratio": "Insignificant", "ratioTitle": "Insignificant" },
                }
            },
            {
                "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 1 ug/ml?",
                    "yes": { "stateName": "ddimerYes", "ratio": "OR 18.42", "ratioTitle": "18.42x per unit↑ ℹ" },
                    "no": { "stateName": "ddimerNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 300 ug/L?",
                    "yes": { "stateName": "ferritinYes", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑ ℹ" },
                    "no": { "stateName": "ferritinNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "ldh", "title": "↑ LDH", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 245 U/L?",
                    "yes": { "stateName": "ldhYes", "ratio": "OR 45.43*", "ratioTitle": "*45.43x per unit↑ ℹ" },
                    "no": { "stateName": "ldhNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "p <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "pt", "title": "↑ PT", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 16s?",
                    "yes": { "stateName": "ptYes", "ratio": "OR 4.62*", "ratioTitle": "*4.62x per unit↑ ℹ" },
                    "no": { "stateName": "ptNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "OR 13.75*", "ratioTitle": " *13.75x per unit↑ ℹ", "points": 1 },
            {
                "stateName": "cr", "title": "↑ Creatinine", "ratio": "?", "ratioTitle": " *4.39x per unit↑ ℹ", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 133 umol/L?",
                    "yes": { "stateName": "crYes", "ratio": "OR 4.39*", "ratioTitle": " *4.39x per unit↑ ℹ" },
                    "no": { "stateName": "crNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            {
                "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "> 28 pg/ml?",
                    "yes": { "stateName": "hstropYes", "ratio": "OR 80.07*", "ratioTitle": "*80.07x per unit↑ ℹ " },
                    "no": { "stateName": "hstropNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "p <0.05", "ratioTitle": "p <0.05 (protective)", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            {
                "stateName": "alt40", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "ALT > 40?",
                    "yes": { "stateName": "alt40Yes", "ratio": "OR 2.87*", "ratioTitle": "*2.87x per unit↑ ℹ " },
                    "no": { "stateName": "alt40No", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "OR 1.12", "ratioTitle": "1.12x per unit↑ ℹ ", "points": 1 }
        ]
    ]
]

const ards = [
    [
        "basic", [
            {
                "stateName": "age", "title": "Age", "ratio": "?", "ratioTitle": "3.26x chance ℹ", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 65?",
                    "yes": { "stateName": "ageYes", "ratio": "HR 3.26", "ratioTitle": "3.26x chance ℹ" },
                    "no": { "stateName": "ageNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "P <0.05", "ratioTitle": "p <0.05", "points": 1 },
            {
                "stateName": "temp", "title": "Fever", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 39℃ (102.2℉)?",
                    "yes": { "stateName": "tempYes", "ratio": "HR 1.77", "ratioTitle": "77% ↑ ℹ " },
                    "no": { "stateName": "tempNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82", "ratioTitle": "82% ↑ ℹ ", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34", "ratioTitle": "2.34x chance ℹ ", "points": 1 },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "HR 0.37", "ratioTitle": "37% ↑ ℹ", "points": 1 },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.03", "ratioTitle": "3% ↑ ℹ", "points": 1 },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "3.53x chance ℹ", "points": 1 },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.61", "ratioTitle": "61% ↑ ℹ", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.56", "ratioTitle": "56% ↑ ℹ", "points": 1 },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.49", "ratioTitle": "51% ↓ (protective) ℹ", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.05", "ratioTitle": "5% ↑ ℹ", "points": 1 },
            {
                "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "↑ AST",
                    "yes": { "stateName": "astYes", "ratio": "HR 1.02", "ratioTitle": "2% ↑ ℹ" },
                    "no": { "stateName": "astNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑ ℹ", "points": 1 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 1 }
        ]
    ]
]

const ardsDeath = [
    [
        "basic", [
            {
                "stateName": "age", "title": "Age", "ratio": "?", "ratioTitle": "6.17x chance ℹ", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 65?",
                    "yes": { "stateName": "ageYes", "ratio": "HR 6.17", "ratioTitle": "6.17x chance ℹ" },
                    "no": { "stateName": "ageNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            {
                "stateName": "temp", "title": "Fever", "ratio": "HR 0.41", "ratioTitle": "", "points": 0, "protective": true, "pointsYes": -1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "≥ 39℃ (102.2℉)?",
                    "yes": { "stateName": "tempYes", "ratio": "HR 0.41", "ratioTitle": "59% ↓ (protective) ℹ", "protective": true },
                    "no": { "stateName": "tempNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "cad", "title": "CAD", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "leuko", "title": "Leukocytosis", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "HR 1.02", "ratioTitle": "2% ↑ ℹ", "points": 1 },
            { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "HR 3.53", "ratioTitle": "6.17x chance ℹ", "points": 1 },
            { "stateName": "ldh", "title": "↑ LDH", "ratio": "HR 1.30", "ratioTitle": "30% ↑ ℹ", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "pt", "title": "↑ PT", "ratio": "HR 1.08", "ratioTitle": "8% ↑ ℹ", "points": 1 },
            { "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "cr", "title": "Creatinine", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
            { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
            { "stateName": "albumin", "title": "↑ Albumin", "ratio": "HR 0.19", "ratioTitle": "81% ↓ (protective) ℹ", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "HR 1.07", "ratioTitle": "7% ↑ ℹ", "points": 1 },
            {
                "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "?", "ratioTitle": "p <0.05", "points": 0, "pointsYes": 1, "pointsNo": 0,
                "secondaryQuestion": {
                    "title": "↑ AST",
                    "yes": { "stateName": "astYes", "ratio": "p <0.05", "ratioTitle": "p <0.05" },
                    "no": { "stateName": "astNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
                }
            }, //this one is white
            { "stateName": "urea", "title": "↑ Urea", "ratio": "HR 1.13", "ratioTitle": "13% ↑ ℹ", "points": 1 },
            { "stateName": "il6", "title": "↑ IL-6", "ratio": "HR 1.03", "ratioTitle": "3% ↑ ℹ", "points": 1 }
        ]
    ]]

const icu = [
    ["basic", [
        { "stateName": "age", "title": "Age", "ratio": "66 (57-78) vs. 51 (37-62)", "ratioTitle": "p <0.001 ℹ", "points": 1 },
        { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        { "stateName": "dyspnea", "title": "Dyspnea", "ratio": "p <0.001", "ratioTitle": "p <0.001", "pointsYes": 1, "pointsNo": 0 }, //special case
        { "stateName": "temp", "title": "Fever", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "hypertension", "title": "Hypertension", "ratio": "p <0.001", "ratioTitle": "p <0.001", "points": 1 },
        { "stateName": "diabetes", "title": "Diabetes", "ratio": "p=0.009", "ratioTitle": "p=0.009", "points": 1 },
        { "stateName": "cad", "title": "CAD", "ratio": "p=0.04", "ratioTitle": "p=0.04", "points": 1 },
    ]],
    ["advanced", [
        { "stateName": "sofa", "title": "↑ SOFA", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "lympho", "title": "Lymphopenia", "ratio": "0.8 (0.5-0.9) vs. 0.9 (0.6-1.2)", "ratioTitle": "p=0.03 ℹ", "points": 1 },
        { "stateName": "leuko", "title": "Leukocytosis", "ratio": "p=0.003", "ratioTitle": "p=0.003", "points": 1 },
        { "stateName": "ddimer", "title": "↑ D-Dimer", "ratio": "414 (191-1324) vs. 166 (101-285)", "ratioTitle": "p <0.001 ℹ", "points": 1 },
        { "stateName": "ferritin", "title": "↑ Ferritin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "ldh", "title": "↑ LDH", "ratio": "435 (302-596) vs. 212 (171-291)", "ratioTitle": "p <0.001 ℹ", "points": 1 },
        { "stateName": "plateles", "title": "Low Platelets", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        { "stateName": "pt", "title": "↑ PT", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
        {
            "stateName": "procal", "title": "↑ Procalcitonin", "ratio": "?", "ratioTitle": "", "points": 0, "pointsYes": 1, "pointsNo": 0,
            "secondaryQuestion": {
                "title": "> 0.05 ng/ml?",
                "yes": { "stateName": "procalYes", "ratio": "p <0.001", "ratioTitle": "p <0.001" },
                "no": { "stateName": "procalNo", "ratio": "Insignificant", "ratioTitle": "Insignificant" }
            }
        },
        { "stateName": "cr", "title": "↑ Creatinine", "ratio": "80 (66-106) vs. 71 (58-84)", "ratioTitle": "p=0.04 ℹ", "points": 1 },
        { "stateName": "hstrop", "title": "↑ hs-Trop", "ratio": "11.0 (5.6-26.4) vs. 5.1 (2.1-9.8)", "ratioTitle": "p=0.004 ℹ", "points": 1 },
        { "stateName": "albumin", "title": "↑ Albumin", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0, "protective": true },
        { "stateName": "bilirubin", "title": "↑ Bilirubin", "ratio": "11.5 (9.6-18.6) vs. 9.3 (8.2-12.8)", "ratioTitle": "p=0.02 ℹ", "points": 1 },
        { "stateName": "ast", "title": "↑ AST/ALT (U/L)", "ratio": "p<0.05", "ratioTitle": "p<0.05", "points": 1 },
        { "stateName": "urea", "title": "↑ Urea", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 },
        { "stateName": "il6", "title": "↑ IL-6", "ratio": "Excluded", "ratioTitle": "Excluded", "points": 0 }
    ]]
]

// const exceptionObjects = [
//     { "stateName": "rr24YesState", "title": "RR >24", "ratio": "OR 8.89*", "ratioTitle": "ℹ *8.89x per unit↑", "points": 1 },
//     { "stateName": "rr24NoState", "title": "RR <24", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
//     { "stateName": "alt40YesState", "title": "ALT >40", "ratio": "OR 2.87*", "ratioTitle": "ℹ *2.87x per unit↑", "points": 1 },
//     { "stateName": "alt40NoState", "title": "ALT <40", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 },
//     { "stateName": "astYesState", "title": "↑ AST", "ratio": "HR 1.02", "ratioTitle": "ℹ 2% ↑", "points": 1 },
//     { "stateName": "astNoState", "title": "Not ↑ AST", "ratio": "Insignificant", "ratioTitle": "Insignificant", "points": 0 }
// ]

export { ards, ardsDeath, mortality, icu }
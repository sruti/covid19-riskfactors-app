const mortalityStudy = {
    "ratios": "Middle column derived from Odds Ratios",
    "ratiosEx": "OR 1.10 = 1.10x greater chance of mortality per unit increase",
    "info": "*Univariate analysis only.",
    "citation": "Zhou F, Yu T, Du R, Fan G, Liu Y, Liu Z, Xiang J, Wang Y, Song B, Gu X, Guan L. Clinical course and risk factors for mortality of adult inpatients with COVID-19 in Wuhan, China: a retrospective cohort study. The Lancet. 2020 Mar 11.",
    "comment": "Some labs were excluded because of low power and rarity of use, including CD3, CD4, CD8, Globulin, Pre-albumin, Cystatin, Alpha-HBDH, LDL, Cholinesterase, and Ck-MB. The authors only performed a multivariate analysis on factors that they believed would be available in an emergency setting."
}

const ardsStudy = {
    "ratios": "Middle column derived from Hazard Ratios (Bivariate Cox Regression Analysis)",
    "ratiosEx": "HR 3.26 = 3.26x chance of developing ARDS. HR 1.77 = 77% increased chance.",
    "citation": "Wu C, Chen X, Cai Y, Zhou X, Xu S, Huang H, Zhang L, Zhou X, Du C, Zhang Y, Song J. Risk Factors Associated With Acute Respiratory Distress Syndrome and Death in Patients With Coronavirus Disease 2019 Pneumonia in Wuhan, China. JAMA Internal Medicine. 2020 Mar 13.",
    "comment": "Some labs were excluded because of low power and rarity of use, including CD3, CD4, CD8, Globulin, Pre-albumin, Cystatin, Alpha-HBDH, LDL, Cholinesterase, and Ck-MB"
}

const icuStudy = {
    "ratios": "T-test/Mann-Whitney for Continous Chi-Square for Categorical",
    "ratiosEx": "",
    "citation": "Wang D, Hu B, Hu C, Zhu F, Liu X, Zhang J, Wang B, Xiang H, Cheng Z, Xiong Y, Zhao Y. Clinical characteristics of 138 hospitalized patients with 2019 novel coronavirus–infected pneumonia in Wuhan, China. Jama. 2020 Feb 7.",
    "additionalReading": "Guan WJ, Ni ZY, Hu Y, Liang WH, Ou CQ, He JX, Liu L, Shan H, Lei CL, Hui DS, Du B. Clinical characteristics of coronavirus disease 2019 in China. New England Journal of Medicine. 2020 Feb 28.",
    "comment": "*some factors were excluded due to small (n)"
}

export { ardsStudy, mortalityStudy, icuStudy }
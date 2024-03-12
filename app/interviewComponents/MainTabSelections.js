'use client'
import { useMultiStepForm } from './useMultiStepTabs';
import React from 'react';



export default function MainTabSelections({Certifications, Technologies, Experience, Career, Clearance}){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([Career, Experience, Certifications, Technologies, Clearance, ])

    return <div className="grid">
        {CurrentStep}
        <button onClick={PrevStep}> Prev Step</button>
        <button onClick={NextStep}> Next Step</button>
    </div>
}
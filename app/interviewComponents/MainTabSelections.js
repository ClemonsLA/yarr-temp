'use client'
import { useMultiStepForm } from './useMultiStepTabs';
import React from 'react';



export default function MainTabSelections({Certifications, Technologies, Experience, Career}){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([Career, Experience, Certifications, Technologies, ])

    return <div className="grid">
        {CurrentStep}
        <button onClick={PrevStep}> Prev Step</button>
        <button onClick={NextStep}> Next Step</button>
    </div>
}
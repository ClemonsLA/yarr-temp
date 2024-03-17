'use client'
export const maxDuration = 300; // This function can run for a maximum of 5 seconds
export const dynamic = 'force-dynamic';
import React from 'react'

export function useMultiStepForm(arr){
    const [step, setStep] = React.useState(0);

    function NextStep(){
        setStep(step + 1);
    }

    function PrevStep(){
        setStep(step - 1)
    }

    return {
        NextStep,
        PrevStep,
        CurrentStep: arr[step],
    }
}
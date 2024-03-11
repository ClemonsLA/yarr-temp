'use client'
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
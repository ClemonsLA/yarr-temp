'use client'
import { useState } from 'react'

export function useMultiStepForm(arr){
    const [step, setStep] = useState(0);

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
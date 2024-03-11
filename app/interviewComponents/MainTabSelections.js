'use client'
import { useMultiStepForm } from './useMultiStepTabs';
import Link from 'next/link';



export default function MainTabSelections({Certifications, Technologies, Experience, Career}){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([Career, Experience, Certifications, Technologies, ])

    return <div className="grid">
        {CurrentStep}
        <button onClick={PrevStep}> Prev Step</button>
        <button onClick={NextStep}> Next Step</button>
        <Link href="/interview/clearance"> test</Link>
    </div>
}
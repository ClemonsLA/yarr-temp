'use client'
import {useState} from 'react'
import { useEffect } from 'react';
import { useMultiStepForm } from './useMultiStepTabs';
import Link from 'next/link';
import {usePathname} from "next/navigation";


export default function MainTabSelections({certifications, clearance, technologies, experience, career}){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([certifications, clearance, technologies, experience, career])

    return <div className="grid">
        {CurrentStep}
        <button onClick={PrevStep}> Prev Step</button>
        <button onClick={NextStep}> Next Step</button>
        <Link href="/interview/clearance"> test</Link>
    </div>
}
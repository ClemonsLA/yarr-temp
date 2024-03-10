'use client'
import {useState} from 'react'
import { useEffect } from 'react';
import { useMultiStepForm } from './useMultiStepTabs';
import Link from 'next/link';
import {usePathname} from "next/navigation";


export default function MainTabSelections({certifications, clearance}){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([certifications, clearance])

    return <div className="grid">
        {CurrentStep}
        <button onClick={PrevStep}> Prev Step</button>
        <button onClick={NextStep}> Next Step</button>
        <Link href="/interview/clearance"> test</Link>
    </div>
}
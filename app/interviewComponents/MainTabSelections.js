'use client'
import { useMultiStepForm } from './useMultiStepTabs';
import React from 'react';


export const maxDuration = 300; // This function can run for a maximum of 5 seconds
export const dynamic = 'force-dynamic';
export default function MainTabSelections({Certifications, Technologies, Experience, Career, Clearance, Review, }){
   
    const {NextStep, PrevStep, CurrentStep } = useMultiStepForm([Career, Experience, Certifications, Technologies, Clearance, Review, ])

    return <div className='relative h-[81vh]'>
                <div className='h-[76vh]'>
                {CurrentStep}
                </div>
                <div className='absolute inset-x-0 bottom-0 grid grid-cols-2 justify-between'>
                    <button onClick={PrevStep}>Previous</button>

                    <button onClick={NextStep}>Next</button>
                </div>

    </div>
}
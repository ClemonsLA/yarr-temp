'use client'
import React from "react"
import { Button } from '@nextui-org/button'
import { useFormState } from "react-dom"

export const maxDuration = 300;
export const dynamic = 'force-dynamic';
export default function SubmitArtButton({serverActionPropSubmitBut}){
    const [formState, setFormState] = useFormState(serverActionPropSubmitBut, 'ready')
    
    return <form action={()=>setFormState()}>
                <Button type="submit">Paint Career!</Button>
    </form>
}

/*  
 onPress={async ()=>serverActionPropSubmitBut()}
*/
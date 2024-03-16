"use client"
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox"
import React from "react";
import {useFormState} from "react-dom"
import {handleBuzzFormAction} from "@/app/actions/"
import { userDataTestRR } from "@/app/actions";


export default function App({buzzwords}) {
  const [groupSelected, setGroupSelected] = React.useState(buzzwords);
  const [techFormState, setTechFormState] = useFormState(handleBuzzFormAction, null)

  const fuckThisForm = (groupSelected) =>{
    setGroupSelected(groupSelected);
    setTechFormState(groupSelected);
  }

  return (
  
    <div className="flex flex-col gap-1 w-full">
      <form action={async ()=>setTechFormState()}>
      <CheckboxGroup
        className="gap-1"
        label="Select Your Tech-Stack"
        orientation="horizontal"
        value={groupSelected}
        onChange={fuckThisForm}
        name="tech"
      >
        
        <Checkbox value="Gitops">Gitops</Checkbox>
        <Checkbox value="Frontend">Frontend</Checkbox>
        <Checkbox value="Backend">Backend</Checkbox>
        <Checkbox value="Devops">Devops</Checkbox>
        <Checkbox value="Linux">Linux</Checkbox>
        <Checkbox value="K8s">K8s</Checkbox>
        
      </CheckboxGroup>
      </form>
    </div>
  
  );
}
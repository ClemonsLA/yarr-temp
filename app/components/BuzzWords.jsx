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
        label="Select amenities"
        orientation="horizontal"
        value={groupSelected}
        onChange={fuckThisForm}
        name="tech"
      >
        
        <Checkbox value="wifi">Wifi</Checkbox>
        <Checkbox value="tv">TV</Checkbox>
        <Checkbox value="kitchen">Kitchen</Checkbox>
        <Checkbox value="parking">Parking</Checkbox>
        <Checkbox value="pool">Pool</Checkbox>
        <Checkbox value="gym">Gym</Checkbox>
        
      </CheckboxGroup>
      </form>
      <button onClick={()=>userDataTestRR()}>test button</button>
    </div>
  
  );
}
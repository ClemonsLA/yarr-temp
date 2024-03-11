"use client"
import {CheckboxGroup} from "@nextui-org/checkbox"
import { Button } from "@nextui-org/button"
import { CustomCheckbox } from "./CustomCheckbox"
import {useState} from "react"
import {useFormState} from "react-dom"
import {handleBuzzFormAction} from "@/app/actions/"
import { userDataTestRR } from "@/app/actions";


export default function App({buzzwords}) {
  const [groupSelected, setGroupSelected] = useState(buzzwords);
  const [techFormState, setTechFormState] = useFormState(handleBuzzFormAction, new Array)

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
        
        <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
        <CustomCheckbox value="tv">TV</CustomCheckbox>
        <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
        <CustomCheckbox value="parking">Parking</CustomCheckbox>
        <CustomCheckbox value="pool">Pool</CustomCheckbox>
        <CustomCheckbox value="gym">Gym</CustomCheckbox>
        
      </CheckboxGroup>
      </form>
      <p className="mt-4 ml-1 text-default-500">
        Selected: {groupSelected.join(", ")}
      </p>
      <button onClick={()=>userDataTestRR()}>test button</button>
    </div>
  
  );
}
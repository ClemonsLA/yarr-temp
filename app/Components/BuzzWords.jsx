"use client"
import {CheckboxGroup} from "@nextui-org/checkbox"
import { Button } from "@nextui-org/button"
import { CustomCheckbox } from "./CustomCheckbox"
import {useState} from "react"
import {useFormState} from "react-dom"
import {handleBuzzFormAction} from "@/app/actions/"


export default function BuzzWords({selected, setSelected}){
  const [buzzState, setBuzzState] = useFormState(handleBuzzFormAction, null)
  const formConnect = (formData) =>{
    setBuzzState(formData)
    setSelected(formData);
  }
    return (
      <div className="flex flex-col gap-1 w-full">
        
        <CheckboxGroup
          className="gap-1"
          label="Select amenities"
          orientation="horizontal"
          value={selected}
          onValueChange={formConnect}
        >
          <form action={setBuzzState}>
          <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
          <CustomCheckbox value="tv">TV</CustomCheckbox>
          <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
          <CustomCheckbox value="parking">Parking</CustomCheckbox>
          <CustomCheckbox value="pool">Pool</CustomCheckbox>
          <CustomCheckbox value="gym">Gym</CustomCheckbox>
          </form>
        </CheckboxGroup>
        <p className="mt-4 ml-1 text-default-500">
          Selected: {selected.join(", ")}
        </p>
        
        
      </div>
    );
  }
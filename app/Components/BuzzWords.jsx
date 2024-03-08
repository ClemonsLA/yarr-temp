"use client"
import {CheckboxGroup} from "@nextui-org/checkbox"
import { CustomCheckbox } from "./CustomCheckbox"
import {useState} from "react"


export default function BuzzWords({selected, setSelected}){
    

    return (
      <div className="flex flex-col gap-1 w-full">
        <CheckboxGroup
          className="gap-1"
          label="Select amenities"
          orientation="horizontal"
          value={selected}
          onValueChange={setSelected}
        >
          <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
          <CustomCheckbox value="tv">TV</CustomCheckbox>
          <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
          <CustomCheckbox value="parking">Parking</CustomCheckbox>
          <CustomCheckbox value="pool">Pool</CustomCheckbox>
          <CustomCheckbox value="gym">Gym</CustomCheckbox>
        </CheckboxGroup>
        <p className="mt-4 ml-1 text-default-500">
          Selected: {selected.join(", ")}
        </p>
      </div>
    );
  }
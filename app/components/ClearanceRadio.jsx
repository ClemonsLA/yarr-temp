'use client'
import React from "react";
import { useState } from "react";
import {useFormState} from "react-dom"
import {Radio, RadioGroup} from "@nextui-org/radio"
import { handleClearanceFormAction } from "@/app/actions";

export default function ClearanceRadio({usrClearanceSelection}){

    const [clearanceSelected, setClearanceSelected] = React.useState([usrClearanceSelection]);
  const [clearanceFormState, setClearanceFormState] = useFormState(handleClearanceFormAction, [])

  const clearanceSelection = (clearanceSelected) => {
    setClearanceSelected(clearanceSelected);
    setClearanceFormState(clearanceSelected)
  }
    return <div className="flex flex-col gap-3">
      <RadioGroup
        label="Select your clearance"
        value={usrClearanceSelection}
        onValueChange={clearanceSelection}
      >
        <Radio value="none">N/A</Radio>
        <Radio value="secret">Secret</Radio>
        <Radio value="ts">TS</Radio>
      </RadioGroup>
    </div>
}
'use client'
import React from "react";
import { useState } from "react";
import {useFormState} from "react-dom"
import {Radio, RadioGroup} from "@nextui-org/radio"
import { handleCharFormAction } from "@/app/actions";


export default function CareerRadio({usrCharacterSelection}){
  const [charSelected, setCharSelected] = React.useState([usrCharacterSelection]);
  const [charFormState, setCharFormState] = useFormState(handleCharFormAction, [])

  const charSelection = (charSelected) => {
    setCharSelected(charSelected);
    setCharFormState(charSelected)
  }

  return <div className="flex flex-col gap-3">

      <RadioGroup
        label="Select your favorite city"
        value={usrCharacterSelection}

        onValueChange={charSelection}
      >
        
        <Radio value="devdog">Developer Dog</Radio>
        <Radio value="cybercat">Cyber Cat</Radio>
        <Radio value="bird">Cloud Eagle</Radio>
        <Radio value="bear">Sales Bear</Radio>
        <Radio value="penguin">Manager Penguin</Radio>
       
      </RadioGroup>


  </div>
    }

    /*
   
    }

    return (

      
      );
    */
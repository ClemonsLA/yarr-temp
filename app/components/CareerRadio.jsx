'use client'
import React from "react";
/*import { useState } from "react";
import {useFormState} from "react-dom"
import {Radio, RadioGroup} from "@nextui-org/radio"
import { handleCharFormAction } from "../actions";*/


export default function CareerRadio({usrCharacterSelection}){
      const charSelec = usrCharacterSelection;
      return <div>
        <h2>Hello from career radio component</h2>
        <p>{charSelec}</p>
      </div>
    }

    /*
 const [charSelected, setCharSelected] = useState(charPreLoad);
    const [charFormState, setCharFormState] = useFormState(handleCharFormAction, "devdog")

    const charSelection = (charSelected) => {
        setCharSelected(charSelected);
        setCharFormState(charSelected);
    }

    return (

        <div className="flex flex-col gap-3">
                    <form action={async ()=> setCharFormState()}>
          <RadioGroup
            label="Select your favorite city"
            value={charSelected}
            name="character"
            onChange={charSelection}
          >
            
            <Radio value="devdog">Developer Dog</Radio>
            <Radio value="cybercat">Cyber Cat</Radio>
            <Radio value="bird">Cloud Eagle</Radio>
            <Radio value="bear">Sales Bear</Radio>
            <Radio value="penguin">Manager Penguin</Radio>
           
          </RadioGroup>
          <p className="text-default-500 text-small">Selected: {charSelected}</p>
          
          </form>
         </div>
      );
    */
'use client'
import {Slider} from "@nextui-org/slider";
import React from "react";
import { useFormState } from "react-dom"
import { handleExpFormAction } from "../actions";

export default function ExperienceRadio({usrExpSelection}){
    const [value, setValue] = React.useState(usrExpSelection)
    const [expState, setExpState] = useFormState(handleExpFormAction, 0)

    const usrSetNewVal = (value) =>{
        setValue(value)
        setExpState(value)
    }

    return <div>
              <Slider   
                size="md"
                color="background"
                label="Years of Experience"
                maxValue={20} 
                minValue={0} 
                defaultValue={usrExpSelection}
                onChangeEnd={usrSetNewVal}
                className="max-w-md" 
              />
    </div> 
}
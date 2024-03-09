"use client"

import { Card, CardBody } from "@nextui-org/card"
import CertSelect from "@/app/Components/CertSelect"
import InterviewTabs from "@/app/Components/InterviewTabs"
import BuzzWords from "../Components/BuzzWords"
import { useState } from "react"

export default function MainCard(){
    const [selected, setSelected] = useState([""]);
    return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-[50vw] h-[100vh]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid items-center justify-center h-[100vh] w-full">
            <InterviewTabs childCerts={<CertSelect/>} childBuzz={<BuzzWords selected={selected} setSelected={setSelected} />} />
        </div>
      </CardBody>
    </Card>
    )
}
import MegaWrapper from "@/app/Components/MegaWrapper"
import TestSelectBox from "../Components/TestSelectBox"
import {Suspense} from "react"
import Loading from "@/app/start/loading"



export default function TestingNewShit(){
    
    return(
        
            <MegaWrapper>
                <Suspense fallback={<Loading />}><TestSelectBox></TestSelectBox></Suspense>
            </MegaWrapper>



)}
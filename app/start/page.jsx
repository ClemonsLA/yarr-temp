import MegaWrapper from "@/app/Components/MegaWrapper"
import {Suspense} from "react"
import Loading from "@/app/start/loading"
import CertSelect from "@/app/Components/CertSelect"
import InterviewTabs from "@/app/Components/InterviewTabs"
import BuzzWords from "../Components/BuzzWords"
import MainCard from "../Components/MainCard"


export default function TestingNewShit(){
    
    return(
        
            <MegaWrapper>
                <Suspense fallback={<Loading />}>
                    <MainCard/>
                </Suspense>
            </MegaWrapper>



)}
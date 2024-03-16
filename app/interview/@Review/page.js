import ReviewTable from "@/app/components/ReviewTable"
import { getUserDataPreload } from "@/app/actions"
import { handleSubmitButtonAction } from "@/app/actions";
import SubmitArtButton from "@/app/components/SubmitArtButton";
import { cache } from 'react'
import { getAllItems, getURLItem } from '@/app/components/getUserSelections'


export default async function Review(){
    const {username,
           character,
           experience,
           certifications,
           buzzwords,
           clearance,
    } = await getAllItems();
    

    return <div className="grid grid-rows-6 min-w-full h-[75vh]">                
                <h1 className="text-center">Review</h1> 
                <div className="row-span-4">
                    <ReviewTable
                        usernameItems={username} 
                        characterItems={character} 
                        experienceItems={experience} 
                        certificationsItems={certifications} 
                        buzzwordsItems={buzzwords} 
                        clearanceItems={clearance}/>
                </div>
                <SubmitArtButton serverActionPropSubmitBut={handleSubmitButtonAction}></SubmitArtButton>
    </div>
}
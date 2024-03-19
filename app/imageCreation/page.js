import ImageDisplayer from "@/app/components/ImageDisplayer"
import {getURLDataPreload} from '@/app/actions'
import { getAllItems, getURLItem } from '@/app/components/getUserSelections'
//import { cookies } from 'next/headers'
//import { cache } from 'react'

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

export default async function imageCreation(){

    //const myBandAidFix = cookies();
    const {
        returnedURL,
    } = await getURLItem();
    console.log(returnedURL);

    const userFreshURL = await getURLDataPreload();
    return <div className="grid grid-rows-2 ">
                <div className="grid justify-center" style={{ position: 'relative', width: '500px', height: '300px' }}>
                    <ImageDisplayer url={returnedURL} />
                </div>
                <button>Paint me!</button>
                <div>{returnedURL}</div>
    </div>
}
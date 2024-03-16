import ImageDisplayer from "@/app/components/ImageDisplayer"
import {getURLDataPreload} from '@/app/actions'
import { cookies } from 'next/headers'

export default async function imageCreation(){
    const myBandAidFix = cookies();
    const userFreshURL = await getURLDataPreload();
    return <div className="grid grid-rows-2 ">
        <ImageDisplayer url={userFreshURL}/>
        <button>Paint me!</button>
        <div>{userFreshURL}</div>
    </div>
}
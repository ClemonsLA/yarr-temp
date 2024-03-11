import BuzzWords from "@/app/Components/BuzzWords"
import { getUserDataPreload } from "@/app/actions";


export default async function TechnologiesPage(){
    const {buzzwords} = await getUserDataPreload();
    return <div>
        <h1><BuzzWords buzzwords={buzzwords}></BuzzWords></h1>
    </div>
}
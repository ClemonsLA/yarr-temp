import BuzzWords from "@/app/components/BuzzWords"
import { getUserDataPreload } from "@/app/actions";


export default async function Technologies(){
    const {buzzwords} = await getUserDataPreload();
    return <div>
        <BuzzWords buzzwords={buzzwords}></BuzzWords>
    </div>
}
import BuzzWords from "@/app/components/BuzzWords"
import { getUserDataPreload } from "@/app/actions";
import { revalidatePathAction } from "@/app/actions";


export default async function Technologies(){

    const retValidateString = await revalidatePathAction();
    console.log(`page says: ${retValidateString}`);
    const {buzzwords} = await getUserDataPreload();

    return <div>
        <BuzzWords buzzwords={buzzwords}></BuzzWords>
    </div>
}
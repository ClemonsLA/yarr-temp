import { CareerRadio } from "@/app/components/CareerRadio.jsx"
import {getUserDataPreload} from "../../actions"

export default async function Career(){
    const {character} = await getUserDataPreload();
    
    return <CareerRadio usrCharacterSelection={character}/>
        
}
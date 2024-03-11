import CareerRadio from "@/app/Components/CareerRadio"
import {getUserDataPreload} from "../../actions"

export default async function Career(){
    const {character} = await getUserDataPreload();
    return <div>
        <h1>Career page</h1>
        <CareerRadio usrCharacterSelection={character}/>
    </div>
}
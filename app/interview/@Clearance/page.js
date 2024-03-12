import ClearanceRadio from "@/app/components/ClearanceRadio"
import {getUserDataPreload} from "../../actions"

export default async function Clearance(){
    const {clearance} = await getUserDataPreload();
    return <div>
        <h1>Clearance page</h1>
        <ClearanceRadio usrClearanceSelection={clearance}/>
    </div>
}
import ClearanceRadio from "@/app/components/ClearanceRadio"
import {getUserDataPreload} from "../../actions"

export default async function Clearance(){
    const {clearance} = await getUserDataPreload();
    return <div>

        <ClearanceRadio usrClearanceSelection={clearance}/>
    </div>
}
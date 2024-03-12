import ExperienceRadio from "@/app/components/ExperienceRadio"
import { getUserDataPreload } from "@/app/actions"
export default async function Experience(){
    const { experience } = await getUserDataPreload();
    return <div>
        <h1>Experience page</h1>
        <ExperienceRadio usrExpSelection={experience}/>
    </div>
}
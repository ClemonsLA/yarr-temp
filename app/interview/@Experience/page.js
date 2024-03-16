import ExperienceRadio from "@/app/components/ExperienceRadio"
import { getUserDataPreload } from "@/app/actions"
export default async function Experience(){
    const { experience } = await getUserDataPreload();
    return <div>

        <ExperienceRadio usrExpSelection={experience}/>
    </div>
}
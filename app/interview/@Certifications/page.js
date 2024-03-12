import CertSelect from '@/app/components/CertSelect'
import { getUserDataPreload } from "../../actions";

export default async function Certifications(){
    const {certifications} = await getUserDataPreload();
    console.log(`from certifications page: ${certifications}`)
    return <div>
        <CertSelect></CertSelect>
        <div className='grid'>
            <h2>Lets hope something renders below</h2>
            <div>{certifications}</div>

        </div>
    </div>
}
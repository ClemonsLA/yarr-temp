import CertSelect from '@/app/Components/CertSelect'
import { getUserDataPreload } from "../../actions";

export default async function Certifications(){
    const {certifications} = await getUserDataPreload();
    console.log(`from certifications page: ${certifications}`)
    return <div>
        <h1><CertSelect></CertSelect></h1>
        <div className='grid'>
            <h2>Lets hope something renders below</h2>
            <div>{certifications}</div>

        </div>
    </div>
}
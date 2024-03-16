import CertSelect from '@/app/components/CertSelect'
import { getUserDataPreload } from "../../actions";

export default async function Certifications(){
    const {certifications} = await getUserDataPreload();
    console.log(`from certifications page: ${certifications}`)
    return <div>
        <h2>Add a Certification!</h2>
        <CertSelect></CertSelect>
        <div className='grid'>
            <div>{certifications}</div>
            
        </div>
    </div>
}
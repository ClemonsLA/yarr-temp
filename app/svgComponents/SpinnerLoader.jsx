import mySpinnerLoader from "@/public/spinner.svg"
import Image from 'next/image'
 
export default function SpinnerLoader() {
  return (
    <Image
      src={mySpinnerLoader}
      alt="Dear lord this is website is getting rough"
      sizes="100vw"
      style={{
        width: '10%',
        height: 'auto',
      }}
    />
  )
}
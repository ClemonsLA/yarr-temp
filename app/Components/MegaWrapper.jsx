"use server"
export default async function MegaWrapper({children}){
    return(<div className="w-[98vw]">
        {children}
    </div>)
}
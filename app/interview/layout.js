import MainTabSelections from '../interviewComponents/MainTabSelections'

export default function InterviewLayout({children, Career, Certifications, Experience, Technologies, Clearance, Review, }){
    return <div className="h-[100vh] w-[100vw] grid justify-items-center content-center">

        <div className="h-[88vh] w-[93vw] flex border-2 border-white border-solid flex-cols-3 content-center justify-center items-center flex-wrap">

            <div className="h-[76vh] w-[17vw] box-border border-2 border-solid border-blue-500">
                {children}
            </div>
            <div className="h-[82vh] w-[58vw] box-border border-2 border-solid border-red-500">
                
                    <MainTabSelections Certifications={Certifications} Technologies={Technologies} Experience={Experience} Career={Career} Clearance={Clearance} Review={Review}></MainTabSelections>
              
            </div>
            <div className="h-[76vh] w-[17vw] box-border border-2 border-solid border-yellow-500">
            <div><h1>And then another thing can go here</h1></div>
            </div>
            
        </div>

        
    </div>
}
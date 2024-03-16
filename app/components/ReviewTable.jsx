'use client'

export default function ReviewTable({ usernameItems, characterItems, experienceItems, certificationsItems, buzzwordsItems, clearanceItems }){
    return <div>
        <div className="grid grid-cols-2">
            <div>Wallet</div> <div> {usernameItems} </div> 
            <div>Career Spirit</div> <div> {characterItems} </div>
            <div>YOE</div> <div> {experienceItems} </div>
            <div>Certs</div> <div> {certificationsItems} </div>
            <div>Technologies</div> <div> {buzzwordsItems} </div>
            <div>Clearance</div> <div> {clearanceItems} </div>
        </div>
    </div>
}
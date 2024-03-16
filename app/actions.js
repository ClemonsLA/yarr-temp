"use server"

import { revalidatePath } from "next/cache";
import { redirect, permanentRedirect } from 'next/navigation'
import OpenAI from "openai"

const tempUserDataStore = {
    username: 7373,
    character: 'cybercat',
    experience: 0,
    certifications: [],
    buzzwords: [],
    clearance: '',
    submitted: false,
    submittedTimes: 0,
    recievedPic: false,
    recievedPicTimes: 0,
    returnedURL: '',
}

export async function userDataTestRR(){
    console.log('current state of user store is:');
    for (const [key, value] of Object.entries(tempUserDataStore)) {
        console.log(`${key}: ${value}`);
      }
}

export async function getUserDataPreload(){
    return tempUserDataStore;
}

export async function getURLDataPreload(){
    return tempUserDataStore.returnedURL;
}

export async function revalidatePathAction(){
    //ALERT ALERT
    // HEADS UP: This function is only being ran under the technologies page. It revalidates for all 4 interview pages though.
    console.log('Starting revalidate action')
    revalidatePath('./interview/Certifications');
    revalidatePath('./interview/Technologies');
    revalidatePath('./interview/Career')
    revalidatePath('./interview/Clearance')
    console.log('revalidate action executed');
    const revStringReturn = "revalidate has been executed!";
    return revStringReturn;
}

export async function handleCertFormAction(prevData, formData){
    console.log("handle certs is going off")
    console.log(formData)
    tempUserDataStore.certifications.push(formData)
    console.log(`User certs are now: ${tempUserDataStore.certifications}`)
    revalidatePath('./interview/Certifications')
    return tempUserDataStore.certifications;
}

export async function handleBuzzFormAction(prevData, formData){
    console.log("handle buzz is going off")
    tempUserDataStore.buzzwords = formData;
    console.log(`User buzzwords are now: ${tempUserDataStore.buzzwords}`)
    revalidatePath('./interview/Technologies')
    return tempUserDataStore.buzzwords;
}

export async function handleTechnologiesAction(prev, techArr){
    console.log("handle technology is going off")
    console.log(techArr);
    tempUserDataStore.buzzwords = techArr;
    console.log(`User buzzwords are now: ${tempUserDataStore.buzzwords}`)
    return tempUserDataStore.buzzwords;
}

export async function handleCharFormAction(prevData, formData){
    console.log("handle char is going off")
    console.log(formData)
    tempUserDataStore.character = formData;
    console.log(`User character is now: ${tempUserDataStore.character}`)
    revalidatePath('./interview/Career')
    return tempUserDataStore.character;
}

export async function handleExpFormAction(prevData, formData){
    console.log("handle experience is going off")
    console.log(formData)
    tempUserDataStore.experience = formData;
    console.log(`User experience is now: ${tempUserDataStore.character}`)
    revalidatePath('./interview/Experience')
    return tempUserDataStore.experience;
}

export async function handleClearanceFormAction(prevData, formData){
    console.log("handle clearance is going off")
    console.log(formData)
    tempUserDataStore.clearance = formData;
    console.log(`User clearance is now: ${tempUserDataStore.clearance}`)
    revalidatePath('./interview/Clearance')
    return tempUserDataStore.clearance;
}

export async function handleButtonTestAction(something){
    console.log("succesfully hit server with server action")
    const buttonTestReturnStr = "Feel free to display this log in the client console";
    return buttonTestReturnStr;
}

export async function handleSubmitButtonAction(credentialMaybe){
    let masterArrayPusher = [];
    //add " years" to each number in experience
    let masterExperienceString = tempUserDataStore.experience + " years"
    masterArrayPusher.push(masterExperienceString);
    //seperate out the arrays
    for(let i=0;i < tempUserDataStore.certifications.length; i++){
        masterArrayPusher.push(tempUserDataStore.certifications[i]);
    }
    for(let i=0;i < tempUserDataStore.buzzwords.length; i++){
        masterArrayPusher.push(tempUserDataStore.buzzwords[i]);
    }
    //package the rest of the data up
    masterArrayPusher.push(tempUserDataStore.character);
    masterArrayPusher.push(tempUserDataStore.clearance);

    console.log(masterArrayPusher);

    const freshNewURL = await PaintCreateAction(masterArrayPusher);
    
    console.log(freshNewURL);
    tempUserDataStore.returnedURL = freshNewURL;

    revalidatePath('/interview/Review')
    permanentRedirect('/imageCreation')

}

export async function PaintCreateAction(finDataArray){
    finDataArray.forEach((val)=>
    console.log(val)
    )

    const dataArrayCopy = [];
    finDataArray.forEach((item) => dataArrayCopy.push(item))
    dataArrayCopy.forEach((item) => console.log(`Here we have a ${item}`))
    
    const stringArrayData = [];
    const stringArrayItems = [];
    const stringArrayColors = [];

    for(let i = 0; dataArrayCopy.length > i ; i++){
        console.log(i);
        switch (dataArrayCopy[i]) {
            case "cybercat":{
                const catString = "domestic cat";
                stringArrayData.push(catString);
                break;
            }
            case "devdog":{
                const dogString = "dog";
                stringArrayData.push(dogString);
                break;
            }
            case "whiteowl":{
                const whiteowlString = "white owl";
                stringArrayData.push(whiteowlString);
                break;
            }
            case "bturtle":{
                const tortoiseString = "tortoise";
                stringArrayData.push(tortoiseString);
                break;
            }
            case "linuxpenguin":{
                const penguinString = "penguin";
                stringArrayData.push(penguinString);
                break;
            }
            case "0 years":
            case "1 years":
            case "2 years":{
                const babyString = "baby";
                stringArrayData.push(babyString);
                break;
            }
            case"3 years":{
                const teen = "teenager";
                stringArrayData.push(teen);
                break;
            }
            case "4 years":
            case "5 years":{
                const yngadult = "young adult";
                stringArrayData.push(yngadult);
                break;
            }
            case "6 years":
            case "7 years":
            case "8 years":{
                const adult = "adult";
                stringArrayData.push(adult);
                break;
            }
            case "9 years":
            case "10 years":
            case "11 years":
            case "12 years":
            case "13 years":
            case "14 years":
            case "15 years":{
                const wiseadult = "wise older adult";
                stringArrayData.push(wiseadult);
                break;
            }
            case "16 years":
            case "17 years":
            case "18 years":
            case "19 years":
            case "20 years":{
                const ancientString = "wise powerful old wizard";
                stringArrayData.push(ancientString);
                break;
            }
            case "Sec +": {
                const secplusString = "shield emblem";
                stringArrayItems.push(secplusString);
                break;
            }
            case "CCNA": {
                const ccnaString = "spider-web emblem";
                stringArrayItems.push(ccnaString);
                break;
            }
            case "CCP": {
                const ccpString = "cloud above their head";
                stringArrayItems.push(ccpString);
                break;
            }
            
            case "Gitops": {
                const gitOpsString = "#F05032"
                stringArrayColors.push(gitOpsString);
                break;
            }
            case "K8s": {
                const kubeString = "#326CE5"
                stringArrayColors.push(kubeString);
                break;
            }
            case "Frontend": {
                const frontString = "#87CEEB"
                stringArrayColors.push(frontString);
                break;
            }
            case "Backend": {
                const backString = "#228B22"
                stringArrayColors.push(backString);
                break;
            }
            case "Devops": {
                const devopsString = "#CC5500"
                stringArrayColors.push(devopsString);
                break;
            }
            case "Linux": {
                const linuxBuzzString = "#FF0000"
                stringArrayColors.push(linuxBuzzString);
                break;
            }
            case "secret": {
                const secretString = "silver chain necklace"
                stringArrayItems.push(secretString);
                break;
            }
            case "none": {
                const secretString = "leather necklace"
                stringArrayItems.push(secretString);
                break;
            }
            case "ts": {
                const TsString = "gold chain necklace"
                stringArrayItems.push(TsString);
                break;
            }
            default: {
                console.log("couldn't find anymore");
            }
        }

    }
//Prompt structure

    function combineStringFunc(arr){
        let longAssString = "";
        arr.forEach((val) => longAssString = longAssString + " " + val + ",");
        return longAssString;
    }
    //const characterTraits = `Cold wax oil painting with a ${stringArrayData[2]} frame, depicting a ${stringArrayData[1]} ${stringArrayData[0]}. `;
    
    const characterTraits = `Cold wax oil painting, depicting a ${stringArrayData[1]} - a ${stringArrayData[0]}. `;
    const items = `The depicted ${stringArrayData[0]} is wearing or holding a: ${combineStringFunc(stringArrayItems)}. `;
    const colors = `The main colors are: ${combineStringFunc(stringArrayColors)}. `;

    const goldenPrompt = `${characterTraits}${items}${colors}`;

    console.log(goldenPrompt);
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const response =  await openai.images.generate({
        model: "dall-e-3",
        prompt: goldenPrompt,
        n: 1,
        size: "1024x1024",
        quality: "hd",
        style: "vivid",
    });
    const image_url = response.data[0].url;
    return image_url;
}
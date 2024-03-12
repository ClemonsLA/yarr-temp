"use server"

import { revalidatePath } from "next/cache";

const tempUserDataStore = {
    username: 7373,
    character: 'cybercat',
    experience: 0,
    certifications: [],
    buzzwords: ["wifi"],
    clearance: '',
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
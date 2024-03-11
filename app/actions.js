"use server"

import { revalidatePath } from "next/cache";

const tempUserDataStore = {
    username: 7373,
    character: 'cybercat',
    experience: '2',
    certifications: [],
    buzzwords: ["wifi"],
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

export async function handleCertFormAction(prevData, formData){
    console.log("handle certs is going off")
    console.log(formData)
    tempUserDataStore.certifications.push(formData)
    console.log(`User certs are now: ${tempUserDataStore.certifications}`)
    revalidatePath('/interview/certifications')
    return tempUserDataStore.certifications;
}

export async function handleBuzzFormAction(prevData, formData){
    console.log("handle buzz is going off")
    //console.log(Object.keys(formData))
    //const annoyingArrayFix = [];
    /*for(let i = 1; i < formData.length; i++){
        annoyingArrayFix.push(formData[i])
    }*/
    //tempUserDataStore.buzzwords = annoyingArrayFix;
    tempUserDataStore.buzzwords = formData;
    console.log(`User buzzwords are now: ${tempUserDataStore.buzzwords}`)
    revalidatePath('/interview/certifications')
    return tempUserDataStore.buzzwords;
}

export async function handleTechnologiesAction(prev, techArr){
    console.log("handle technology is going off")
    console.log(techArr)
    //get rid of empty string
    /*const annoyingArrayFix = [];
    for(let i = 1; i < techArr.length; i++){
        annoyingArrayFix.push(techArr[i])
    }*/
    tempUserDataStore.buzzwords = techArr;
    console.log(`User buzzwords are now: ${tempUserDataStore.buzzwords}`)
    revalidatePath('/interview/certifications')
    return tempUserDataStore.buzzwords;
}

export async function handleCharFormAction(prevData, formData){
    console.log("handle char is going off")
    console.log(formData)
    tempUserDataStore.character = formData;
    console.log(`User character is now: ${tempUserDataStore.character}`)
    revalidatePath('/interview/career')
    return tempUserDataStore.character;
}
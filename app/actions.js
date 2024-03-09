"use server"

const tempUserDataStore = {
    username: 7373,
    character: '',
    experience: '',
    clearance: '',
    certifications: [],
    buzzwords: [],
}

export async function userDataTestRR(){
    console.log('current state of user store is:');
    for (const [key, value] of Object.entries(tempUserDataStore)) {
        console.log(`${key}: ${value}`);
      }
}

export async function handleCertFormAction(prevData, formData){
    console.log("handle certs is going off")
    console.log(formData)
    tempUserDataStore.certifications.push(formData)
    console.log(`User certs are now: ${tempUserDataStore.certifications}`)
    return tempUserDataStore.certifications;
}

export async function handleBuzzFormAction(prevData, formData){
    console.log("handle buzz is going off")
    console.log(formData)
    const annoyingArrayFix = [];
    for(let i = 1; i < formData.length; i++){
        annoyingArrayFix.push(formData[i])
    }
    tempUserDataStore.buzzwords = annoyingArrayFix;
    console.log(`User buzzwords are now: ${tempUserDataStore.buzzwords}`)
    return tempUserDataStore.buzzwords;
}


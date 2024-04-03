
const cratePostHeaderApiCall = async(url: string, email: string, password: string) =>{
    const data = await fetch(url, {
        method: 'POST',
        headers : {"Content-Type": "application/json"} ,
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    const logInData = await data.json();
    return logInData;
}



export const logInService = (url: string, email: string, password: string) => {
   return cratePostHeaderApiCall(url, email, password)
}

export const signUpService = (url: string, email: string, password: string) => {
    return cratePostHeaderApiCall(url, email, password)
}
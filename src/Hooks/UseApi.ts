import { toast } from "solid-toast";
import UseLocalStorage from "./UseLocalStorage"


const request =  async (method, url, body) => {
    try {
        const token = UseLocalStorage.getToken()
        const response =  await fetch(import.meta.env.VITE_BASEURL + url, {
            method : method,
            headers : {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Accept: "*/*",
                Authorization: token,
              },
              body : JSON.stringify(body)
        })
    
        const data = await handleError(response);
        return data
    } catch (error) {
        //console.log(error);
        toast.error(`Error while calling the api : ${error}`)
        // Gérer l'erreur ici
        // Par exemple, afficher un message d'erreur à l'utilisateur ou rediriger vers une page d'erreur
    }
}

const handleError = (response) => {
    console.log(response)
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

const api = "/api"
const authapi = `${api}/auth`

const login = async (email, password) => {
    return await request("POST", `${authapi}`, {email: email, password : password})
}


export default {login}
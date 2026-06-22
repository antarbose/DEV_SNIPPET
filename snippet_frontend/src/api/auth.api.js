import API from "./index.js"

export const signup=(data)=>{

return API.post(
"/auth/register",
data
)

}

export const login=(data)=>{

return API.post(
"/auth/login",
data
)
}

export const logout=()=>{

return API.post(
"/auth/logout"
)

}
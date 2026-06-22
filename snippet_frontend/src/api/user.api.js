import API from "./index.js"

export const checkAuth=(data)=>{

return API.get(
"/user/check",
data
)

}
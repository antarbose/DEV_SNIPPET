import API from "./index.js"

export const CreateSnippet=(data)=>{

return API.post(
"/user/snippets",
data
)

}


export const GetSnippet=(data)=>{

return API.get(
"/user/snippets",
data
)

}


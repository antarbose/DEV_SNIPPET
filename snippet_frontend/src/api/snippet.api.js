import API from "./index.js"

export const CreateSnippet = (data) => {

    return API.post(
        "/user/snippets",
        data
    )

}


export const GetSnippet = (data) => {

    return API.get(
        "/user/snippets",
        data
    )

}

//for update snippet


export const UpdateSnippet =
    (id, data) => {

        return API.put(
            `/user/snippets/${id}`,
            data
        )

    }

// for deleting snippet..

export const DeleteSnippet =
(id) => {

  return API.delete(
    `/user/snippets/${id}`
  )

}

// for toggling favourite snippets...

export const ToggleFavourite =
(id) => {

  return API.patch(
    `/user/snippets/${id}/favourite`
  )

}
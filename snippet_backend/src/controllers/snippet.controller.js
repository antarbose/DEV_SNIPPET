import Snippet from "../models/snippet.model.js"


export const CreateSnip = async (req, res) => {
    try {
        const { title, code, language ,id} = req.body

        const snippet = await Snippet.create({
            title,
            code,
            language,
            
        
            owner: req.user.id
        })

        res.status(201).json(
            snippet
        )

    }

    catch {

        res.status(500).json({

            message:
                "Creation failed"

        })

    }


}


export const GetSnip = async (req, res) => {
    try {


        const snippets = await Snippet.find({
            $or: [{ owner: req.user.id }, { isDefault: true }]
        })

        



        res.status(200).json(
            snippets
        )

    }

    catch {

        res.status(500).json({

            message:
                "Error fetching snippets"

        })

    }

}


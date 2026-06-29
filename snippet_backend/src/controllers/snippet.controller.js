import Snippet from "../models/snippet.model.js"


export const CreateSnip = async (req, res) => {
    try {
        const { title, code, language, id } = req.body

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



//update snippet controller


export const UpdateSnippet =
    async (req, res) => {

        try {

            const snippet =
                await Snippet.findOneAndUpdate(
                    {
                        _id: req.params.id,
                        owner: req.user.id
                    },

                    req.body,

                    {
                        new: true
                    }
                )

            res.status(200).json(
                snippet
            )

        }

        catch {

            res.status(500).json({
                message:
                    "Update failed"
            })
        }
    }


//for deleting snippet.....


export const DeleteSnippet =
    async (req, res) => {

        try {

            const snippet =
                await Snippet.findOneAndDelete({

                    _id: req.params.id,

                    owner: req.user.id

                })

            if (!snippet) {

                return res.status(404).json({

                    message:
                        "Snippet not found"

                })

            }

            res.status(200).json({

                message:
                    "Snippet deleted"

            })

        }

        catch {

            res.status(500).json({

                message:
                    "Deletion failed"

            })

        }

    }

// for toggling favourite snippets...

export const ToggleFavourite =
    async (req, res) => {

        try {

            const snippet =
                await Snippet.findOne({

                    _id: req.params.id,

                    owner: req.user.id

                })

            if (!snippet) {

                return res.status(404).json({

                    message:
                        "Snippet not found"

                })

            }

            snippet.fav =
                !snippet.fav

            await snippet.save()

            res.status(200).json(
                snippet
            )

        }

        catch {

            res.status(500).json({

                message:
                    "Failed"

            })

        }

    }

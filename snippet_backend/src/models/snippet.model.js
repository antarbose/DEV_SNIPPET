import mongoose from "mongoose"

const snippetSchema =
    new mongoose.Schema({

        title: String,

        code: String,

        language: String,

        

        fav : {
            type: Boolean,
            default : false
        },

        isDefault: {
            type: Boolean,
            default: false
        },

        owner: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            default: null

        }

    })

export default mongoose.model(
    "Snippet",
    snippetSchema
)
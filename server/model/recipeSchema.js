const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types

const recipeSchema = new mongoose.Schema({
    author:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image:{
        type:String
    },
    cuisine:{
        type:String,
        required: true
    },
    mood:{
        type:String,
        required: true
    },
    diet:{
        type:String,
    },
    skills:{
        type:String,
        required: true
    },
    course:{
        type:String,
        required: true
    },
    numserve:{
        type:Number
    },
    cooktime:{
        type:Number
    },
    instruction:
        {
            type:String,
            required:true
        }
    ,
    ingredients:
    {
        type:String,
        required:true
    },
    kcal:{
        type:Number
    },
    fat:{
        type:Number
    },
    protein:{
        type:Number
    },
    carbs:{
        type:Number
    },
    sugar:{
        type:Number
    },
    fibre:{
        type:Number
    },
    likes:[{
        type: ObjectId,
        ref: "USER"
    }],
    comments:[{
        text: String,
        postedBy:{type:ObjectId,ref: "USER"}
    }],
    postedBy:{
        type: ObjectId,
        ref: "USER"
    }
})

const Recipeadd = mongoose.model('RECIPE', recipeSchema);
module.exports = Recipeadd;
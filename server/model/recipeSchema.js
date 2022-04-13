const mongoose=require('mongoose');

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
    //image
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
    instruction:[
        {
            type:String,
            required:true
        }
    ],
    ingredients:[
        {
            type:String,
            required:true
        }
    ],
    kcal:{
        type:Number
    },
    fats:{
        type:Number
    },
    saturats:{
        type:Number
    },
    carbs:{
        type:Number
    },
    sugar:{
        type:Number
    }
})

const Recipeadd = mongoose.model('RECIPE', recipeSchema);
module.exports = Recipeadd;
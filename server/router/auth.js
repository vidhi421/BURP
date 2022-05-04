const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate"); 

require('../db/conn');
const User = require("../model/userSchema");
const Recipeadd = require("../model/recipeSchema");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'_'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




router.get('/',(req,res) =>{
    res.send("hello from router");
});

router.get('/Profile', authenticate ,(req,res) => {
    console.log("hello profile");
    res.send(req.rootUser);
})
//using promises

// router.post('/SignUpPage',(req,res) => {

//     const{username,email,password,cpassword,gender,age,occupation} = req.body;

//     if(!username || !email || !password || !cpassword){
//         return res.status(422).json({error:"fill the required fields!"});
//     }
//     //username should be unique
//     User.findOne({email : email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }

//         const user = new User({username,email,password,cpassword,gender,age,occupation});

//         user.save().then(()=>{
//             res.status(201).json({message:"user register successfully"});
//         }).catch((err)=> res.status(500).json({error:"failed to register"}));
//     }).catch(err => {console.log(err);});

// })

//using async-await
router.post('/SignUpPage', async (req,res) => {

    const{username,email,password,cpassword,gender,age,occupation} = req.body;

    if(!username || !email || !password || !cpassword){
        return res.status(422).json({error:"fill the required fields!"});
    }

    // if(password!=cpassword){
    //     return res.status(422).json({error:"password are not same!"});
    // }


    try{

        //username should be unique
        const userExist= await User.findOne({email : email});
        const usernameExist= await User.findOne({username : username});
        
        if(userExist || usernameExist){
            return res.status(422).json({error:"username/email already exist"});
        }
        else if(password!=cpassword){
            return res.status(422).json({error:"password are not same!"});
        }
        else{

        const user = new User({username,email,password,cpassword,gender,age,occupation});

        await user.save();
            res.status(201).json({message:"user register successfully"});
        }    
    } catch (err){
        console.log(err);
    }
});



//login route

router.post('/LoginPage',async (req,res) =>{
    try{
        let token;
        const{email , password}= req.body;

        if(!email || !password){
            return res.status(400).json({error:"fill all the fields!"});
        }

        const userLogin = await User.findOne({email: email});

        console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"user not exist!"});
            }
            else{
            res.json({message:"you are loged in!!"});
            }

        }else{
            res.status(400).json({error:"user not exist!"});
        }

    }catch(err){
        console.log(err);
    }
});

//using promises

router.post('/AddRecipe',upload.single('image'),authenticate,(req,res) => {

    let image= (req.file)?req.file.filename : null;
    
    const{author,title,description,cuisine,mood,diet,skills,course,numserve,cooktime,instruction,ingredients,kcal,fat,protein,carbs,sugar,fibre}=req.body;

    if( !author || !title || !description || !ingredients || !skills || !cuisine  || !mood  || !course || !instruction ){
        return  res.status(422).json({error:"fill the required fields!"});        
    }
    req.rootUser.password=undefined
    req.rootUser.cpassword=undefined
    const recipe = new Recipeadd({author,title,image,description,skills,ingredients,cuisine,mood,diet,course,numserve,cooktime,instruction,kcal,fat,protein,carbs,sugar,fibre,postedBy:req.rootUser});

    recipe.save().then(()=>{
        console.log("recipe added!");
    }).catch(err => {console.log(err);});

    

     
    res.send(req.rootUser);
    
  
})  

router.get('/allrecipe',(req,res)=>{
    Recipeadd.find()
    .populate("postedBy","_id username")
    .populate("comments.postedBy","_id username")
    .then(recipes=>{
        res.json({recipes})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myrecipe',authenticate,(req,res)=>{
    Recipeadd.find({postedBy:req.rootUser._id})
    .populate("postedBy","_id username")
    .populate("comments.postedBy","_id username")
    .then(recipes=>{
        res.json({recipes})
        console.log({recipes})
    })
    .catch(err=>{
        console.log(err)
    })
    //res.send(req.rootUser);
})

router.get('/likedrecipe',authenticate,(req,res)=>{
    Recipeadd.find({likes:req.rootUser._id})
    .populate("postedBy","_id username")
    .populate("comments.postedBy","_id username")
    .then(recipes=>{
        res.json({recipes})
        console.log({recipes})
    })
    .catch(err=>{
        console.log(err)
    })
    //res.send(req.rootUser);
})

router.get("/:id",async(req,res)=>{
    try{
        const recipe = await Recipeadd.findById(req.params.id).populate("postedBy","_id username").populate("comments.postedBy","_id username")
        res.status(200).json(recipe);
    }catch(err){
        res.status(500).json(err);
    }
});

router.put('/like',authenticate,(req,res)=>{
    Recipeadd.findByIdAndUpdate(req.body.recipeId,{
        $push:{likes:req.rootUser._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
    
})

router.put('/unlike',authenticate,(req,res)=>{
    Recipeadd.findByIdAndUpdate(req.body.recipeId,{
        $pull:{likes:req.rootUser._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
    
})

router.put('/comment',authenticate,(req,res)=>{

    const comment ={
        text: req.body.text,
        postedBy: req.rootUser._id
    }

    Recipeadd.findByIdAndUpdate(req.body.recipeId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id username")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
    
})

//update recipe
router.put("/Profile/:recipeId",authenticate ,async (req,res)=> {
    try{
        const recipe = await  Recipeadd.findById(req.params.recipeId).populate("postedBy","_id")
        if(recipe.postedBy._id.toString() === req.rootUser._id.toString()){
            try {
                    const updatedRecipe= await Recipeadd.findByIdAndUpdate(req.params.recipeId,{
                        $set : req.body,
                    },
                    { new : true}
                    );
                    res.status(100).json(updatedRecipe);
             } catch (error) {
                res.status(500).json(err)
            }
       } else{
           res.status(401).json("can update only your recipe")
       }   
    }catch(err){
         res.status(500).json(err)
    }
})

//delete recipe
router.delete("/deleterecipe/:recipeId",authenticate,(req,res)=> {
   Recipeadd.findOne({_id:req.params.recipeId})
   .populate("postedBy","_id")
   .exec((err,recipe)=>{
       if(err || !recipe){
          return res.status(422).json({error:err})
       }
       if(recipe.postedBy._id.toString() === req.rootUser._id.toString()){
        recipe.remove()
        .then(result=>{
            res.json(result)
        }).catch(err=>{
            console.log(err)
        })
       }
   })
})

router.get('/logout',(req,res)=>{
    console.log("log out");
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("user logout")
});



module.exports = router;
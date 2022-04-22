import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

function AddRecipe() {

    const navigate=useNavigate()


    const [recipeInfo, setRecipeInfo]=useState({
        author:"", title:"", description:"",
         image:"",
          cuisine:"", course:"", mood:"", diet:"",skills:"", 
         numserve:"", cooktime:"",
         instruction:"",
        ingredients:"",
         kcal:"", fat:"", protein:"", carbs:"", sugar:"" , fibre:""
    });

    let name,value;
    const imageUpload=(event)=>{
        console.log(event.target.files[0]);
        setRecipeInfo({...recipeInfo,image:event.target.files[0]});
    }
    

    
    //for the rest fields
    const handleInputs=(e)=>{
        e.preventDefault();
        console.log(e);
        // console.log(recipeInfo);
        name=e.target.name;
        value=e.target.value;
        setRecipeInfo({...recipeInfo, [name]:value});
    }

    const PostData = async(e)=>{
        e.preventDefault();
        // const{author,title,description,
        //   cuisine, course, mood, diet,skills, 
        //  numserve, cooktime,
        //  instruction,ingredients,
        //  kcal, fat, protein, carbs, sugar , fibre}=recipeInfo;
         const fd= new FormData();
         fd.append('image',recipeInfo.image,recipeInfo.image.name);
         fd.append('author',recipeInfo.author)
         fd.append('title',recipeInfo.title)
         fd.append('description',recipeInfo.description)
         fd.append('cuisine',recipeInfo.cuisine)
         fd.append('course',recipeInfo.course)
         fd.append('mood',recipeInfo.mood)
         fd.append('diet',recipeInfo.diet)
         fd.append('skills',recipeInfo.skills)
         fd.append('numserve',recipeInfo.numserve)
         fd.append('cooktime',recipeInfo.cooktime)
         fd.append('instruction',recipeInfo.instruction)
         fd.append('ingredients',recipeInfo.ingredients)
         fd.append('kacl',recipeInfo.kcal)
         fd.append('fat',recipeInfo.fat)
         fd.append('protein',recipeInfo.protein)
         fd.append('carbs',recipeInfo.carbs)
         fd.append('sugar',recipeInfo.sugar)
         fd.append('fibre',recipeInfo.fibre)

         const res = await fetch("/AddRecipe",{
             method:"POST",
            //  headers:{
            //      "Content-Type":"application/json"
            //  },
            //  body: JSON.stringify({
            //     author,title,description,
            //      cuisine, course, mood, diet,skills, 
            //     numserve, cooktime,
            //     instruction,ingredients,
            //     kcal, fat, protein, carbs, sugar , fibre
            //  }) ,fd

            body: fd
         });

         const data=await res.json();

         if(data.status===422 || !data){
             window.alert("invalid");
             console.log("invalid");
         } else{
            window.alert("recipe added!");
            console.log("recipe added!");

            navigate("/Profile");
         }

    }

    //middleware
    

    const  callAddrecipe = async () =>{
        try{
            const res = await fetch('/AddRecipe',{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            navigate('/LoginPage');
        }
    }

    useEffect(() => {
        callAddrecipe();
    },[]);


    // const handelReset=()=>({
    //     author:"", title:"", description:"",
    //      image:"",
    //      numserve:"", cooktime:"",
    //      instruction:"",
    //     ingredients:"",
    //      kcal:"", fat:"", protein:"", carbs:"", sugar:"" , fibre:""
    // });

  return (
    <div>

        <Form  
         method="POST" 
        //onChange={handleSubmit}
        style={{padding:"50px"}}>
            <h1 style={{ marginBottom:"20px"}}>New Recipe</h1>
            <h2 class="heading2">Details</h2>
            <Row className="mb-3">
                <Form.Group md={6} as={Col} controlId="formGridEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                value={recipeInfo.author}
                onChange={handleInputs}
                name="author"
                type="text" 
                placeholder="example01@gmail.com" />
                </Form.Group>

                <Form.Group md={6} as={Col} controlId="formGridPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                value={recipeInfo.title}
                onChange={handleInputs}
                name="title"
                type="text" 
                placeholder="Title of the Recipe" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridText1">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                value={recipeInfo.description}
                onChange={handleInputs}
                name="description"
                type="text"
                placeholder="About the recipe"/>
            </Form.Group>

            <Form.Group controlId="formFile1" className="mb-3">
                <Form.Label>Recipe Image</Form.Label>
                <Form.Control type="file" name="image" onChange={imageUpload}/>
            </Form.Group>

            <hr></hr>
            <h2 class="heading2">Filters</h2>
            <Row>

                <Form.Group md={6} as={Col} controlId="formGridState2">
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Select 
                    //value={recipeInfo.cuisine}
                    onChange={handleInputs}
                    name="cuisine"
                    defaultValue="Choose...">
                        <option value="Choose...">Choose...</option>
                        <option value="America">American</option>
                        <option value="Chinese">Chinese</option>
                        <option value="French">French</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group md={6} as={Col} controlId="formGridState3">
                    <Form.Label>Course</Form.Label>
                    <Form.Select 
                    //value={recipeInfo.course}
                    onChange={handleInputs}
                    name="course"
                    defaultValue="Choose...">
                        <option value="Choose...">Choose...</option>
                        <option value="BreakFast">BreakFast</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Soup-course">Soup-course</option>
                        <option value="Dinner">Dinner</option>
                    </Form.Select>
                </Form.Group>
            
            </Row>

            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState4">
                <Form.Label>Mood</Form.Label>
                <Form.Select 
                //value={recipeInfo.mood}
                onChange={handleInputs}
                name="mood"
                defaultValue="Choose...">
                    <option value="Choose...">Choose...</option>
                    <option value="Casual">Casual</option>
                    <option value="Comfort">Comfort</option>
                    <option value="Happy">Happy</option>
                    <option value="Family Friendly">Family Friendly</option>
                    <option value="Pocket Friendly">Pocket Friendly</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState5">
                <Form.Label>Diet</Form.Label>
                <Form.Select 
                //value={recipeInfo.diet}
                onChange={handleInputs}
                name="diet"
                defaultValue="Choose...">
                    <option value="Choose...">Choose...</option>
                    <option value="Low Fat">Low Fat</option>
                    <option value="Low Calorie">Low Calorie</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Low-salt">Low-salt</option>
                    <option value="Healthy">Healthy</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState6">
                <Form.Label>Skills</Form.Label>
                <Form.Select 
                //value={recipeInfo.skills}
                onChange={handleInputs}
                name="skills"
                defaultValue="Choose...">
                    <option value="Choose...">Choose...</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Kids">Kids</option>
                </Form.Select>
            </Form.Group>
            </Row>
            <hr></hr>
            <h2 class="heading2">Times</h2>
            <Row>
                <Col md={6}>
                    <Form.Label>No. of Servings</Form.Label>
                    <Form.Control 
                    value={recipeInfo.numserve}
                    onChange={handleInputs}
                    name="numserve"
                    placeholder="Serves" />
                </Col>
                <Col md={6}>
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Control 
                    value={recipeInfo.cooktime}
                    onChange={handleInputs}
                    name="cooktime"
                    placeholder="Cooking Time" />
                </Col>
            </Row>
            
            <hr></hr>
            <h2 class="heading2">Instructions</h2>
            <div id="survey_options1">
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                    value={recipeInfo.instruction}
                    onChange={handleInputs}
                    name="instruction"
                    as="textarea"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <hr></hr>
            <h2 class="heading2">Ingredients</h2>
            <div id="survey_options2">
                <FloatingLabel controlId="floatingTextarea3">
                    <Form.Control
                    value={recipeInfo.ingredients}
                    onChange={handleInputs}
                    name="ingredients"
                    as="textarea"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <hr></hr>
            <h2 class="heading2">Nutrition</h2>
            <Row>
                <Col md={2}>
                    <Form.Label>KCal</Form.Label>
                    <Form.Control 
                    value={recipeInfo.kcal}
                    onChange={handleInputs}
                    name="kcal"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fat</Form.Label>
                    <Form.Control 
                    value={recipeInfo.fat}
                    onChange={handleInputs}
                    name="fat"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Protein</Form.Label>
                    <Form.Control 
                    value={recipeInfo.protein}
                    onChange={handleInputs}
                    name="protein"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control 
                    value={recipeInfo.carbs}
                    onChange={handleInputs}
                    name="carbs"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Sugar</Form.Label>
                    <Form.Control 
                    value={recipeInfo.sugar}
                    onChange={handleInputs}
                    name="sugar"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fibre</Form.Label>
                    <Form.Control 
                    value={recipeInfo.fibre}
                    onChange={handleInputs}
                    name="fibre"
                    placeholder="0"/>
                </Col>
            </Row>
            <hr></hr>
            <Button style={{margin:"10px"}} variant="success" onClick={PostData} type="submit">
                Save
            </Button>
                <Button style={{margin:"10px"}} variant="success" type="reset" onClick={() => setRecipeInfo(() => "")} >
                Reset
            </Button>
        </Form>       
    </div>
  );
}

export default AddRecipe;

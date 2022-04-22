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

<<<<<<< HEAD
    // //ingredients:-
    // const [inputFields, setInputFields] = useState([
    //     { Ingredient1: ''}
    // ]); 

    // const handleChangeInput = (index,event) => {
    //     console.log(event)
    //     const values = [...inputFields];
    //     values[index][event.target.name]  = event.target.value;
    //     setInputFields(values);
    // }

    // const handleAddFields=()=>{
    //     setInputFields([...inputFields, { Ingredient1:"" }])
    // }

    // const handleRemoveFields=()=>{
    //     const values=[...inputFields];
    //     //values.splice(index,1);
    //     setInputFields(values);
    // }

    const [recipeInfo, setRecipeInfo]=useState({
        author:"", title:"", description:"",
         //image:"",
         traditional:"",
          cuisine:"", course:"", mood:"", diet:"",skills:"", 
         numserve:"", cooktime:"",
         instruction:"",
        ingredients: "",
         kcal:"", fat:"", protein:"", carbs:"", sugar:"" , fibre:""
    });

    
    // const imageUpload=(event)=>{
    //     console.log(event.target.files[0]);
    //     setRecipeInfo({...recipeInfo,[event.target.name]:event.target.files[0]});
    // }
=======

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
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
    

    
    //for the rest fields
<<<<<<< HEAD
    let name,value;
=======
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
        const{author,title,description,
<<<<<<< HEAD
         traditional,
=======
         image,
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
          cuisine, course, mood, diet,skills, 
         numserve, cooktime,
         instruction,ingredients,
         kcal, fat, protein, carbs, sugar , fibre}=recipeInfo;

         const res = await fetch("/AddRecipe",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body: JSON.stringify({
<<<<<<< HEAD
                author,title,description,
                traditional,
=======
                author,title,description,image,
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
                 cuisine, course, mood, diet,skills, 
                numserve, cooktime,
                instruction,ingredients,
                kcal, fat, protein, carbs, sugar , fibre
             })
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

<<<<<<< HEAD

    // // handleSubmit for ingredients
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log("inputFields", inputFields); 
    //     console.log("recipeInfo", recipeInfo)
    // };

=======
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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

<<<<<<< HEAD

=======
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
<<<<<<< HEAD
            <Form.Group md={4} as={Col} controlId="formGridState1">
                <Form.Label>Traditional</Form.Label>
                <Form.Select 
                //value={recipeInfo.traditional}
                onChange={handleInputs}
                name="traditional"
                defaultValue="Choose...">
                    <option value="Choose...">Choose...</option>
                    <option value="East">East</option>
                    <option value="North">North</option>
                    <option value="North Eastern">North Eastern</option>
                    <option value="West">West</option>
                    <option value="South">South</option>
                </Form.Select>
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridState2">
=======

                <Form.Group md={6} as={Col} controlId="formGridState2">
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
<<<<<<< HEAD
=======
                        <option value="Indian">Indian</option>
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                    </Form.Select>
                </Form.Group>

<<<<<<< HEAD
                <Form.Group md={4} as={Col} controlId="formGridState3">
=======
                <Form.Group md={6} as={Col} controlId="formGridState3">
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
                    <Form.Label>Course</Form.Label>
                    <Form.Select 
                    //value={recipeInfo.course}
                    onChange={handleInputs}
                    name="course"
                    defaultValue="Choose...">
                        <option value="Choose...">Choose...</option>
                        <option value="BreakFast">BreakFast</option>
                        <option value="Brunch">Brunch</option>
<<<<<<< HEAD
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
=======
                        <option value="Dessert">Dessert</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Soup-course">Soup-course</option>
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
<<<<<<< HEAD
                    <option value="Veg">Veg</option>
                    <option value="Vegan">Vegan</option>
=======
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Low-salt">Low-salt</option>
                    <option value="Healthy">Healthy</option>
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
<<<<<<< HEAD
                    placeholder="Leave a comment here"
=======
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </div>
            <hr></hr>
            <h2 class="heading2">Ingredients</h2>
<<<<<<< HEAD
            {/* { inputFields.map((inputFields, index) => (
                <div key={index}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Control 
                            name="Ingredient1"
                            value={inputFields.Ingredient1}
                            placeholder=""
                            onChange={(event) => handleChangeInput(index,event)}
                            />
                        </Form.Group>
                    </Row>
                </div>
            ))}       
                <Button 
                variant="secondary" 
                style={{margin:"10px"}} 
                onClick ={() =>handleAddFields()} >
                    Add Ingredient 
                </Button>
                <Button 
                variant="secondary" 
                style={{margin:"10px"}} 
                onClick ={() =>handleRemoveFields()}>
                    Remove Ingredient
                </Button> */}
=======
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
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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

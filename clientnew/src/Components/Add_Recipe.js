import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

function AddRecipe() {

    const [recipeInfo, setRecipeInfo]=useState({
         author:"", title:"", description:"",
        //   image:"",
         traditional:"", cuisine:"", course:"", moods:"", diet:"",skills:"", 
         servings:"", time:"",
         instructions:"",
         ingredients:"",
         kcal:"", fat:"", protein:"", carbs:"", sugar:"" , fibre:""
    });

    

    //for the rest fields
    let name,value;
    const handleInputs=(e)=>{
        e.preventDefault();
        console.log(e);
        // console.log(recipeInfo);
        name=e.target.name;
        value=e.target.value;
        setRecipeInfo({...recipeInfo, [name]:value});
    }

    //middleware
    const navigate=useNavigate()

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


  return (
    <div>

        <Form  
        // method="POST" 
        onChange={handleSubmit}
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
                <Form.Control type="file" />
            </Form.Group>

            <hr></hr>
            <h2 class="heading2">Filters</h2>
            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState1">
                <Form.Label>Traditional</Form.Label>
                <Form.Select 
                value={recipeInfo.traditional}
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
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Select 
                    value={recipeInfo.cuisine}
                    onChange={handleInputs}
                    name="cuisine"
                    defaultValue="Choose...">
                        <option value="Choose...">Choose...</option>
                        <option value="America">American</option>
                        
                        <option value="Chinese">Chinese</option>
                        <option value="French">French</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Thai">Thai</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridState3">
                    <Form.Label>Course</Form.Label>
                    <Form.Select 
                    value={recipeInfo.course}
                    onChange={handleInputs}
                    name="course"
                    defaultValue="Choose...">
                        <option value="Choose...">Choose...</option>
                        <option value="BreakFast">BreakFast</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Snack">Snack</option>
                        <option value="Dinner">Dinner</option>
                    </Form.Select>
                </Form.Group>
            
            </Row>

            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState4">
                <Form.Label>Mood</Form.Label>
                <Form.Select 
                value={recipeInfo.mood}
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
                value={recipeInfo.diet}
                onChange={handleInputs}
                name="diet"
                defaultValue="Choose...">
                    <option value="Choose...">Choose...</option>
                    <option value="Low Fat">Low Fat</option>
                    <option value="Low Calorie">Low Calorie</option>
                    <option value="Veg">Veg</option>
                    <option value="Vegan">Vegan</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState6">
                <Form.Label>Skills</Form.Label>
                <Form.Select 
                value={recipeInfo.skills}
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
                    <Form.Control value={recipeInfo.servings}
                    onChange={handleInputs}
                    name="servings"
                    placeholder="Serves" />
                </Col>
                <Col md={6}>
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Control 
                    value={recipeInfo.time}
                    onChange={handleInputs}
                    name="time"
                    placeholder="Cooking Time" />
                </Col>
            </Row>
            
            <hr></hr>
            <h2 class="heading2">Instructions</h2>
            <div id="survey_options1">
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                    value={recipeInfo.instructions}
                    onChange={handleInputs}
                    name="instructions"
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
                onClick ={handleAddFields} >
                    Add Ingredient 
                </Button>
                <Button 
                variant="secondary" 
                style={{margin:"10px"}} 
                onClick ={handleRemoveFields}>
                    Remove Ingredient
                </Button> */}
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
            <Button style={{margin:"10px"}} variant="success" onChange={handleSubmit}type="submit">
                Save
            </Button>
            <Button style={{margin:"10px"}} variant="success" type="submit">
                Reset
            </Button>
        </Form>       
    </div>
  );
}

export default AddRecipe;

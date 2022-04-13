import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
//import HeaderLoggedIn from "../../../BURP/src/Components/HeaderLoggedIn.js"

function AddRecipe() {
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





    var survey_options = document.getElementById('survey_options1');
// var add_more_fields = document.getElementById('add_more_fields');
// var remove_fields = document.getElementById('remove_fields');

let AddFields= function(){
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    // newField.setAttribute('name','instruction');
    newField.setAttribute('className','instructions');
    newField.setAttribute('size','70');
    survey_options.appendChild(newField);
}

let removeFields= function(){
    var input_tags = survey_options.getElementsByTagName('input');
    if(input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length)-1])
    }
}
  return (
    <div>
        {/* <HeaderLoggedIn/> */}
        <Form  method="POST" style={{padding:"50px"}}>
            <h1 style={{ marginBottom:"20px"}}>New Recipe</h1>
            <h2 class="heading2">Details</h2>
            <Row className="mb-3">
                <Form.Group md={6} as={Col} controlId="formGridEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="email" placeholder="example01@gmail.com" />
                </Form.Group>

                <Form.Group md={6} as={Col} controlId="formGridPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title of the Recipe" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridText">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="About the recipe"/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Recipe Image</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <hr></hr>
            <h2 class="heading2">Filters</h2>
            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Traditional</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>East</option>
                    <option>North</option>
                    <option>North Eastern</option>
                    <option>West</option>
                    <option>South</option>
                </Form.Select>
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridState">
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>American</option>
                        <option>Chinese</option>
                        <option>French</option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Korean</option>
                        <option>Mexican</option>
                        <option>Spanish</option>
                        <option>Thai</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridState">
                    <Form.Label>Course</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>BreakFast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Snack</option>
                        <option>Dinner</option>
                    </Form.Select>
                </Form.Group>
            
            </Row>

            <Row>
            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Mood</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Casual</option>
                    <option>Comfort</option>
                    <option>Happy</option>
                    <option>Family Friendly</option>
                    <option>Pocket Friendly</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Diet</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Low Fat</option>
                    <option>Low Calorie</option>
                    <option>Veg</option>
                    <option>Vegan</option>
                </Form.Select>
            </Form.Group>

            <Form.Group md={4} as={Col} controlId="formGridState">
                <Form.Label>Skills</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Kids</option>
                </Form.Select>
            </Form.Group>
            </Row>
            <hr></hr>
            <h2 class="heading2">Times</h2>
            <Row>
                <Col md={6}>
                    <Form.Label>No. of Servings</Form.Label>
                    <Form.Control placeholder="Serves" />
                </Col>
                <Col md={6}>
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Control placeholder="Cook" />
                </Col>
            </Row>
            
            <hr></hr>
            <h2 class="heading2">Instructions</h2>
                <div id="survey_options1">
                    <input type="text" className="instructions" size="70"/>
                    <input type="text" className="instructions" size="70"/>
                    
                </div>
                <div class="controls">
                    <Button style={{margin:"10px"}} id="add_more_fields" variant="success" onClick={AddFields}>Add Instruction</Button>
                    <Button style={{margin:"10px"}} id="remove_fields" variant="success" onClick={removeFields}>Remove Last</Button>
                    {/* <a href="#" id="add_more_fields">Add Instruction</a>
                    <a href="#" id="remove_fields">Remove Last</a> */}
                </div>
            <hr></hr>
            <h2 class="heading2">Ingredients</h2>
            {/* <input type="text" className=""></input> */}
                <div id="survey_options2">
                    <input type="text" className="ingredients" size="30"/>
                    <input type="text" className="ingredients" size="30"/>
                    <input type="text" className="ingredients" size="30"/>
                    <input type="text" className="ingredients" size="30"/>
                </div>
                <div class="controls">
                    <Button style={{margin:"10px"}} id="add_more_fields" variant="success" onClick={AddFields}>Add Ingredients</Button>
                    <Button style={{margin:"10px"}} id="remove_fields" variant="success" onClick={removeFields}>Remove Last</Button>
                    {/* <a href="#" id="add_more_fields">Add Instruction</a>
                    <a href="#" id="remove_fields">Remove Last</a> */}
                </div> 
            <hr></hr>
            <h2 class="heading2">Nutrition</h2>
            <Row>
                <Col md={2}>
                    <Form.Label>KCal</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fat</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Protein</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Sugar</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fibre</Form.Label>
                    <Form.Control placeholder="0"/>
                </Col>
            </Row>
            <hr></hr>
            <Button style={{margin:"10px"}} variant="success" type="submit">
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

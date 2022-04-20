import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AddRecipe.css'
import { useState } from 'react'

function Details(){
    const [recipe,setRecipe]=useState({
        author:"",title:"", description:"",image:"", traditional:"",cuisine:"", course:"", diet:"" , mood:"", skill:""
    });

    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setRecipe({...recipe, [name]:value});
      }

    
    return(
        <div>
            <Form style={{padding:"50px"}} 
            onSubmit={handleInputs}
            >
                <h1 style={{ marginBottom:"20px"}}>New Recipe</h1>
                <h2 class="heading2">Details</h2>
                <Row className="mb-3">
                    <Form.Group md={6} as={Col} controlId="formGridEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                    value={recipe.author}
                    onChange={handleInputs}
                    name="author"
                    type="text" 
                    placeholder="@username" />
                    </Form.Group>

                    <Form.Group md={6} as={Col} controlId="formGridPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    value={recipe.title}
                    onChange={handleInputs}
                    name="title"
                    type="text" 
                    placeholder="Title of the Recipe" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridText">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    value={recipe.description}
                    onChange={handleInputs}
                    name="description"
                    type="text"
                    placeholder="Introduce the recipe"/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Recipe Image</Form.Label>
                    <Form.Control 
                    value={recipe.image}
                    onChange={handleInputs}
                    name="image"
                    type="file"
                    placeholder="Image of the Recipe" />
                </Form.Group>

                <Form.Group md={4} as={Col} controlId="formGridText" className="mb-3">
                    <Form.Label>Traditional (East,
                    North,
                    North Eastern,
                    West,
                    South)</Form.Label>
                    <Form.Control 
                    value={recipe.traditional}
                    onChange={handleInputs}
                    name="traditional"
                    type="text"
                    placeholder="" />
                </Form.Group>
                <Form.Group md={4} as={Col} controlId="formGridText" >
                <Form.Label>Cuisine (American
                        ,Chinese
                        ,French
                        ,Italian
                        ,Japanese
                        ,Korean
                        ,Mexican
                        ,Spanish
                        ,Thai)</Form.Label>
                    <Form.Control 
                    value={recipe.cuisine}
                    onChange={handleInputs}
                    name="cuisine"
                    type="text"
                    placeholder="" />
                </Form.Group>
                <Form.Group md={4} as={Col} controlId="formGridText">
                <Form.Label>cCourse(BreakFast
                        ,Brunch
                        ,Lunch
                        ,Snack
                        ,Dinner)</Form.Label>
                    <Form.Control 
                    value={recipe.course}
                    onChange={handleInputs}
                    name="course"
                    type="text"
                    placeholder="" />
                </Form.Group>
              
                <Form.Group md={4} as={Col} controlId="formGridText" className="mb-3">
                <Form.Label>Mood(Casual
                    ,Comfort
                    ,Happy
                    ,Family Friendly
                    ,Pocket Friendly)</Form.Label>
                    <Form.Control 
                    value={recipe.mood}
                    onChange={handleInputs}
                    name="mood"
                    type="text"
                    placeholder="" />
                </Form.Group>
                <Form.Group md={4} as={Col} controlId="formGridText" className="mb-3">
                <Form.Label>Diet(Low Fat,Low Calorie,Veg,Vegan)</Form.Label>
                    <Form.Control 
                    value={recipe.diet}
                    onChange={handleInputs}
                    name="diet"
                    type="text"
                    placeholder="" />
                </Form.Group>
                <Form.Group md={4} as={Col} controlId="formGridText" className="mb-3">
                <Form.Label>Skills(Easy,Medium,Hard,Kids)</Form.Label>
                    <Form.Control 
                    value={recipe.skills}
                    onChange={handleInputs}
                    name="skills"
                    type="text"
                    placeholder="" />
                </Form.Group>
                <Button type="submit" onSubmit={handleInputs}>Submit form</Button>
            </Form>
        </div>
    );
}

export default Details;

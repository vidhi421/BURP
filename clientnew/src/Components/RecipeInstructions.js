import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { useState } from 'react'

import { FloatingLabel } from 'react-bootstrap';
function RecipeInstructions(){
    const [info,setInfo]=useState({
        instructions:"", serving:"", time:"", kcal:"", fat:"", protein:"", carbs:"",sugar:"",fibre:""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setInfo({...info, [name]:value});
    }
    return(
        // <Container style={{margin:"10px"}}> 
            
        <Form style={{padding:"50px"}}>
            <h1 style={{ marginBottom:"20px"}}>New Recipe</h1>
            <h2 class="heading2">Instructions</h2>
            <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                value={info.instructions}
                onChange={handleInputs}
                name="instructions"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            
            <hr></hr>
            <h2 class="heading2">Times</h2>
            <Row>
                <Col md={6}>
                    <Form.Label>No. of Servings</Form.Label>
                    <Form.Control 
                    value={info.serving}
                    onChange={handleInputs}
                    name="serving"
                    placeholder="Serves" />
                </Col>
                <Col md={6}>
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Control 
                    value={info.time}
                    onChange={handleInputs}
                    name="time"
                    placeholder="Cooking time" />
                </Col>
            </Row>
            
            <hr></hr>
            <h2 class="heading2">Nutrition</h2>
            <Row>
                <Col md={2}>
                    <Form.Label>KCal</Form.Label>
                    <Form.Control 
                    value={info.kcal}
                    onChange={handleInputs}
                    name="kcal"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fat</Form.Label>
                    <Form.Control
                    value={info.fat}
                    onChange={handleInputs}
                    name="fat"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Protein</Form.Label>
                    <Form.Control 
                    value={info.protein}
                    onChange={handleInputs}
                    name="protein"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control 
                    value={info.carbs}
                    onChange={handleInputs}
                    name="carbs"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Sugar</Form.Label>
                    <Form.Control 
                    value={info.sugar}
                    onChange={handleInputs}
                    name="sugar"
                    placeholder="0"/>
                </Col>
                <Col md={2}>
                    <Form.Label>Fibre</Form.Label>
                    <Form.Control 
                    value={info.fibre}
                    onChange={handleInputs}
                    name="fibre"
                    placeholder="0"/>
                </Col>
            </Row>
            <br/>
            <Button style={{margin:"10px"}} variant="success" type="submit" 
            // onSubmit={handleSubmit}
            >
                Save
            </Button>
            <Button style={{margin:"10px"}} variant="success" type="submit">
                Reset
            </Button>
        </Form>
        // {/* </Container> */}
    );
}
export default RecipeInstructions;
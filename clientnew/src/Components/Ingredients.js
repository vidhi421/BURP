import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
// import { DefaultContext } from 'react-icons'

function Ingredients(){
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("inputFields", inputFields); 
        };

        
        const [inputFields, setInputFields] = useState([
            { Ingredient1: ''}
        ]); 

        const handleChangeInput = (index,event) => {
            const values = [...inputFields];
            values[index][event.target.name]  = event.target.value;
            setInputFields(values);
        }

        const handleAddFields=()=>{
            setInputFields([...inputFields, { Ingredient1:"" }])
        }

        const handleRemoveFields=(index)=>{
            const values=[...inputFields];
            values.splice(index,1);
            setInputFields(values);
        }
    return(
        <Form style={{padding:"50px"}} 
        onSubmit={handleSubmit}
        >
            <h2 class="heading2">Ingredients</h2>
            { inputFields.map((inputFields, index) => (
                <div key={index}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Control 
                            name="Ingredient1"
                            value={inputFields.Ingredient1}
                            placeholder=""
                            onChange={event => handleChangeInput(index,event)}
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
            </Button>
            <Button style={{margin:"10px"}} variant="success" type="submit" 
            onSubmit={handleSubmit}
            >
                Save
            </Button>
        </Form>
    );
}
export default Ingredients;

import './AddRecipe.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
// import { DefaultContext } from 'react-icons'

function Ingredients(){
<<<<<<< HEAD

        // const[check, setCheck]=useState({
        //     author:"", ingredients:[]
        // })
         
        let name,value;
        const handleSubmit = (e) => {
            e.preventDefault();
            name=e.target.name;
            value=e.target.value;
            console.log({...inputFields, [name]:value})
            // console.log("inputFields", inputFields); 
            
        };
=======
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("inputFields", inputFields); 
        };

>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
        
        const [inputFields, setInputFields] = useState([
            { Ingredient1: ''}
        ]); 

<<<<<<< HEAD
        let values;
        const handleChangeInput = (index,event) => {
            values = [...inputFields];
            values[index][event.target.name] = event.target.value;
=======
        const handleChangeInput = (index,event) => {
            const values = [...inputFields];
            values[index][event.target.name]  = event.target.value;
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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
<<<<<<< HEAD
        >   
            {/* <h2 class="heading2">Your name</h2>
                <Form.Group md={6} as={Col} controlId="formGridEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                    value={check.name}
                    onChange={}
                    name="author"
                    type="text" 
                    placeholder="example01@gmail.com" />
                </Form.Group> */}
=======
        >
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
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

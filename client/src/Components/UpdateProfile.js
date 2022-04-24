
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"

function UpdateProfile(){
    return(
        <Container>
            <div style={{alignItems:"center", marginTop:"30px"}} class="logo">
                <img src="./burp-icon.jpg" 
                alt="logo" 
                style={{width:"130px", borderRadius:"5px"}}/>
            </div>
            <Form method="POST" style={{margin:"50px", padding:"15px"}}
            // noValidate validated={validated} 
            // onSubmit={handleSubmit}
            >
                <h1 style={{textAlign:"center"}}> Welcome To BURP</h1>
                <hr></hr>
            
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        // value={user.username}
                        // onChange={handleInputs}
                        name="username"
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    </InputGroup>
                </Form.Group>
                <Row>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Age</Form.Label>
                    <Form.Control 
                    // value={user.age}
                    // onChange={handleInputs}
                    name="age"
                    type="text" placeholder="Age"/>
                    
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control 
                    // value={user.occupation}
                    // onChange={handleInputs}
                    name="occupation"
                    type="text" placeholder="Occupation"/>
                </Form.Group>
                </Row>
                <Button type="submit">Update form</Button>
            </Form>
        </Container>
    );
}

export default UpdateProfile;
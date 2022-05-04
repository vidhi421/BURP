import './LoginPage.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import React from "react"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PasswordChecklist from "react-password-checklist"

function SignUp() {
  const navigate=useNavigate()

  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const [user,setUser] = useState({
      username:"", 
      email:"", 
      password:"", 
      cpassword:"",
      gender:"",
      age:"",
      occupation:""
  });

    

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value});
  }

  const PostData=async(e)=>{
    e.preventDefault();
    const { username, email, password, cpassword,gender,age,occupation }=user;
    const res= await fetch("/SignUpPage",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username, email, password, cpassword,gender,age,occupation
      })
    })
    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("invalid registration")
      console.log("invalid registration")
    }else{
      window.alert("valid registration")
      console.log("valid registration")

      navigate("/LoginPage");
    }

    //const [genderState,SetGenderState] = useState("");


  }
  return (

    <Container>
      <div style={{alignItems:"center", marginTop:"30px"}} class="logo">
        <img src="./burp-icon.jpg" 
          alt="logo" 
          style={{width:"130px", borderRadius:"5px"}}/>
      </div>
      <Form method="POST" style={{margin:"50px", padding:"15px"}}
       noValidate validated={validated} 
       onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center"}}> Welcome To BURP</h1>
        <hr></hr>
      
        <Form.Group controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                value={user.username}
                onChange={handleInputs}
                name="username"
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              
            </InputGroup>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            value={user.email}
            onChange={handleInputs}
            name="email"
            type="email" 
            placeholder="Enter email"
            required/>
            <Form.Control.Feedback type="invalid">
                Please choose a valid email.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            value={user.password}
            onChange={handleInputs}
            name="password"
            type="password" 
            placeholder="Password" 
            required/>
             
			<PasswordChecklist
				rules={["minLength","specialChar","number","capital"]}
				minLength={8}
				value={user.password}
				onChange={(isValid) => {}}
			/>

            <Form.Control.Feedback type="invalid">
                Please choose a Password.
              </Form.Control.Feedback>
              <Form.Label> Re-EnterPassword</Form.Label>
            <Form.Control 
            value={user.cpassword}
            onChange={handleInputs}
            name="cpassword"
            type="password" 
            placeholder="Confirm Password" 
            required/>
            <Form.Control.Feedback type="invalid">
                Please Confirm Password.
              </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Gender</Form.Label>
                <Form.Select 
                  name="gender"
                  onChange={handleInputs}
                  defaultValue="Choose..."
                >
                    <option value="Choose...">Choose...</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Prefer not to say">Prefer not to say</option> 
                </Form.Select>
          </Form.Group> 
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Age</Form.Label>
            <Form.Control 
            value={user.age}
            onChange={handleInputs}
            name="age"
            type="text" placeholder="Age"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Occupation</Form.Label>
            <Form.Control 
            value={user.occupation}
            onChange={handleInputs}
            name="occupation"
            type="text" placeholder="Occupation"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid occupation.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        <Button onClick={PostData} type="submit">Submit form</Button>
      </Form>
    </Container>
    
  );
}

// render(<FormExample />);

export default SignUp;

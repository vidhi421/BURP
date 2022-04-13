import './LoginPage.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// import { BsInstagram} from "react-icons/fa";
const LoginPage = () => {
  const navigate=useNavigate();
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/LoginPage' , {
      method : "POST",
      headers : {
      "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();

    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    } else{
      window.alert("Login successfull")
      navigate("/");
    }
  }


  return (
    <Container>
      <div style={{alignItems:"center"}} class="logo">
        <img src="./burp-icon.jpg" 
          alt="logo" 
          style={{width:"130px", borderRadius:"5px"}}/>
      </div>
      <h1 style={{textAlign:"center"}}>Login to BURP!</h1>
      <div class="wrapper">
      <Form method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
             name="email" 
             type="email" 
            value={email}
             onChange={ (e) => setEmail(e.target.value)}
             placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            name="password" type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
            <br/>
          </Form.Group>
          <Button onClick={loginUser}>Submit</Button>
          <br/><br/>
          <Form.Text >
            Not Registered Yet?            
            <Link to="/SignUpPage">Sign up</Link>
          </Form.Text>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </div>
        
    </Container>
    
  );
}

export default LoginPage;

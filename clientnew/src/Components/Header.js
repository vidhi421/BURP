//now we have to import each component individually
import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom"
// import { BsSearch } from "react-icons/bs";

function Header() {

  return (
        <div  style={{marginBottom:"78px"}} >
        {/* bg="dark" variant="dark"sticky="top" */}
            <Navbar   variant="dark" expand="lg" fixed="top" style={{background:"#506377"}}>
        <Container fluid>
            <Link to="/">
                <img
                    src="./burp-icon.jpg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Link>
            {/* <Link to="/"><img style={{height:"100%", width:"75px", borderRadius:"20px"}} src="./burp-icon.jpg" alt="logo"/></Link> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
               
                {/* <NavDropdown title="Cuisine"  id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">American</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Chinese</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">French</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Italian</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Indian</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Japanese</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Korean</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Mexican</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Spanish</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Thai</Link></NavDropdown.Item>
                </NavDropdown>

        

                <NavDropdown title="Course" id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">BreakFast</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Brunch</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Dessert</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Drinks</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Lunch</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Snack</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Soup-course</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Dinner</Link></NavDropdown.Item>
                </NavDropdown>

        
                <NavDropdown title="Mood" id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Casual</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Comfort</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Happy</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Family Friendly</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Pocket Friendly</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Skill" id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Easy</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Medium</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Hard</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Kids</Link></NavDropdown.Item>
                </NavDropdown>

                
                <NavDropdown title="Diet" id="navbarScrollingDropdown">
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Low Fat</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Low Calorie</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Vegetarian</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Low-salt</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link style={{color:"black", textDecoration:"none"}} to="/">Healthy</Link></NavDropdown.Item>
                    
                </NavDropdown> */}
            </Nav>
            
            <Form className="d-flex">
                <Link to='./FilterRecipe'>
                <Button variant="outline-success"  style={{ background:"white"}}>Search</Button>
                </Link>
            </Form>
            <div>
                {/* <Button style={{marginLeft:"25px", marginRight:"3px"}} variant="outline-success">Sign Up</Button> */}
                <Link to="/LoginPage"><Button style={{marginLeft:"25px", marginRight:"3px" , background:"white"}} variant="outline-success">Login</Button></Link>
                <Link to="/Profile"><Button style={{margin:"3px" , background:"white"}} variant="outline-success" >Profile</Button></Link>
            </div>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        {/* <Container fluid style={{background:"grey"}}>
            hello this is the container
            <div>
                

            </div>

            <div>

            </div>
        </Container> */}

    </div>
  );
}

export default Header;

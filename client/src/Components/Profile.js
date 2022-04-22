import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect , useState } from 'react';
//import HeaderLoggedIn from "../../../BURP/src/Components/HeaderLoggedIn.js"

import { AiOutlineDislike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'

function Profile() {
    const navigate=useNavigate();
    const [userData , setUserData] = useState({}); 

    const  callProfile = async () =>{
        try{
            const res = await fetch('/Profile',{
                method: "GET",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data); 

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
        callProfile();
    },[]);


    return (
        <form method="GET">
        <div>
            {/* <HeaderLoggedIn/> */}
            <Container>
                <div style={{display:"flex" ,justifyContent:"space-between", marginTop:"10px"}}>
                    <h1 >Welcome To BURP!</h1>
                    <Button variant="danger">Log Out</Button>
                </div>
                
                <hr></hr>
                <Row style={{margin:"20px"}}>
                    <Col md={3} style={{ padding:"7px" }}>
                        <img style={{height:"30vh", borderRadius:"50%"}} src="./user.png" alt="profile"/>
                    </Col>
                    
                    <Col md={9} style={{padding:"10px", border:"2px solid grey", borderRadius:" 10px"}}>
                        <h2>{userData.username}</h2>
                        <br/>
                        <Row style={{margin:"10px"}}>
                            <Col md={6}>Email : {userData.email}</Col>
                            <Col md={6}>Occupation :{userData.occupation}</Col>
                            <br/><br/>
                            <Col md={6}>Gender :{userData.gender}</Col>
                            <Col md={6}>Age :{userData.age}</Col>
                        </Row>    
                    </Col>
                </Row>
                <br/>
                
                <Tabs style={{color:"black"}} defaultActiveKey="Added Recipes" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Added Recipes" title="Added Recipes">
                        {/* <Sonnet /> */}
                        {/* <h1>this is the added recipe tab</h1> */}
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img style={{objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            height: "35vh"}}  variant="top" src="./momos.jpg" />
                            <Card.Body>
                                <Card.Title>Momos</Card.Title>
                                <Card.Text>
                                Momos are a popular street food in northern parts of India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.
                                </Card.Text>
                                <Card.Footer style={{textAlign:"right"}}>
                                    <AiOutlineLike/>{' '}<AiOutlineDislike/>
                                </Card.Footer>
                            </Card.Body>
                            
                        </Card>
                        {/* <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="momos.jpg" alt="userImage"/>
                            <Card.Body>
                                <Card.Title>{props.Username}</Card.Title>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> 
                            </Card.Body>
                        </Card> */}
                    </Tab>
                    <Tab eventKey="Favorites" title="Favorites">
                        {/* <Sonnet /> */}
                        {/* <h1> this is the favorites tab</h1> */}
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img 
                            style={{objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            height: "35vh"}} 
                            variant="top" src="./Alfredo.jpeg" />
                            <Card.Body>
                                <Card.Title>Alfredo Pasta</Card.Title>
                                <Card.Text>
                                    The Alfredo Pasta is an Italian pasta dish made using fresh pasta, vegetables, chicken pieces combined with butter, cream and cheese.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{textAlign:"right"}}>
                                <AiOutlineLike/>{' '}<AiOutlineDislike/>
                            </Card.Footer>
                        </Card>
                        {/* <Card  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="Alfredo.jpg" alt="userImage"/>
                            <Card.Body>
                                <Card.Title>{props.Username}</Card.Title>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> 
                            </Card.Body>
                        </Card> */}
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" disabled>
                        <Sonnet />
                    </Tab> */}
                </Tabs>
                <br/>
                <hr></hr>
            </Container>
        </div>
        </form>
      
    );
  }
  
  export default Profile;
  
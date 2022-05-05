import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import { useNavigate ,Link} from 'react-router-dom'
import { useEffect , useState } from 'react';
import '../App.css'
import Add from  './Add.js'
import { useLocation } from 'react-router-dom';
//import { useEffect,useState } from 'react';
import axios from "axios";
import React from "react";

import { BsTrash} from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

function Profile() {

    const location = useLocation()
    const path = location.pathname.split("/")[2];

    const navigate=useNavigate();
    const [userData , setUserData] = useState({}); 

   

    const[myPost, setPost]=useState([]);
    const[myLike, setLike]=useState([]);
    //const[data,setData]=useState({});
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
            //console.log(data);
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


    const  MyLikes = async () =>{
        try{
            const res = await fetch('/likedrecipe',{
                method: "GET",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            // setPost(data);
            setLike(data.recipes); 

        }catch(err){
            console.log(err);
        }
    }

    const  MyRecipes = async () =>{
        try{
            const res = await fetch('/myrecipe',{
                method: "GET",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            // setPost(data);
            setPost(data.recipes); 

        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        callProfile();
        MyRecipes();
        MyLikes();
    },[]);

    const DeleteRecipe = (recipeId)=>{
        fetch(`/deleterecipe/${recipeId}`,{
            method: "DELETE",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include"
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = myPost.filter(item=>{
                return item._id !== result._id
            })
            setPost(newData)
        })
    }


    return (
        <form method="GET">
        <div>
            <Add/>
            <Container>
                <div style={{display:"flex" ,justifyContent:"space-between", marginTop:"10px"}}>
                    <h1 >Welcome To BURP!</h1>
                     <Link to="/Logout"><Button variant="danger">Log Out</Button></Link>
                </div>
                
                <hr></hr>
                <Row style={{margin:"20px", display:"flex", gap:"10px"}}>
                    <Col >
                        <div className="imageContainer">
                            <img style={{position:"absolute",height:"100%",borderRadius:"50%", display:"inline-block"}} 
                            src="./user.png" alt="profile"/>
                            <div class="imageOverlay">
                                <Button style={{margin:"6px"}}>Update Profile</Button>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={9} style={{padding:"10px", border:"2px solid grey", borderRadius:" 10px"}}>
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
                        <Row>
                        {/* <Sonnet /> */}
                        {/* <h1>this is the added recipe tab</h1> */}
                        {/* <Col md={6} lg={3}> */}
                        {
                        myPost.map((item)=>{
                        return(
                        <Col md={6} lg={3}>
                        <Card  style={{ width: '18rem' }}
                       
                        >
                            <Card.Img 
                             onClick={() => {
                                navigate(`${item._id}`);
                                }}
                            style={{objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            height: "35vh"}}  variant="top" src={process.env.REACT_APP_IMAGE_PATH+item.image} />
                            <Card.Body
                             onClick={() => {
                                navigate(`${item._id}`);
                                }}
                            >
                            <Card.Title>{item.title}</Card.Title>
                                <Card.Text style={{
                                    height: "15vh"}}>
                                {item.description}
                                </Card.Text>
                               
                            </Card.Body>
                            <Card.Footer style={{textAlign:"right"}}>
                                <span 
                                     onClick={()=>DeleteRecipe(item._id)}
 
                                     ><BsTrash/></span>{'  '}
                                {/* <AiFillEdit/>{' '}<AiFillEdit onClick={handelDelete}/> */}
                                 <span 
                                    onClick={() => {
                                    navigate(`${item._id}`);
                                        }}
                                     ><AiFillEdit/></span>
                                </Card.Footer>
                            
                        </Card>
                        </Col>
                          )
                        })}
                        </Row>
                        {/* </Col> */}
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
                    <Row>
                        {/* <Sonnet /> */}
                        {/* <h1> this is the favorites tab</h1> */}
                        {
                        myLike.map((item)=>{
                        return(
                        <Col md={6} lg={3}>
                        <Card  style={{ width: '18rem' }}
                        onClick={() => {
                            navigate(`${item._id}`);
                            }}
                        >
                            <Card.Img 
                            style={{objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            height: "35vh"}} 
                            variant="top" src={process.env.REACT_APP_IMAGE_PATH+item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{textAlign:"right"}}>
                                {/* <AiOutlineLike/>{' '}<AiOutlineDislike/> */}
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
                        </Col>
                        )
                      })}
                         </Row>
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
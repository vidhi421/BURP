import Add from './Add.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from "axios";
import React from "react";
//import HeaderLoggedIn from "../../../BURP/src/Components/HeaderLoggedIn.js"
//icons
// import { AiOutlineDislike } from 'react-icons/ai'
// import { BiCommentDetail } from 'react-icons/bi'
// import { FiEdit } from 'react-icons/fi'
// import { AiOutlineLike } from 'react-icons/ai'

import { AiOutlineClockCircle } from "react-icons/ai";
//import { AiFillTags } from "react-icons/ai";
function RecipeInfo() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({})
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getRecipe = async ()=>{
            const res=await axios.get("/"+path);
            // const data = await res.json();
            // console.log(data.postedBy.username)
            //console.log(res.data.postedBy.username)
            setPost(res.data)
        }
        getRecipe()
    },[path]);

    const  makeComment = async (text,recipeId) =>{
        try{
            const res = await fetch('/comment',{
                method: "PUT",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify({
                  recipeId,
                  text
                })
            });
            const result = await res.json();
            console.log(result)
            const newData = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
                 
            })
            setData(newData)
    
        }catch(err){
            console.log(err);
        }
    }
    

    
            return (
        <div>   
           {/* <HeaderLoggedIn/> */}
            <Container style={{marginBottom:"10px"}}>
            
            {/* <div> */}
                <h1 style={{textAlign:"center"}}>{post.title}</h1>
                <Row>
                <Col lg="4" style={{ width: '24rem' , marginRight:'15px'}}>
                    <Card >
                        <Card.Img variant="top" src={process.env.REACT_APP_IMAGE_PATH+post.image} />
                        <Card.Body style={{textAlign:"center"}}>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                            {/* {console.log(post.postedBy)} */}
                            Author: {post.author}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="7" >
                    <br/>
                    <p> {post.description}
                    </p>
                    <br/>
                    <h6>Nutrition</h6>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>KCAL</th>
                                <th>Fat(gram)</th>
                                <th>Protein</th>
                                <th>Carbs</th>
                                <th>Sugars</th>
                                <th>Fibers(gram)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.kcal}</td>
                                <td>{post.fat}</td>
                                <td>{post.protein}</td>
                                <td>{post.carbs}</td>
                                <td>{post.sugar}</td>
                                <td>{post.fibre}</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                    <p><AiOutlineClockCircle/> Cooking time: {post.cooktime} MIN</p>
                    {/* <p><AiFillTags/> #tags</p> */}
                </Col>
                {/* <div style={{textAlign:"right",display:"flex", width:"100px",bottom:"-20%"}}> */}
                {/* <div style={{textAlign:"right"}}>
                    <AiOutlineLike />{' '}<AiOutlineDislike  />{' '}<BiCommentDetail />{' '}<FiEdit />
                </div> */}
                {/* <div >
                    <span style={{height:"30px", width:"30px"}}><AiOutlineLike size="2x"/></span>
                    <span style={{height:"30px", width:"30px"}}><AiOutlineDislike  size="2x"/></span>
                    <span style={{height:"30px", width:"30px"}}><BiCommentDetail size="2x"/></span>
                    <span style={{height:"30px", width:"30px"}}><FiEdit size="2x" /></span>
                </div> */}
                
                {/* <div class="icons">
                    <p style={{height:"30px"}}><AiOutlineLike size="lg"/>{' '}<AiOutlineDislike size="1.5x" />{' '}<BiCommentDetail size="1.5x"/>{' '}<FiEdit size="1.5x"/></p>
                </div> */}
    
                </Row>
                <br/>
                <hr></hr>
                <br/>
                <Row>
                    <Col md="6">
                        <h4>Ingredients</h4>
                            <pre style={{fontFamily:" 'Roboto Slab', serif", fontSize:"16px"}}>
                            {/* <li>2 cups maida</li>
                            <li>1/2 tsp salt</li>
                            <li>1/2 tsp baking powder</li>
                            <li>1 cup carrots, grated</li>
                            <li>1 cup cabbage, grated</li>
                            <li>1 tbsp oil</li>
                            <li>1/2 cup onion, finely chopped</li>
                            <li>1 tsp garlic, chopped</li>
                            <li>1 tsp soya saucesalt</li>
                            <li>1/4 tsp vinegar</li>
                            <li>1/4 tsp black pepper</li> */}
                            {post.ingredients}
                            </pre>
                    </Col>
    
                    <Col md="6">
                        <h4>Procedure</h4>
                        <pre style={{fontFamily:" 'Roboto Slab', serif", fontSize:"16px"}}>
                            {/* <li>Mix the maida, salt and baking powder and knead to a stiff dough with water.</li>
                            <li>Heat oil and add the onion and garlic.</li>
                            <li>Saute over high heat and add the carrot and cabbage. Turn around over high heat till glossy.</li>
                            <li>Take it off the heat and mix in the soya sauce, salt, vinegar and black pepper.</li>
                            <li>Roll the dough thin (translucent) and cut into 4"-5" rounds.</li>
                            <li>Take a round, wet edges and place some filling in the center.</li>
                            <li>Bring edges together to cover the filling. Twist to seal and fill the rest in the same way.</li>
                            <li>Steam for about 10 minutes and serve with soya sauce and chilli sauce.</li> */}
                            {post.instruction}
                        </pre>
                    </Col>
                </Row> 
                <div>
                    <h2>Comments</h2>
                    {
                        post.comments?.map(record=>{
                       return(
                                <h6 key={record._id}><span style={{fontweight:"500"}}>
                                {record.postedBy.username} :  </span>
                                {record.text}
                                </h6>
                            )
                        })
                        //console.log(post.comments)
                     }
                    <p>Have your say here!</p>
                    <br/>
                    <h3>Leave a Comment...</h3>
                    <Form
                     onSubmit={(e)=>{
                        //e.preventDefault();
                        makeComment(e.target[0].value,post._id)
                    }}
                    >
                    <Form.Group className="mb-3" controlId="formGridText">
                        {/* <Form.Label></Form.Label> */}
                        <Form.Control 
                       
                        placeholder="Comment"/>
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                        <Button style={{ marginLeft: "auto" }} variant="success" type="submit"
                         onSubmit={(e)=>{
                            //e.preventDefault();
                            makeComment(e.target[0].value,post._id)
                            //window.location.reload(false)
                        }}
                        >Send</Button>

                    </div>
                    </Form>
                    {/* <Button style={{alignItems:"right"}} variant="success" type="submit">
                        Send
                    </Button> */}
                   
                {/* <br/><br/> */}
                </div>
                <Add/>
            </Container>
        </div>
        

    );
  }
  
  export default RecipeInfo;
  
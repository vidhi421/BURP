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
import { FiEdit } from 'react-icons/fi'
// import { AiOutlineLike } from 'react-icons/ai'

import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";
function RecipeInfo() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({})
    const [data, setData] = useState([]);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [kcal,setKcal] = useState("");
    const [fat,setFat] = useState("");
    const [protein,setProtein] = useState("");
    const [carb,setCarb] = useState("");
    const [sugar,setSugar] = useState("");
    const [fibre,setFibre] = useState("");
    const [time,setTime] = useState("");
    const [ingre,setIngre] = useState("");
    const [pro,setPro] = useState("");

    
    const [updateMode,setupdateMode] = useState(false);
    useEffect(()=>{
        const getRecipe = async ()=>{
            const res=await axios.get("/"+path);
            // const data = await res.json();
            // console.log(data.postedBy.username)
            //console.log(res.data.postedBy.username)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.description)
            setKcal(res.data.kcal)
            setFat(res.data.fat)
            setProtein(res.data.protein)
            setSugar(res.data.sugar)
            setFibre(res.data.fibre)
            setCarb(res.data.carbs)
            setTime(res.data.cooktime)
            setIngre(res.data.ingredients)
            setPro(res.data.instruction)
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

    const handleUpdate = async()=>{
        try{
            await axios.put("/Profile/"+path,{
             title,desc,kcal,fat,protein,carb,sugar,fibre,time,ingre,pro
            });
        window.location.reload(false);
    }catch(err){}
};

    
            return (
        <div>   
           {/* <HeaderLoggedIn/> */}
            <Container style={{marginBottom:"10px"}}>
            
            {/* <div> */}
                {
                    updateMode ? <input  style={{textAlign:"center" , width:"100%"}} type="text" value={title} onChange={(e)=>
                       setTitle(e.target.value) }
                        /> : (
                <h1 style={{textAlign:"center"}}>{post.title}</h1>
                )
                }
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
                    {
                         updateMode ? <textarea style={{width:"100%"}} value={desc}
                         onChange={(e)=>
                            setDesc(e.target.value) }
                         
                         />:(
                    <p> {post.description}
                    </p>
                    )
                    }
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
                                <td>{ updateMode ? <input type="text" value={kcal}
                                onChange={(e)=>
                                    setKcal(e.target.value) }
                                
                                />:(<td>{post.kcal}</td>)}</td>
                                <td>{ updateMode ? <input type="text" value={fat}
                                onChange={(e)=>
                                    setFat(e.target.value) }
                                
                                />:(<td>{post.fat}</td>)}</td>
                                <td>{ updateMode ? <input type="text" value={protein}
                                onChange={(e)=>
                                    setProtein(e.target.value) }
                                
                                />:(<td>{post.protein}</td>)}</td>
                                <td>{ updateMode ? <input type="text" value={carb}
                                onChange={(e)=>
                                    setCarb(e.target.value) }
                                
                                />:(<td>{post.carbs}</td>)}</td>
                                <td>{ updateMode ? <input type="text" value={sugar}
                                onChange={(e)=>
                                    setSugar(e.target.value) }
                                
                                />:(<td>{post.sugar}</td>)}</td>
                                <td>{ updateMode ? <input type="text" value={fibre}
                                onChange={(e)=>
                                    setFibre(e.target.value) }
                                
                                />:(<td>{post.fibre}</td>)}</td>
                                {/* <td>{post.carbs}</td>
                                <td>{post.sugar}</td>
                                <td>{post.fibre}</td> */}
                            </tr>
                            
                        </tbody>
                    </Table>
                    {
                         updateMode ? <input type="text" value={time}
                         onChange={(e)=>
                            setTime(e.target.value) }
                         
                         />:(<p><AiOutlineClockCircle/> Cooking time: {post.cooktime} MIN</p>
                         )
                        }
                    {/* <p><AiFillTags/> #tags</p> */}
                </Col>
                {/* <div style={{textAlign:"right",display:"flex", width:"100px",bottom:"-20%"}}>  */}
                
                 
                 <div style={{textAlign:"right"}}
                  onClick={()=>setupdateMode(true)}
                
                 >
                    <FiEdit />
                </div>
            
                </Row>
                <Form className="d-flex">
                <Button variant="secondary" style={{alignItems:"right"}}
                 onClick={handleUpdate}
               
                 
                 >Update</Button>
                </Form>
                <br/>
                <hr></hr>
                <br/>
                <Row>
                    <Col md="6">
                        <h4>Ingredients</h4>
                        {
                         updateMode ? <textarea  style={{width:"100%",height:"50%" }} value={ingre}
                         onChange={(e)=>
                            setIngre(e.target.value) }
                         
                         />:(
                            <pre style={{fontFamily:" 'Roboto Slab', serif", fontSize:"16px"}}>
                            {post.ingredients}
                            </pre>
)
}
                    </Col>
    
                    <Col md="6">
                        <h4>Procedure</h4>
                        {
                         updateMode ? <textarea  style={{width:"100%",height:"50%" }} type="text" value={pro}
                         onChange={(e)=>
                            setPro(e.target.value) }
                         
                         />:(
                        <pre style={{fontFamily:" 'Roboto Slab', serif", fontSize:"16px"}}>
                            {post.instruction}
                        </pre>
                        )
                    }
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
  
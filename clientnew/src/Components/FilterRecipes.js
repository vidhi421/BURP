
import { useState ,useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
//import data from './Recipe.json'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
//import {createContext} from "react";

//icons
import { FcSearch } from "react-icons/fc";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BsHandThumbsDown } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";

function FilterRecipes(){
    // rec represents single object
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [userData , setUserData] = useState({}); 
    const navigate=useNavigate()
    //const UserContext=createContext();

    //const {state,dispatch} =useContext(UserContext)


    // useEffect(() => {
    //     fetch('/allrecipe')
    //     .then(res=>res.json())
    //     .then(result=>{
    //         setData(result.recipes)
    //     })
    // },[]);

    const  AllRecipes = async () =>{
        try{
            const res = await fetch('/allrecipe',{
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
            setData(data.recipes)

        }catch(err){
            console.log(err);
        }
    }
  
    const  LikedRecipes = async (id) =>{
        try{
            const res = await fetch('/like',{
                method: "PUT",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify({
                  recipeId:id
                })
            });
    
            const result2 = await res.json();

            const newData = data.map(item=>{
                if(item._id===result2._id){
                    return result2
                }else{
                    return item
                }
                
            })
            setData(newData)
    
        }catch(err){
            console.log(err);
        }
    }
    
    const  UnLikedRecipes = async (id) =>{
      try{
          const res = await fetch('/unlike',{
              method: "PUT",
              headers:{
                  Accept:"application/json",
                  "Content-type":"application/json"
              },
              credentials:"include",
              body:JSON.stringify({
                recipeId:id
              })
          });
    
          const result2 = await res.json();
          //console.log(data);

          const newData = data.map(item=>{
              if(item._id===result2._id){
                  return result2
              }else{
                  return item
              }
             
          })
          setData(newData)
          
    
      }catch(err){
          console.log(err);
      }
    }

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
        }
    }

    useEffect(() => {
        callProfile();
        AllRecipes();
    },[]);


    return(
        <div>
            <Container fluid style={{padding:"3% 8%"}}>
            <Form className="d-flex" 
                style={{marginBottom:"20px", size:"4px"}}>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                    onChange={(event)=>{
                        setSearchTerm(event.target.value);
                    }}
                    />
                    <span style={{width:"50px"}}><FcSearch size="2x"/></span>
                    {/* <span style={{width:"50px"}}><BiSearchAlt size="2x"/></span> */}
            </Form>
                <Row style={{textAlign:"center"}}>
                    {data.filter((rec)=>{
                        if(searchTerm === ""){
                            return rec
                        }else if(rec.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return rec
                        }
                    }).map((rec) =>                    
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem', margin:"10px" }}
                           
                            >
                                <Card.Img 
                                 onClick={() => {
                                    navigate(`${rec._id}`);
                                    }}
                                style={{objectFit: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                height: "35vh"}} 
                                variant="top" src={process.env.REACT_APP_IMAGE_PATH+rec.image} />
                                <Card.Body
                                 onClick={() => {
                                    navigate(`${rec._id}`);
                                    }}
                                >
                                    <Card.Title>{rec.title}</Card.Title>
                                    <Card.Text
                                    style={{
                                    height: "15vh"}}>
                                        {rec.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{textAlign:"right"}}>
                                    <span style={{color:"red"}}><AiFillHeart/></span>
                                    {rec.likes.includes(userData._id)
                                    ? 
                                     <span
                                     onClick={()=>{UnLikedRecipes (rec._id)}}
                                     ><BsHandThumbsDown/></span>
                                   : 
                                     <span 
                                     onClick={()=>{LikedRecipes(rec._id)}}
 
                                     ><BsHandThumbsUp/></span>
                                    }
                                     <h6>{rec.likes.length} likes</h6>
                                    {/* <span 
                                     onClick={()=>{LikedRecipes(rec._id)}}

                                    ><BsHandThumbsUp/></span>
                                    <span
                                     onClick={()=>{UnLikedRecipes(rec._id)}}
                                    ><BsHandThumbsDown/></span> */}
                                    {/* <span><AiOutlineHeart/></span> */}
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>

        </div>
    );
}

export default FilterRecipes;



import { useState ,useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
//import data from './Recipe.json'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
//import {createContext} from "react";
// import Categories from './Categories'
import Dropdown from 'react-bootstrap/Dropdown'

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

    const [items,setItems]=useState(data);
    const filterMenu=(category)=>{
        const updatedItems=data.filter((curElem)=>{
            return (curElem.cuisine===category || curElem.course===category || curElem.diet===category|| curElem.skills===category|| curElem.mood===category);
        });
        setItems(updatedItems);
        // setData(updatedItems);
        // console.log(updatedItems)
    }


    return(
        <div>
            <Container fluid style={{padding:"3% 8%"}}>
                {/* <Categories filterMenu= {filterMenu} /> */}
                {/*-------------------------categories dropdown menu----------------------- */}
                <div style={{margin:"15px", display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                    <Button variant="success" onClick={()=>setItems(data)}>All</Button>
                    <Dropdown style={{margin:"8px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Cuisine
                        </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={()=>setItems(data)}>All</Dropdown.Item> */}
                                    <Dropdown.Item onClick={()=>filterMenu('America')}>America</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Chinese')}>Chinese</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('French')}>French</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Italian')}>Italian</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Indian')}>Indian</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Japanese')}>Japanese</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Korean')}>Korean</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Mexican')}>Mexican</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Spanish')}>Spanish</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Thai')}>Thai</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>            
                    {/* Course */}
                    <Dropdown style={{margin:"8px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Course
                        </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={()=>setItems(data)}>All</Dropdown.Item> */}
                                    <Dropdown.Item onClick={()=>filterMenu('BreakFast')}>Breakfast</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Brunch')}>Brunch</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Dessert')}>Dessert</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Drinks')}>Drinks</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Lunch')}>Lunch</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Snack')}>Snack</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Soup-course')}>Soup-course</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Dinner')}>Dinner</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown style={{margin:"8px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Mood
                        </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={()=>setItems(data)}>All</Dropdown.Item> */}
                                    <Dropdown.Item onClick={()=>filterMenu('Casual')}>Casual</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Comfort')}>Comfort</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Happy')}>Happy</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Family Friendly')}>Family Friendly</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Pocket Friendly')}>Pocket Friendly</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown style={{margin:"8px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Skill
                        </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={()=>setItems(data)}>All</Dropdown.Item> */}
                                    <Dropdown.Item onClick={()=>filterMenu('Easy')}>Easy</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Medium')}>Medium</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Hard')}>Hard</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Kids')}>Kids</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown style={{margin:"8px"}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Diet
                        </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/* <Dropdown.Item onClick={()=>setItems(data)}>All</Dropdown.Item> */}
                                    <Dropdown.Item onClick={()=>filterMenu('Low Fat')}>Low Fat</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Low Calorie')}>Low Calorie</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Vegetarian')}>Vegetarian</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Low Salt')}>Low Salt</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>filterMenu('Healthy')}>Healthy</Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>
                </div>


            {/* -----------------------search bar-------------------------------------------- */}
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
            {/* --------------------------recipepage-------------------------------- */}
                <Row style={{textAlign:"center"}}>
                    {items.filter((rec)=>{
                        if(searchTerm === ""){
                            return rec
                        }else if(rec.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return rec
                        }
                    }).map((rec) =>                    
                        <Col md={6} lg={3} key={rec._id}>
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


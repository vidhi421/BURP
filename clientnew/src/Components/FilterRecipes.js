
import { useState ,useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
//import data from './Recipe.json'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

//icons
import { FcSearch } from "react-icons/fc";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

function FilterRecipes(){
    // rec represents single object
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/allrecipe')
        .then(res=>res.json())
        .then(result=>{
            setData(result.recipes)
        })
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
                            <Card style={{ width: '18rem', margin:"10px" }}>
                                <Card.Img 
                                style={{objectFit: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                height: "35vh"}} 
                                variant="top" src={process.env.REACT_APP_IMAGE_PATH+rec.image} />
                                <Card.Body>
                                    <Card.Title>{rec.title}</Card.Title>
                                    <Card.Text
                                    style={{
                                    height: "15vh"}}>
                                        {rec.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{textAlign:"right"}}>
                                    {/* <span style={{color:"red"}}><AiFillHeart/></span> */}
                                    <span><AiOutlineHeart/></span>
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
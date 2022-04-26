import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState ,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import data from './Recipe.json'

function CardSlider() {

  const [userData , setUserData] = useState([]); 

  useEffect(() => {
      
      fetch('/allrecipe')
      .then(res=>res.json())
      .then(result=>{
        setUserData(result.recipes)
      })
  },[]);


  return (
    <div>
            <Carousel style={{marginBottom:"20px",height:"500px"}}>
            {
          userData.map((item)=>{
          return(
        <Carousel.Item style={{padding:"25px"}}>
        
          <CardGroup>
         
            <Card style={{padding:"15px 25px 15px 25px",height:"300px"}}>
              <Row>
                <Col>
              
                <Card.Img  style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "40vh"}}  variant="top" src={process.env.REACT_APP_IMAGE_PATH+item.image}/>
              
                </Col>
                <Col>
                <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                <p>{item.description}</p>
                <p>Cooking Time: {item.cooktime} MIN</p>
                <p>Skills: {item.skills}</p>
                <p>cuisine: {item.cuisine}</p>
                </Card.Text>
              </Card.Body>

                </Col>
              </Row>
              </Card>
            
          </CardGroup>
        </Carousel.Item>
        )
        })}
        </Carousel> 
        
    </div>
  );
}

export default CardSlider;


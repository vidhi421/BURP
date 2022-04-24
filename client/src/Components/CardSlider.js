import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from './Recipe.json'
//icons
// import { AiOutlineDislike } from 'react-icons/ai'
// import { AiOutlineLike } from 'react-icons/ai'


function CardSlider() {

  return (
    <div >
      <Carousel style={{marginBottom:"20px"}}>
      {data.map((recipe)=>{
            return(
        <Carousel.Item style={{padding:"25px"}}>
        {/* {data.map((recipe)=>{ */}
        
          <CardGroup>
          
              <Card style={{padding:"15px"}}>
              <Card.Img  style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src={recipe.Image} />
              <Card.Body>
                <Card.Title>{recipe.Title}</Card.Title>
                <Card.Text>{recipe.Description}</Card.Text>
              </Card.Body>
              {/* <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer> */}
              </Card>          
            </CardGroup>
            
            </Carousel.Item>
            )
            })}
          </Carousel>    
        </div>
            
            //   <Card style={{padding:"15px"}}>
            //     <Card.Img style={{objectFit: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center center",
            //     height: "35vh"}}  variant="top" src="./momos.jpg" />
            //     <Card.Body>
            //     <Link to="./RecipeInfo" style={{color:"black",textDecoration:"none"}} ><Card.Title>Momos</Card.Title></Link>
            //       <Card.Text>
            //         Momos are a popular street food in northern parts of India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.
            //       </Card.Text>
            //     </Card.Body>
            //      <Card.Footer style={{textAlign:"right"}}>
            //       <AiOutlineLike/>{' '}<AiOutlineDislike/>
            //     </Card.Footer> 
            //   </Card>
            
            // <Card style={{padding:"15px"}}>
            //   <Card.Img 
            //    style={{objectFit: "cover",
            //    backgroundRepeat: "no-repeat",
            //    backgroundPosition: "center center",
            //    height: "35vh"}} 
            //    variant="top" src="./Alfredo.jpeg" />
            //   <Card.Body>
            //     <Card.Title>Alfredo Pasta</Card.Title>
            //     <Card.Text>
            //       The Alfredo Pasta is an Italian pasta dish made using fresh pasta, vegetables, chicken pieces combined with butter, cream and cheese.
            //     </Card.Text>
            //   </Card.Body>
            //   <Card.Footer style={{textAlign:"right"}}>
            //     <AiOutlineLike/>{' '}<AiOutlineDislike/>
            //   </Card.Footer>
            // </Card>
          
        // })}
  );
}

export default CardSlider;

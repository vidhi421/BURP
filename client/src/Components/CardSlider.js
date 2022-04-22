import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import { useState } from 'react'
import { Link } from 'react-router-dom'

//icons
import { AiOutlineDislike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
// import { BiCommentDetail } from 'react-icons/bi'
// import { FiEdit } from 'react-icons/fi'


function CardSlider() {
  // const [likes,setLikes]=useState(0);
  
  // const [dislikes,setDislikes]=useState(0);

  return (
    <div >
      <Carousel style={{marginBottom:"20px"}}>
        <Carousel.Item style={{padding:"25px"}}>
          <CardGroup>
            <Card style={{padding:"15px"}}>
              <Card.Img  style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="./Cheesy_Vada_Pav_Recipe.jpg" />
              <Card.Body>
                <Card.Title>Cheesy vada pav</Card.Title>
                <Card.Text>
                  It is a Maharashtrian recipe. It is served as cheese vada wrapped inside buns(pav).
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
              <Card style={{padding:"15px"}}>
                <Card.Img style={{objectFit: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "35vh"}}  variant="top" src="./momos.jpg" />
                <Card.Body>
                <Link to="./RecipeInfo" style={{color:"black",textDecoration:"none"}} ><Card.Title>Momos</Card.Title></Link>
                  <Card.Text>
                    Momos are a popular street food in northern parts of India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{textAlign:"right"}}>
                  <AiOutlineLike/>{' '}<AiOutlineDislike/>
                </Card.Footer>
              </Card>
            
            <Card style={{padding:"15px"}}>
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
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item style={{padding:"25px",height:"500px"}}>
          <CardGroup>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="./idli.jpg" />
              <Card.Body>
                <Card.Title>Idli Sambhar</Card.Title>
                <Card.Text>
                  Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="./cholay.jpg" />
              <Card.Body>
                <Card.Title>Cholay</Card.Title>
                <Card.Text>
                  This is a very flavorful recipe from North India, usually eaten with fried bread like bhatura or puri. 
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}} 
              variant="top" src="./pic1.jpg" />
              <Card.Body>
                <Card.Title>Full Indian Thali</Card.Title>
                <Card.Text>
                  Thali
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item>
        {/* <Carousel.Item style={{padding:"25px",height:"500px"}}>
          <CardGroup>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="pic2.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  food
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="pic2.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
            <Card style={{padding:"15px"}}>
              <Card.Img style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "35vh"}}  variant="top" src="pic2.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item> */}
      </Carousel>    
    </div>
  );
}

export default CardSlider;

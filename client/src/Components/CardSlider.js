import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
 import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

//icons
import { AiOutlineDislike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
// import { BiCommentDetail } from 'react-icons/bi'
// import { FiEdit } from 'react-icons/fi'

//require('dotenv').config();

function CardSlider() {

  const [userData , setUserData] = useState([]); 

  // const  callRecipes = async () =>{
  //     try{
  //         const res = await fetch('/allrecipe',{
  //             method: "GET",
  //             headers:{
  //                 Accept:"application/json",
  //                 "Content-type":"application/json"
  //             },
  //             credentials:"include"
  //         });

  //         const data = await res.json();
  //         console.log(data);
  //         setUserData(data); 

  //         if(!res.status === 200){
  //             const error = new Error(res.error);
  //             throw error;
  //         }
  //     }catch(err){
  //         console.log(err);
  //     }
  // }

  useEffect(() => {
      //callRecipes();
      fetch('/allrecipe')
      .then(res=>res.json())
      .then(result=>{
        //console.log(result.recipes[0].image)
        setUserData(result.recipes)
      })
  },[]);


  return (
    <div>
      
       
            <Carousel style={{marginBottom:"20px",height:"600px"}}>
            {
          userData.map((item)=>{
          return(
        <Carousel.Item style={{padding:"25px"}}>
          <CardGroup>
         
            <Card style={{padding:"15px"}}>
              <Card.Img  style={{objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              //http://localhost:7000/public/images/1650821738103_jjk.jpg
              height: "35vh"}}  variant="top" src={process.env.REACT_APP_IMAGE_PATH+item.image}/>
              <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{textAlign:"right"}}>
                <AiOutlineLike/>{' '}<AiOutlineDislike/>
              </Card.Footer>
            </Card>
            {/* // <Card style={{padding:"15px"}}>
            //    <Card.Img style={{objectFit: "cover",
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center center",
            //     height: "35vh"}}  variant="top" src={item.image} />
            //     <Card.Body>
            //     <Link to="./RecipeInfo" style={{color:"black",textDecoration:"none"}} ><Card.Title>{item.title}</Card.Title></Link>
            //       <Card.Text>
            //       {item.description}
            //       </Card.Text>
            //     </Card.Body>
            //     <Card.Footer style={{textAlign:"right"}}>
            //       <AiOutlineLike/>{' '}<AiOutlineDislike/>
            //     </Card.Footer>
            //   </Card>
            
            // <Card style={{padding:"15px"}}>
            //   <Card.Img 
            //    style={{objectFit: "cover",
            //    backgroundRepeat: "no-repeat",
            //    backgroundPosition: "center center",
            //    height: "35vh"}} 
            //    variant="top" src={item.image} />
            //   <Card.Body>
            //     <Card.Title>{item.title}</Card.Title>
            //     <Card.Text>
            //     {item.description}
            //     </Card.Text>
            //   </Card.Body>
            //   <Card.Footer style={{textAlign:"right"}}>
            //     <AiOutlineLike/>{' '}<AiOutlineDislike/>
            //   </Card.Footer>
            // </Card>
          //    )
          //   })
          // } */}
          </CardGroup>
        </Carousel.Item>
        )
        })}
        </Carousel> 
         
      
        {/* <Carousel.Item style={{padding:"25px",height:"500px"}}>
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
        </Carousel.Item> */}
      
        
    </div>
  );
}

export default CardSlider;

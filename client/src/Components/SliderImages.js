import '../App.css'

import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function SliderImages() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }} >
          <Card style={{ width:"190", height:"200"}} className="bg-dark text-white">
            <Card.Img style={{position:"absolute" ,objectFit:"cover" }} src="momos.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <div className='overlayContent'>
                <h2>Share your recipe to the world.</h2>
                <Button style={{padding:"10px"}} variant="secondary">Add Recipe</Button>
              </div>
              
              {/* <Card.Title>Momos</Card.Title> */}
                {/* <Card.Text>
                Momos are a popular street food in northern parts of India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.
                </Card.Text> */}
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }}>
        <Card className="bg-dark text-white">
            <Card.Img style={{position:"absolute" , objectFit:"cover"}}  src="idli.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <div className='overlayContent'>
                <h2>Explore the recipe and try it yourself.</h2>
                <Button style={{padding:"10px"}} variant="secondary">Search</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SliderImages;
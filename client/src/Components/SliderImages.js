import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';

function SliderImages() {
  return (
    <div>
      <Carousel variant="dark">
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }} >
    <Card style={{ width:"190", height:"200"}} className="bg-dark text-white">
      <Card.Img style={{position:"absolute" ,objectFit:"cover" }} src="momos.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Momos</Card.Title>
          <Card.Text>
          Momos are a popular street food in northern parts of India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.
          </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }}>
  <Card className="bg-dark text-white">
      <Card.Img style={{position:"absolute" , objectFit:"cover"}}  src="idli.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Idli-Sambar</Card.Title>
          <Card.Text>
          Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew.
          </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }}>
  <Card className="bg-dark text-white">
      <Card.Img style={{position:"absolute" ,objectFit:"cover"}} src="gulab-jamun.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Gulab-Jamun</Card.Title>
          <Card.Text>
          Gulab jamun is an Indian dessert of fried berry-sized dough balls that are soaked in a sweet, sticky sugar syrup. 
          </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default SliderImages;
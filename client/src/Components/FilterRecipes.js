import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import data from './Recipe.json'

//files

//icons
import { AiOutlineDislike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'

function FilterRecipes(){
    // rec represents single object
    return(
        <div style={{background:"fixed"}}>
            <Container fluid style={{padding:"8%",background:"silver"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((rec) =>                    
                        <Col md={6} lg={3}>
                            <Card style={{ width: '18rem', margin:"10px" }}>
                                <Card.Img 
                                style={{objectFit: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                height: "35vh"}} 
                                variant="top" src={rec.Image} />
                                <Card.Body>
                                    <Card.Title>{rec.Title}</Card.Title>
                                    <Card.Text
                                    style={{
                                    height: "10vh"}}>
                                        {rec.Description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{textAlign:"right"}}>
                                    {rec.Likes}<AiOutlineLike/>{' '}<AiOutlineDislike/>
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
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <div>
      <footer>
        <div style={{background:"grey", color:"white", padding:"30px"}}>
          <Row>
            <Col md="1"></Col>
            <Col md="4"><h2> BURP! </h2></Col>
            <Col md="4"style={{margin:"10px 0"}}><h5>Create|Share|Eat</h5></Col>
            <Col md="3">
                <a style={{ color:"white"}} href="https://www.facebook.com"><FaFacebookF size="2x" style={{margin:"8px 15px" , width:"15px"}}/></a>
                <a style={{ color:"white"}} href="https://twitter.com/?lang=en-in"><AiOutlineTwitter size="2x" style={{margin:"8px 15px" , width:"30px"}}/></a>
                <a style={{ color:"white"}} href="https://www.instagram.com"><AiFillInstagram size="2x" style={{margin:"8px 15px" , width:"30px"}}/></a>
                <a style={{ color:"white"}}  href="http://in.youtube.com/"><AiFillYoutube size="2x" style={{margin:"8px 15px", width:"30px"}}/></a>
            </Col>
          </Row>
        </div>
      </footer>

    </div>
  );
}

export default Footer;

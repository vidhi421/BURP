import "./Add.css"
// import Button from 'react-bootstrap/Button' 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger' 
import Tooltip from 'react-bootstrap/Button' 
import { BsPlusCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom"
function Add() {
    const renderTooltip = (props) => (
        <Tooltip style={{background:"black", color:"white"}} id="button_tooltip" {...props}>
          Add New Recipe
        </Tooltip>
      );
    return (
      <div>
          <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Link to="/addRecipePage">
                <span className="addButton"><BsPlusCircleFill size="3x" /></span>
                </Link>
            </OverlayTrigger>
      </div>
    );
  }
  
  export default Add;
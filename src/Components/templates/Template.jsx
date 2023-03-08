import React, { useState } from 'react'
import './template.css'
import { useNavigate, useParams } from "react-router-dom";

function Template ({ thumbnail, name ,id}){
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const handleUse = () => {
     navigate(`/useTemplate/${id}`);
    };
    return (
      <div  className="col-md-4  col-sm-6 col-6 mb-5 item">
        <div className='card scale-out-item ' 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className="card-img-top"  src={`data:image/jpeg;base64,${thumbnail}`} />
          <div className='card-body eachCard'>
            {
                hovered && 
                    <div className='hover-btn'>
                        <button onClick={handleUse}>Use Template</button>
                        <button>Preview </button>
                    </div>
                
            }
            {/* { hovered && <button>b1</button> }
            { hovered && <button>b2</button> } */}
            <div className='card-title'>{name}</div>
            {/* <button className="btn-primary">
              Use This Template
            </button> */}
          </div> 
            
        </div>
      </div>
    );
  };
  

export default Template


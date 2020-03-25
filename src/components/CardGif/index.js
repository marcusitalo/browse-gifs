import React from 'react';
import { Card, CardImg, Button  } from 'reactstrap';
import '../../index.css';

const CardGif = ({url}) =>(    
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <Card>
                <CardImg top width="100%" src={url} alt="Meme Image" className='imgCard'/>
            </Card>
            </div>
        <div className="flip-card-back">
            <Button onClick={() => {navigator.clipboard.writeText(url)}} >COPY URL</Button>            
        </div>
    </div>
    </div>    
);    
export default CardGif;
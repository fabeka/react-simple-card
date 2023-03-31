import React, { Component} from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';
import Nike from '../Images/Nike.jpg';
import './Card.css';

class SimpleCard extends Component{
    render(){
        return(
            <div className="card_main">
                <div className="img_box">
                     <Image url={Nike} className="img_style"/>
                </div>
                <div className="data">
                    <div className="title_box">
                        <h1><Title title="New Arrival-Nike Sneakers"/></h1>
                    </div>
                    <div className="description_box">
                       <p><Description text="Buy from our latest collections, all kinds of Nike shoes and look good"/></p> 

                        <div className="more_dsc">
                        <h4><Description text="Nike latest sneakers
                        The top-selling athletic sneakers for 2023 are as follows: Nike Air Force 1 Low, Nike Air Max 270, Nike Air Vapormax Plus, Nike Revolution 5, Nike Air Max 97, Adidas NMD R1, Nike 
                        Air Max 90, Nike Air Vapormax Flyknit 3, Jordan I High OG, and Jordan XIII"/></h4>
                        </div>
                        
                    </div>  
                </div>
                
            </div>
            
        )
    }
}
export default SimpleCard;
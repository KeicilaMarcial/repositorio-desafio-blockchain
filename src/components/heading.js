import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';


export default class Heading extends Component{
    
    create(text){
        const heading = document.createElement('div');
        heading.innerText = text;
        heading.classList.add('main-title')
        document.querySelector('body').appendChild(heading);
    }

    render(){
        return(
           <div className="heading">
               <div className = "main-title">
                BLOCk # 
               </div>              
           </div>
        )
    }
}

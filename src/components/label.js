import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';

export default class Label extends Component{
    create(text){
        const label = document.createElement('h4');
        label.innerHTML = text;
        label.classList.add('main-title2')
        document.querySelector('body').appendChild(label)
    }
    render(){
        return(
           <div className="div">
               <h4 className="label"></h4>
           </div>
        )
    }
}

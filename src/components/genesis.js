import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';
import BlockChain from '../blockchain.js'
const blockchain = new BlockChain();
let gen =JSON.stringify(Object.values(blockchain))
export default class Genesis extends Component{

    render(){
        return(
           <div className="genesis">
                <h4>Genesis</h4>
                <div className="main-title">
                 <p>{gen}</p>
               </div>
           </div>
        )
    }
}

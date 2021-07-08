import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';
import BlockChain from '../blockchain.js'
const blockchain = new BlockChain();
const difficulty = blockchain.blocks[0].difficulty.toString();
const nounce = blockchain.blocks[0].nounce.toString();
const timestamp = blockchain.blocks[0].timestamp.toString();
const data = JSON.stringify(Object.values(blockchain.blocks[0].serializedObject)[0]);
const hash = blockchain.blocks[0].hash.toString();

export default class Genesis extends Component{

    render(){
        return(
           <div className="genesis">
                <h4>Genesis</h4>
                <div className="main-title">
                 <p>Difficulty: {difficulty}/   Nounce: {nounce}/   Data: {data}/   Timestamp: {timestamp}</p>
                 <p>Previus Hash: Null</p>
                 <p>Hash: {hash}</p>
               </div>
           </div>
        )
    }
}

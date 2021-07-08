import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';
import BlockChain from '../blockchain.js'
import Heading from './heading.js'
import Label from './label.js'

const heading = new Heading();
const blockchain = new BlockChain();
const label = new Label();
//let n=0;

//const newBlc = '../App.js'

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            difficulty:0,
            data:"",
        }
        this.newBlc=this.newBlc.bind(this)
    }

   /* newBlc(event){
        //this.setState({data : event.target.value})
        console.log('Your input value is: ' + this.state.data)
        console.log('Your input value is: ' + this.state.difficulty)
        blockchain.addBlock(this.state.data,this.state.difficulty)
        n++;
        //let newBlock= JSON.stringify(Object.values(blockchain.blocks.slice(length-1)))
        let index = blockchain.blocks.length;
        let difficulty = blockchain.blocks[index-1].difficulty.toString();
        let nounce = blockchain.blocks[index-1].nounce.toString();
        let timestamp = blockchain.blocks[index-1].timestamp.toString();
        let data = JSON.stringify(Object.values(blockchain.blocks[index-1].serializedObject)[0]);
        let previousHash = blockchain.blocks[index-1].previousHash.toString();
        let hash = blockchain.blocks[index-1].hash.toString();
        let newBlock = `Difficulty: ${difficulty}/  Nounce: ${nounce}/  Data: ${data}/  Timestamp: ${timestamp}\n\nPrevius Hash: ${previousHash}\n\nHash: ${hash}`;
        if(blockchain.blocks.length>1){
            label.create("BLOCK #" + n)
            heading.create(newBlock)
        }
    }*/
    

    render(){
        return(
           <div className="form">
                    <section id="form">
                        <h3>Add new block</h3>
                        <form className="form-group"/>
                        <input type="number" id="difficulty" name="difficulty" placeholder="Type down the difficulty" class="form-control" onChange={(event)=>{this.setState({difficulty:event.target.value})}} required/><br/>
                        <input type="text"  id="data" name="data" placeholder="Data" className="form-control"  onChange={(event)=>{this.setState({data:event.target.value})}} required/><br/>
                        <input type="button"  id="form-bt" value="Mine" className="btn btn-submit" onClick={()=>newBlc({data,difficulty,blockchain})}/>
                        <form/>
                    </section>
           </div>
        )
    }
}




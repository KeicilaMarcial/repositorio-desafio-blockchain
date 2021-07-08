import { HmacSHA1 } from 'crypto-js';
import React, {Component} from 'react';
import BlockChain from '../blockchain.js'
const blockchain = new BlockChain();
import Heading from './heading.js'
const heading = new Heading();
import Label from './label.js'
const label = new Label();
let n=0;

export default class Formjs extends Component{
    constructor(props){
        super(props);
        this.state={
            difficulty:0,
            data:"",

        }
        this.newBlc=this.newBlc.bind(this)
    }

    newBlc(event){
        //this.setState({data : event.target.value})
        console.log('Your input value is: ' + this.state.data)
        console.log('Your input value is: ' + this.state.difficulty)
        blockchain.addBlock( this.state.data,this.state.difficulty)
        n++;
        let newBlock= JSON.stringify(Object.values(blockchain.blocks.slice(length-1)))
        console.log("tam" + blockchain.blocks.length)
        if(blockchain.blocks.length>1){
            label.create("BLOCK #" + n)
            heading.create(newBlock)
           
        }
    }
    

    render(){
        return(
           <div className="form">
                    <section id="form">
                        <h2>Add new block</h2>
                        <form className="form-group"/>
                        <input type="number" id="difficulty" name="difficulty" placeholder="Type down the difficulty" class="form-control" onChange={(event)=>{this.setState({difficulty:event.target.value})}} required/><br/>
                        <input type="text"  id="data" name="data" placeholder="Data" className="form-control"  onChange={(event)=>{this.setState({data:event.target.value})}} required/><br/>
                        <input type="button"  id="form-bt" value="Mine" className="btn btn-submit" onClick={this.newBlc}/>
                        <form/>
                    </section>
           </div>
        )
    }
}

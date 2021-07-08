import React, {Component} from "react";
import Heading from './components/heading.js'
import Form from './components/form.js'
import Label from   './components/label.js'
import Genesis from "./components/genesis.js";
import BlockChain from './blockchain.js'
//const newBlc = (dataBlock, difficultyBlock, blockchain, setBlockchain) =>{
    const newBlc = (dataBlock, difficultyBlock, blockchain) =>{ 
    blockchain.addBlock(dataBlock, difficultyBlock)
    //n++;
   /*let index = blockchain.blocks.length;
    let difficulty = blockchain.blocks[index-1].difficulty.toString();
    let nounce = blockchain.blocks[index-1].nounce.toString();
    let timestamp = blockchain.blocks[index-1].timestamp.toString();
    let data = JSON.stringify(Object.values(blockchain.blocks[index-1].serializedObject)[0]);
    let previousHash = blockchain.blocks[index-1].previousHash.toString();
    */let hash = blockchain.blocks[index-1].hash.toString();
    let newBlock = `Difficulty: ${difficulty}/  Nounce: ${nounce}/  Data: ${data}/  Timestamp: ${timestamp}\n\nPrevius Hash: ${previousHash}\n\nHash: ${hash}`;
    if(blockchain.blocks.length>1){
//        label.create("BLOCK #" + n)
        heading.create(newBlock)
        console.log(blockchain)
    }setBlockchain(blockchain)
}

const App = () =>{

    const [blockchain] = React.useState(new BlockChain())

    return(
        <div className="App">
            <header className="App-header">
                <Form newBlc={()=>{}}/>
                <Heading/>     
                <Label/>
                <Genesis/>
            </header>
        </div>
    )
    
}
export default App;
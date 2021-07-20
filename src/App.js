import React, {Component} from "react";

import Form from './components/form.js'
import Heading from './components/heading.js'
import BlockChain from './blockchain.js'

const App = () =>{

    const [blockchain,setBlockchain] = React.useState( new BlockChain())
    const [blockC,setBlockC]=React.useState(blockchain.blocks)

    console.log("BlockC", blockC);
    return(
        <div className="App">
            <header className="App-header">
                <Form newBlc ={(block)=>{setBlockC([... blockC,blockchain.addBlock(block.data,block.difficulty)])}} />
                 <Heading blockchainList={blockchain}/>
            </header>
        </div>
    )
    
}
export default App;
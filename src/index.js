import BlockChain from './blockchain.js'
import  Blockchain from './blockchain.js'
import Heading from './components/heading.js'

window.onload=function(){
    document.getElementById('form-bt').addEventListener('click',(evt)=>{
        alert("Saving Data")
    })
      // Cria Blockchain
       const data= document.getElementById('data').value
        const difficulty = document.getElementById('difficulty').value
        console.log(data,difficulty);
        const blockchain = new BlockChain();
        blockchain.addBlock(data)
        console.log(blockchain)
        console.log(isValid())

  
      //Loaders
    const heading = new Heading();
    heading.create("BlockChain");
  }
  





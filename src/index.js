import BlockChain from './blockchain.js'
import  Blockchain from './blockchain.js'
import Heading from './components/heading.js'
const blockchain = new BlockChain();
const heading = new Heading();
window.onload=function(){
    document.getElementById("form-bt").onclick = function() {
        const data= document.getElementById('data').value
        const dif = document.getElementById('difficulty').value
        console.log("testando",data, dif)
        blockchain.addBlock(data,dif)
        let newBlock= JSON.stringify(Object.values(blockchain.blocks.slice(length-1)))
        heading.create(newBlock)
    }
    let Genesis =JSON.stringify(Object.values(blockchain))
    heading.create(Genesis);
  
}
  





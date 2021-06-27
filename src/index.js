import block from  './block.js'
import blockchain from './blockchain.js'
import Heading from './components/heading.js'

window.onload=function(){
    document.getElementById('form-bt').addEventListener('click',(evt)=>{
        alert("Saving Data")
    })
    //pegando os dados
    const data= document.getElementById('data').value
    const difficulty = document.getElementById('difficulty').value

  }

//Loaders
const heading = new Heading();
heading.create("BlockChain");




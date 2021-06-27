const  sha256 = require('crypto-js/sha256');
const serialize  = require('serialize-javascript');
//import sha256 from 'crypto-js/sha256'
class Block{
    constructor(previousHash=null,serializedObject=serialize("Genesis"), difficulty=1){
        this.previousHash=previousHash;
        this.difficulty =difficulty;
        this.nounce= 0;
        this.serializedObject=serialize({data: serializedObject});
        this.timestamp=new Date();
        
        this.mine();
    }

    hashing (){
        return sha256(this.previousHash + JSON.stringify(this.serializedObject) + this.timestamp + this.nounce).toString();
    }

    mine(){
        this.hash = this.hashing();
        while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")){
            this.nounce++
            this.hash = this.hashing();
        }
    }
}

module.exports=Block;

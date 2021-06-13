const  sha256 = require('crypto-js/sha256');

class Block{
    constructor(index=0, previousHash=null, serializedObject ="recebe um obj serializado", difficulty=1){
        this.index=index;
        this.previousHash=previousHash;
        this.difficulty =difficulty;
        this.nounce= 0;
        this.serializedObject=serializedObject;
        this.timestamp=new Date();
        
        this.mine();
    }

    hashing (){
        return sha256(this.index + this.previousHash + JSON.stringify(this.serializedObject) + this.timestamp + this.nounce).toString();
    }

    mine(){
        this.hash = this.hashing();
        while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")){
            this.nounce++
            this.hash = this.hashing();
        }
    }
}

const bloco = new Block();
bloco.mine();

module.exports=Block;

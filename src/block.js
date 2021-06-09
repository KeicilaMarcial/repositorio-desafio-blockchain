const  sha256 = require('crypto-js/sha256');
class Block{
    constructor(index=0,previousHash=null,serializedObject ="recebe um obj serializado",  difficulty ="[varias]" ){
        this.index=index;
        this.previousHash=previousHash;
        this.difficulty =difficulty;
        this.nounce=nounce;
        this.serializedObject=serializedObject;
        this.timestamp=new Date();
        
        this.mine();
    }

    hashing (){
        //TDD
    }

    mine(){
        //TDD
    }

    difficulties(){
        //TDD
    }
}module.exports=Block;

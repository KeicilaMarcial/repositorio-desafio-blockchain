const  sha256 = require('crypto-js/sha256');
class Block{
    constructor(index=0,previousHash=null,serializedObject=null,difficulties =[] ){  
        this.index=index;
        this.previousHash=previousHash;
        this.difficulties =difficulties;
        this.serializedObject=serializedObject;
        this.timestamp=new Date();
        this.nounce= Math.floor(Math.random() * 4294967295);
        this.mine();
    }

    hashing (){
        //TDD
    }

    mine(){
        //TDD
        //após minerar  chamar a função difficultiesFunc
    }

    difficultiesFunc(){
        //TDD
    }
}module.exports=Block;

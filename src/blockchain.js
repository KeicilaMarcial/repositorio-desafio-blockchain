const Block = require ('./block')

 class BlockChain{
    constructor(difficulties = "[algumas]"){
        this.blocks= [new Block()];
        this.index=1;
        this.difficulties =dificulties;
    }

    getLastBlock(){
        //TDD
    }
    addBlock(data){
        //TDD
    }

    isValid(){
        //TDD
    }
 }module.exports=BlockChain;
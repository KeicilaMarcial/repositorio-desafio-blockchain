const Block = require ('../src/block')

 class BlockChain{
    constructor(difficulties=[]){
        this.blocks= [new Block()];
        this.index=1;
        this.difficulties =difficulties;
    }

    getLastBlock(){
      
    }
    addBlock(serializedObject){
      
    }
    isValid(){
        //TDD
    }
 }
module.exports=BlockChain;
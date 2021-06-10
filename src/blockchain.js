const Block = require ('../src/block')

 class BlockChain{
    constructor(difficulties=[]){
        this.blocks= [new Block()];
        this.index=1;
        this.difficulties =difficulties;
    }

    getLastBlock(){
      return  this.blocks[this.blocks.length-1]
    }
    addBlock(serializedObject){
       const index = this.index
       const previousHash = this.getLastBlock().hash
       const difficulties = this.difficulties
       const block = new Block(index,previousHash,serializedObject,difficulties)
       this.index++
       this.blocks.push(block)
       console.log(this.blocks)
    }
    isValid(){
        //TDD
    }
 }
module.exports=BlockChain;
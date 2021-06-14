const Block = require ('../src/block')


 class BlockChain{
    constructor(difficulty=2){
        this.blocks= [new Block()];
        this.index=1;
        this.difficulty =difficulty;
    }

    getLastBlock(){
      return  this.blocks[this.blocks.length-1]
    }
    addBlock(serializedObject){
       const previousHash = this.getLastBlock().hash
       const difficulty = this.difficulty
       const block = new Block(previousHash,serializedObject,difficulty)
       this.blocks.push(block)
       console.log(this.blocks)
       return true
    }
    isValid(){
      for (let i = 1; i < this.blocks.length; i++) {
        const currentBlock = this.blocks[i]
        const previousBlock = this.blocks[i - 1]

        if (currentBlock.hash !== currentBlock.hashing()) {
            return false
        }
        if (currentBlock.previousHash !== previousBlock.hash) {
            return false
        }
        if(currentBlock.hash[0]!=='0'){
          return false
        }
      }
      return true
    }
 }
module.exports=BlockChain;



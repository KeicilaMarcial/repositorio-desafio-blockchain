const Block = require ('../src/block')


 class BlockChain{
    constructor(difficulty=0){
        this.blocks= [new Block()];
        this.index=1;
        this.difficulty =difficulty;
    }

    getLastBlock(){
      return  this.blocks[this.blocks.length-1]
    }
    addBlock(serializedObject){
       const index = this.index
       const previousHash = this.getLastBlock().hash
       const difficulty = this.difficulty
       const block = new Block(index,previousHash,serializedObject,difficulty)
       this.index++
       this.blocks.push(block)
       console.log(this.blocks)
    }
    isValid(){
      for (let i = 1; i < this.blocks.length; i++) {
        const currentBlock = this.blocks[i]
        const previousBlock = this.blocks[i - 1]

        if (currentBlock.hash !== currentBlock.hashing()) {
            return false
        }

        if (currentBlock.index !== previousBlock.index + 1) {
            return false
        }

        if (currentBlock.previousHash !== previousBlock.hash) {
            return false
        }
      }
      return true
    }
 }
module.exports=BlockChain;
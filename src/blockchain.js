import Block from '../src/block'


 class BlockChain{
    constructor(){
        this.blocks= [new Block()];
        this.index=1;
       // this.difficulty =difficulty;
    }

    getLastBlock(){
      return  this.blocks[this.blocks.length-1]
    }
    addBlock(serializedObject,difficulty){
       const previousHash = this.getLastBlock().hash
      // const difficulty = this.difficulty
       const block = new Block(previousHash,serializedObject,difficulty)
       if(this.blocks.push(block)){
        console.log(this.blocks)
       return true
       }
       
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
export default BlockChain;



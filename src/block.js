import sha256 from 'crypto-js/sha256';

class Block{
    constructor(previousHash=null,serializedObject=("Genesis"), difficulty=1){
        this.previousHash=previousHash;
        this.difficulty =difficulty;
        this.nounce= 0;
        this.serializedObject=({data: serializedObject});
        this.timestamp=new Date();
        this.mine();
    }

    hashing (){
        return sha256(this.previousHash + JSON.stringify(this.serializedObject) + this.timestamp + this.nounce).toString();
    }

    mine(){
        this.hash = this.hashing();
        let dificuldade = []
       
        for(let i=0;i<this.difficulty;i++){
            dificuldade.push(0)
        }

       // console.log("Mining",this.difficulty)
       // console.log("dificuldade",dificuldade)
         while (this.hash.substring(0, this.difficulty) !== dificuldade.join('')){
            //console.log("hash",this.hash.substring(0, this.difficulty))
            //console.log("dificuldade", dificuldade.join())
            this.nounce++
            this.hash = this.hashing();
        }
       /* while (!(/^0*$/.test(this.hash.substring(0, this.difficulty)))) {
            this.nonce++
            this.hash = this.generateHash()
        }*/
    }
}

export default Block;


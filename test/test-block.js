const expect = require('chai').expect;
const Block = require('../src/block');

describe('Block', function(){
    describe('Hashing', function(){
        context('Returning a hash', function(){
            it('Must return a 64 char string', function(){
                let block = new Block();
                let hash = block.hashing();
                expect(hash).to.have.lengthOf(64);                
            });
        });
    });
    describe('Mine', function(){
        context('Returning a new hash', function(){
            it('Must change the hash to fit dificulty', function(){
                let block = new Block();
                block.mine();
                let hash = block.hash;
                let difficulty = block.difficulty
                console.log(hash)
                expect(hash.substring(0, difficulty)).to.equal(Array(difficulty + 1).join("0"));
            });
        });
    });
});

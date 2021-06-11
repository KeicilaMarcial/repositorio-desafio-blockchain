const expect = require('chai').expect;
const Block = require('../src/Block');

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
});

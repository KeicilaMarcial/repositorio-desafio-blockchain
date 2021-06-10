const chai = require("chai");
const {expect}= require('chai');
const BlockChain = require ('../src/blockchain')
const blockC = new BlockChain()



describe("blockchain", function() {
    context("Functions work", function() {
      context("addBlock function works", function() {
            it('expect a new block to be added into the blockchain', function() {
                expect(blockC.addBlock("Block #1")).to.be
            })
        })

    })
})
    
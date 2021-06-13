const chai = require("chai");
const {expect}= require('chai');
const BlockChain = require ('../src/blockchain')
const blockC = new BlockChain()
const sha256 = require('crypto-js/sha256');
const serializeJavascript = require("serialize-javascript");


describe("blockchain", function() {
    context("Functions work", function() {
      context("addBlock function works", function() {
            it('expect a new block to be added into the blockchain', function() {
                expect(blockC.addBlock("Block #1")).to.be
            })
        })
        context("isValid function works", function() {
            it('expect to check the integraty of the block', function() {
               expect(blockC.isValid()).to.be.true
            })
        })
    })
})
    
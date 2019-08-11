var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test',function(){
    // it('should throw error', function(){
    //     // try {
    //     //     assert.equal(2,3)
    //     // } catch (e){            
    //     // }       
    // })
    it('should deal with objects', function() { 
        // var obj = {name: 'Jon', gender: 'male'}

        // //obj.should.have.property('name');
        // obj.should.have.property('name').equal('Jon');
        var obj = {name: 'Jon', gender: 'male'}
        var obj2 = {name: 'Jon', gender: 'male'}
        obj.should.deep.equal(obj2)

    })
    it('should deal wih null',function(){
        var iAmNull = null;
        should.not.exist(iAmNull)
    })
})
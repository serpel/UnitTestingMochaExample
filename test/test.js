var Calculadora = require('../index');
var assert = require('assert');
var should = require('chai').should();

describe('Calculadora', function(){
    describe('Suma(num1, num2)', function(){
        it('should return 3 when whe add 2 numbers', function() {
            //assert.equal(Calculadora.Suma(1, 2), 3);
            var result = Calculadora.Suma(1, 2);
            result.should.be.a('number');
            result.should.be.equal(3);
        });
    })

    describe('Resta(num1, num2)', function(){
        it('should return 0 when past 2 iqual numbers', function() {
            //assert.equal(Calculadora.Resta(2, 2), 0);
            var result = Calculadora.Resta(2,2);
            result.should.be.a('number');
            result.should.be.equal(0);
        });
    })

    
    describe('Division(num1, num2)', function(){
        it('should return 1 when past 2 iqual numbers', function() {
           // assert.equal(Calculadora.Division(2, 2), 1);
           var result = Calculadora.Division(2,2);
           result.should.be.a('number');
           result.should.be.equal(1);
        });
    })
})

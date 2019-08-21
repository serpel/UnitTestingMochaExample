var Calculadora = require('../index');
var assert = require('assert');


describe('Calculadora', function(){
    describe('Suma(num1, num2)', function(){
        it('should return 3 when whe add 2 numbers', function() {
            assert.equal(Calculadora.Suma(1, 2), 3);
        });
    })

    describe('Resta(num1, num2)', function(){
        it('should return 0 when past 2 iqual numbers', function() {
            assert.equal(Calculadora.Resta(2, 2), 0);
        });
    })

    
    describe('Division(num1, num2)', function(){
        it('should return 1 when past 2 iqual numbers', function() {
            assert.equal(Calculadora.Division(2, 2), 1);
        });
    })
})

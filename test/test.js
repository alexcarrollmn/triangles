const Triangle = require('../Triangle.js');
const expect = require('expect.js');

describe('Triangle', function(){
    describe('scalene', function(){
        var tri = new Triangle([3, 4, 5]);
        console.log(tri.type);
        it('should return scalene with [3, 4, 5]', function(){
            expect(tri.type).to.equal('scalene');
        });
    });
    describe('isosceles', function(){
        var tri = new Triangle([3, 3, 4]);
        console.log(tri.type);
        it('should return isosceles with [3, 3, 4]', function(){
            expect(tri.type).to.equal('isosceles');
        });
    });
    describe('equilateral', function(){
        var tri = new Triangle([3, 3, 3]);
        console.log(tri.type);
        it('should return equilateral with [3, 3, 3]', function(){
            expect(tri.type).to.equal('equilateral');
        });
    });
    describe('not a triangle', function(){
        var tri = new Triangle([1, 1, 4]);
        console.log(tri.type);
        it('should return false with [1, 1, 4]', function(){
            expect(tri.type).to.equal(false);
        });
    });
})
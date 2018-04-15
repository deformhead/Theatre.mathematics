import * as mathematics from '../sources/mathematics.js';

import chai from 'chai';

const expect = chai.expect;

describe('#hypothenuse()', function () {

    it('should return the hypothenuse value of a right-angled triangle', function () {

        expect(mathematics.hypothenuse(0, 0)).to.equal(0);

        expect(mathematics.hypothenuse(1, 1)).to.equal(Math.sqrt(2));
        expect(mathematics.hypothenuse(1, 2)).to.equal(Math.sqrt(5));
        expect(mathematics.hypothenuse(2, 2)).to.equal(2 * Math.sqrt(2));
        expect(mathematics.hypothenuse(4, 2)).to.equal(2 * Math.sqrt(5));
    });
});


describe('#sigmoid()', function () {

    it('should return 0.5 when 0 is given', function () {

        expect(mathematics.sigmoid(0)).to.equal(0.5);
    });

    it('should return a float between 0 and 0.5 when a negative number is given', function () {

        expect(mathematics.sigmoid(-1)).to.equal(0.2689414213699951);
        expect(mathematics.sigmoid(-2)).to.equal(0.11920292202211757);
        expect(mathematics.sigmoid(-42)).to.be.within(0, 0.5);
    });

    it('should return a float between 0.5 and 1 when a positive number is given', function () {

        expect(mathematics.sigmoid(1)).to.equal(0.7310585786300049);
        expect(mathematics.sigmoid(2)).to.equal(0.8807970779778823);
        expect(mathematics.sigmoid(42)).to.be.within(0.5, 1);
    });
});

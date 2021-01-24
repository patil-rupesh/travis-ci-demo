const expect = require('chai').expect
const server = require('../index');

after(async () => {
    await server.close();
});

describe('test', () => {
    it('should return a string', (done) => {
        expect('ci with travis').to.equal('ci with travis');
        done();
    });
});
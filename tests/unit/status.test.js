// tests/unit/status.test.js
import '../test-setup';

describe('GET /status', () => {
  it('should return status 200 and an object with "status" property', (done) => {
    request
      .get('/status')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('status');
        done();
      });
  });
});

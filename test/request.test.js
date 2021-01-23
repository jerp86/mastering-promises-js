const assert = require('assert');
const { describe, it, before, afterEach } = require('mocha');
const { createSandbox } = require('sinon');

const Request = require('../src/request');

describe('Request helpers', () => {
  const timeout = 15;
  let sandbox, request;

  before(() => {
    sandbox = createSandbox();
    request = new Request();
  });

  afterEach(() => sandbox.restore());

  it(`should throw a timeout error when the function has spent more than ${timeout}ms`);

  it('should return ok when promise time is ok');

  it('should return a JSON object after a request');
});

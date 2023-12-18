import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { PassthroughService } from '../../../src/services/passthrough/Passthrough';

describe('test PassthroughService object', () => {
  it('should be an object', () => {
    expect(typeof PassthroughService).toBe('function');
  });
});

describe('test Passthrough', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test passthroughRequest', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=velit&linkedUserId=quo')
        .reply(200, { data: {} });
      return sdk.passthrough
        .passthroughRequest({}, 'velit', 'quo')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=a&linkedUserId=quos')
        .reply(200, { data: {} });
      return expect(async () => await sdk.passthrough.passthroughRequest()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=expedita&linkedUserId=sint')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.passthrough.passthroughRequest({}, 'expedita', 'sint'),
      ).rejects.toThrow();
    });
  });
});

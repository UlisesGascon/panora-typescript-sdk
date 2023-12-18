import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { ConnectionsService } from '../../../src/services/connections/Connections';

describe('test ConnectionsService object', () => {
  it('should be an object', () => {
    expect(typeof ConnectionsService).toBe('function');
  });
});

describe('test Connections', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test handleOauthCallback', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=omnis&code=quia&location=facere')
        .reply(200, { data: {} });
      return sdk.connections
        .handleOauthCallback('omnis', 'quia', 'facere')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=dicta&code=quia&location=porro')
        .reply(200, { data: {} });
      return expect(async () => await sdk.connections.handleOauthCallback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=earum&code=dolorum&location=nobis')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.connections.handleOauthCallback('earum', 'dolorum', 'nobis'),
      ).rejects.toThrow();
    });
  });

  describe('test getConnections', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections')
        .reply(200, { data: {} });
      return sdk.connections.getConnections().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

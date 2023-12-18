import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { MagicLinkService } from '../../../src/services/magicLink/MagicLink';

describe('test MagicLinkService object', () => {
  it('should be an object', () => {
    expect(typeof MagicLinkService).toBe('function');
  });
});

describe('test MagicLink', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test createMagicLink', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/magic-link/create')
        .reply(200, { data: {} });
      return sdk.magicLink.createMagicLink({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getMagicLinks', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev').get('/magic-link').reply(200, { data: {} });
      return sdk.magicLink.getMagicLinks().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getMagicLink', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/magic-link/single?id=4029398643')
        .reply(200, { data: {} });
      return sdk.magicLink.getMagicLink('4029398643').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/magic-link/single?id=9513401327')
        .reply(200, { data: {} });
      return expect(async () => await sdk.magicLink.getMagicLink()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/magic-link/single?id=8310274582')
        .reply(404, { data: {} });
      return expect(async () => await sdk.magicLink.getMagicLink('8310274582')).rejects.toThrow();
    });
  });
});

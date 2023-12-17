import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { AuthService } from '../../../src/services/auth/Auth';

describe('test AuthService object', () => {
  it('should be an object', () => {
    expect(typeof AuthService).toBe('function');
  });
});

describe('test Auth', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test signUp', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/auth/register')
        .reply(200, { data: {} });
      return sdk.auth.signUp({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test signIn', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/auth/login')
        .reply(200, { data: {} });
      return sdk.auth.signIn({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getUsers', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev').get('/auth/users').reply(200, { data: {} });
      return sdk.auth.getUsers().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getApiKeys', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/auth/api-keys')
        .reply(200, { data: {} });
      return sdk.auth.getApiKeys().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test generateApiKey', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/auth/generate-apikey')
        .reply(200, { data: {} });
      return sdk.auth.generateApiKey({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

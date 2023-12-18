import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { LinkedUsersService } from '../../../src/services/linkedUsers/LinkedUsers';

describe('test LinkedUsersService object', () => {
  it('should be an object', () => {
    expect(typeof LinkedUsersService).toBe('function');
  });
});

describe('test LinkedUsers', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test addLinkedUser', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/linked-users/create')
        .reply(200, { data: {} });
      return sdk.linkedUsers.addLinkedUser({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getLinkedUsers', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/linked-users')
        .reply(200, { data: {} });
      return sdk.linkedUsers.getLinkedUsers().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getLinkedUser', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/linked-users/single?id=8180787802')
        .reply(200, { data: {} });
      return sdk.linkedUsers
        .getLinkedUser('8180787802')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/linked-users/single?id=9846280326')
        .reply(200, { data: {} });
      return expect(async () => await sdk.linkedUsers.getLinkedUser()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/linked-users/single?id=6935052515')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.linkedUsers.getLinkedUser('6935052515'),
      ).rejects.toThrow();
    });
  });
});

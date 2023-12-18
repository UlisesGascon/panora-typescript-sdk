import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmContactService } from '../../../src/services/crmContact/CrmContact';

describe('test CrmContactService object', () => {
  it('should be an object', () => {
    expect(typeof CrmContactService).toBe('function');
  });
});

describe('test CrmContact', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=illum&linkedUserId=ab&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContacts('illum', 'ab', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=perspiciatis&linkedUserId=pariatur&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=fugiat&linkedUserId=et&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContacts('fugiat', 'et', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=quam&linkedUserId=natus&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContact({}, 'quam', 'natus', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=cum&linkedUserId=rerum&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=cum&linkedUserId=quisquam&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContact({}, 'cum', 'quisquam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=6649500467')
        .reply(200, { data: {} });
      return sdk.crmContact
        .updateContact('6649500467')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=2078357906')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=4736895021')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact('4736895021')).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/2096980477?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContact('2096980477', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/4880194084?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/1879725231?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContact('1879725231', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=alias&linkedUserId=ipsum&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContacts({}, 'alias', 'ipsum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=debitis&linkedUserId=earum&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=deserunt&linkedUserId=amet&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContacts({}, 'deserunt', 'amet', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});

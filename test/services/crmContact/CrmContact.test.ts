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
        .get('/crm/contact?integrationId=ullam&linkedUserId=dicta&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContacts('ullam', 'dicta', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=natus&linkedUserId=vitae&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=cupiditate&linkedUserId=rem&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContacts('cupiditate', 'rem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=molestiae&linkedUserId=totam&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContact({}, 'molestiae', 'totam', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=maxime&linkedUserId=facere&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=similique&linkedUserId=commodi&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.crmContact.addContact({}, 'similique', 'commodi', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=3705699139')
        .reply(200, { data: {} });
      return sdk.crmContact
        .updateContact('3705699139')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=9164767471')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=9223308870')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact('9223308870')).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/5452782843?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContact('5452782843', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/3734279701?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/2649259193?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContact('2649259193', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=dolore&linkedUserId=incidunt&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContacts({}, 'dolore', 'incidunt', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=deserunt&linkedUserId=ab&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=fugiat&linkedUserId=vero&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContacts({}, 'fugiat', 'vero', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});

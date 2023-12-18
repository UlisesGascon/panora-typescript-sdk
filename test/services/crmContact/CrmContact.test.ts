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
        .get('/crm/contact?integrationId=beatae&linkedUserId=possimus&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContacts('beatae', 'possimus', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=necessitatibus&linkedUserId=rem&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=minima&linkedUserId=explicabo&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContacts('minima', 'explicabo', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=consequatur&linkedUserId=et&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContact({}, 'consequatur', 'et', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=reiciendis&linkedUserId=quos&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=commodi&linkedUserId=laudantium&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.crmContact.addContact({}, 'commodi', 'laudantium', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=8142731399')
        .reply(200, { data: {} });
      return sdk.crmContact
        .updateContact('8142731399')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=9574626891')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=1036934024')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact('1036934024')).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/5969279704?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContact('5969279704', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/4793225126?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/9103630588?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContact('9103630588', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=enim&linkedUserId=officiis&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContacts({}, 'enim', 'officiis', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=a&linkedUserId=officia&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=dignissimos&linkedUserId=totam&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.crmContact.addContacts({}, 'dignissimos', 'totam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});

import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { OrganisationsService } from '../../../src/services/organisations/Organisations';

describe('test OrganisationsService object', () => {
  it('should be an object', () => {
    expect(typeof OrganisationsService).toBe('function');
  });
});

describe('test Organisations', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getOrganisations', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/organisations')
        .reply(200, { data: {} });
      return sdk.organisations.getOrganisations().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createOrganisation', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/organisations/create')
        .reply(200, { data: {} });
      return sdk.organisations.createOrganisation({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

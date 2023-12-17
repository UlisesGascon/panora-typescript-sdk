import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { ProjectsService } from '../../../src/services/projects/Projects';

describe('test ProjectsService object', () => {
  it('should be an object', () => {
    expect(typeof ProjectsService).toBe('function');
  });
});

describe('test Projects', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getProjects', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev').get('/projects').reply(200, { data: {} });
      return sdk.projects.getProjects().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createProject', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/projects/create')
        .reply(200, { data: {} });
      return sdk.projects.createProject({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

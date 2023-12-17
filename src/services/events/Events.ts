import BaseService from '../../BaseService';

export class EventsService extends BaseService {
  async getEvents(): Promise<any> {
    const urlEndpoint = '/events';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}

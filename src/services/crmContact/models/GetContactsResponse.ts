import { ContactResponse } from './ContactResponse';

type Data = ContactResponse;

export interface GetContactsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}

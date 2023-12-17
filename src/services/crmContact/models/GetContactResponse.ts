import { ContactResponse } from './ContactResponse';

type Data = ContactResponse;

export interface GetContactResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}

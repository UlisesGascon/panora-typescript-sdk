import { ContactResponse } from './ContactResponse';

type Data = ContactResponse;

export interface AddContactsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}

import { ContactResponse } from './ContactResponse';

type Data = ContactResponse;

export interface AddContactResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}

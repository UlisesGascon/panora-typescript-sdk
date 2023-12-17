import { Email } from './Email';
import { Phone } from './Phone';

export interface UnifiedContactInput {
  first_name: string;
  last_name: string;
  email_addresses: Email[];
  phone_numbers: Phone[];
  field_mappings: FieldMappings;
}
interface FieldMappings {}

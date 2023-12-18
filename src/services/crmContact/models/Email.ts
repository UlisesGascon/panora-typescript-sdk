export interface Email {
  /**
   * The email address of a contact
   */
  email_address: string;
  /**
   * The email address type of a contact
   */
  email_address_type: string;
  /**
   * The owner type of a the email tied to the contact
   */
  owner_type?: string;
}

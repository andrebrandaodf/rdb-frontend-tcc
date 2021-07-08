import { ContactEnum } from '../enums/contact-enum.enum';

export interface Contact {
  id?: number;
  talkTo: ContactEnum;
  name: string;
  email: string;
  phone: string;
  subjectMatter: string;
  message: string;
}

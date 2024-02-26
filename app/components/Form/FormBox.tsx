import React from 'react';
import { ContactForm } from "@/app/components/Form/ContactForm";
import { MessageImage } from '@/app/components/Images/Message';

export const FormBox: React.FC = () => {
  return (
    <div className="form-box">
      <div className="form-box-image">
        <MessageImage />
      </div>
      <div className='form-box-contact-form'>
        <ContactForm />
      </div>
    </div>
  );
};

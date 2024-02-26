'use client';
import { FormBox } from "@/app/components/Form/FormBox";

// import { useSearchParams } from 'next/navigation'

import "./form.css";

export function Form() {
  // const isColumnLayout = false;
  // const searchParams = useSearchParams();
  // const success = searchParams.has('success');
  return (
    <div className="form-container">
      <FormBox />
    </div>
  );
};



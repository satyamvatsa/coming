import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayzrrrq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='join_form mt-5 p-5 d-flex'>
      
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
        className='join_input'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting} className='join_btn text-white px-5 py-2'>
        Join Us
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
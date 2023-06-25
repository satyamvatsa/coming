import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayzrrrq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-12 col-sm-12 soon_form d-flex justify-content-center'>
          <form onSubmit={handleSubmit} className='join_form mt-5 p-5 d-flex'>
            <div className=''>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder='Email'
                className='join_input py-2'
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          
            <div className=''>
              <button type="submit" disabled={state.submitting} className='join_btn text-white px-5 py-2'>
                Join Us
              </button>
            </div>
          
          </form>
        </div>
        </div>
      
    </>  
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
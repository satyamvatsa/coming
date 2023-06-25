import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayzrrrq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div className='container'>
      <div className='row '>
        <form onSubmit={handleSubmit} className=' d-flex justify-content-center'>
          <div className='join_form mt-5 p-5'>

          
          <div className='mb-3'>
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
          <div className='form_btn d-flex justify-content-center'>
            <button type="submit" disabled={state.submitting} className='join_btn text-white px-5 py-2'>
              Join Us
            </button>
          </div>
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
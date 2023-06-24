import React from 'react';
import { Link } from 'react-router-dom';

const Comingsoon = () => {
  return (
    <>
    <section className='header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 bg-dark py-3 main_nav'>
              <div className='container-xxl'>
                <div className='row'>
                  <div className='col-12 main_logo d-flex justify-content-center'>
                    <Link to=''>
                        <img src='images/logo/Logo-05.png' alt='' width={200}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </>
  )
}

export default Comingsoon
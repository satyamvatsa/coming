import React from 'react';
import { Link } from 'react-router-dom';
import Joinform from './Joinform';

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
                        <img src='images/logo/Logo-05.png' alt='' width={250}/>
                    </Link>
                  </div>
                </div>
                <div className='container content_soon mt-5'>
                    <div className='row '>
                    <div className='col-12 main_logo text-white d-flex justify-content-center'>
                        <h2>
                            Get Ready to Build Your Ultimate Body!
                        </h2>
                        
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 main_logo text-white d-flex justify-content-center'>
                        <p>
                            Coming Soon: Your One-Stop Shop.
                        </p>
                    </div>
                    </div>
                </div>
                
                <div className='row mt-5'>
                  <div className='col-12 main_logo d-flex justify-content-center'>
                    <h1 className='brands'>
                        BRANDS
                    </h1>
                  </div>
                </div>
                <div className='row mt-5'>
                  <div className='col-12 main_logo text-white d-flex justify-content-center'>
                    <Joinform />
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
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
                    <div className='col-12 text-white d-flex justify-content-center'>
                        <h2 className='main_text'>
                            Get Ready to Build Your Ultimate Body!
                        </h2>
                        
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 soon_text text-white d-flex justify-content-center'>
                        <p>
                            Coming Soon: Your One-Stop Shop.
                        </p>
                    </div>
                    </div>
                </div>
               
                
                <div className='row d-flex brand_logos justify-content-center'>
                <div className='row'>
                    <div className='col-12 soon_text text-white d-flex justify-content-center'>
                        <h2 className='brands mt-4'>
                            BRANDS
                        </h2>
                    </div>
                    </div>
                  <div className='col-8 d-flex justify-content-center'>

                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex">
                      <div className="carousel-item active" data-bs-interval="1000">
                        <img src="images/logo/cropped-GMED_logo.png" className="d-block w-100" alt="..." width={100}/>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src="images/logo/cropped-logo-gR-pldcmulx0rtwxidtuvvftyinxambh4kpr3vcnv4lc0.png" className="d-block w-100" alt="..." width={100}/>
                      </div>
                      <div className="carousel-item">
                        <img src="images/logo/cropped-logo.png" className="d-block w-100" alt="..." width={100}/>
                      </div>
                      <div className="carousel-item">
                        <img src="images/logo/infintypharma.png" className="d-block w-100" alt="..." width={100}/>
                      </div>
                    </div>
                  </div>
              



                    
                  </div>
                </div>
                <div className='row mt-5'>
                  <div className='col-12 text-white d-flex justify-content-center'>
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
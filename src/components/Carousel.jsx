import React from 'react';
import luke from '../assets/images/luke.jpg'

function Carousel () {
  return (
      <div className="row mt-5" style={{maxHeight: '40rem'}}>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="tes-box mr-5" style={{backgroundColor: '#0267E1'}}>
              <h3 className="my-4" style={{color: 'white', fontFamily: 'Gugi, cursive', marginLeft: '10%', marginTop: '5%'}}>
              Rama Ibrahim <br></br> <span style={{ fontSize: '18px'}} className="text-warning">Junior Developer</span>
            </h3></div>
          </div>
          <div className="row mt-5 d-flex justify-content-center" style={{maxWidth: '400px'}}>
            <div className="col-md-8 col-10 col-sm-8 col-xs-8 row mt-2 mb-4" style={{fontFamily: 'Gugi, cursive', color: 'white', fontSize: '0.75rem'}}>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="category-box mb-4 text-center pt-3" style={{backgroundColor: '#24292E'}}>
                <i className="fab fa-github fa-4x mb-2"></i> <br></br>
                  <p>GitHub</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="category-box mb-4 text-center pt-3" style={{backgroundColor: '#4C6EF5'}}>
                <i className="fab fa-linkedin fa-4x mb-2"></i> <br></br>
                  <p>LinkedIn</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="category-box text-center pt-3" style={{backgroundColor: '#0267E2'}}>
                <i className="fab fa-facebook fa-4x mb-2"></i> <br></br>
                  <p>FaceBook</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="category-box text-center pt-3" style={{backgroundColor: '#E64658'}}>
                <i className="fab fa-instagram fa-4x mb-2"></i> <br></br>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex flex-row justify-content-end">
          <img className="carousel-image" src={luke}
          alt="ship" height="40%" />
        </div>
        <div className="col-md-6 col-xs-12 mobile-case"><p style={{padding: '0'}}>test</p></div>
      </div>

  )
}

export default Carousel
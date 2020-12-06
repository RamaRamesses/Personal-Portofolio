import React from 'react';
import tie from '../assets/images/tie.gif'

function Projects () {
  return (
    <div className='container m-0'>
      <div className="row">
        <div className="col-md-8">
            <h1>A</h1>
        </div>
        <div className="col-md-4">
          <img className="tie-image shadow-lg mr-5" 
          src={tie} height="40%"/>
        </div>
      </div>
    </div>
  )
}

export default Projects
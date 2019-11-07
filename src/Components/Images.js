import React, { Component } from 'react';

class Images extends Component {
  
    render() {
        return (
    <div className="container-fluid h-100">
            <h1 className="text-center img-gallery">Approve Images</h1>

<div className="row text-center text-lg-left align-items-center justify-content-center">

  <div className="col-lg-3 col-md-4 col-6">
    <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
        </a>
  </div>
  <div className="col-lg-3 col-md-4 col-6">
    <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
        </a>
  </div>
  <div className="col-lg-3 col-md-4 col-6">
    <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
        </a>
  </div>
  <div className="col-lg-3 col-md-4 col-6">
    <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="" />
        </a>
  </div>
  <div className="col-lg-3 col-md-4 col-6">
    <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="" />
        </a>
  </div>
</div>
</div>
        );
    }
}

export default Images;
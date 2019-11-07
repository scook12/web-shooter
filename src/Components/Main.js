import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import phone from './web-iphone.png';

class Main extends Component {
  
    render() {
        return (
            <header className="masthead">
    <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center">
            <div className="col-6 body-text">
                <h1 className="font-weight-bold">Welcome to Web Shooter</h1>
                <p className="sub-title">A web application for auto-uploading and performing QA/QC on photos taken with compatible Canon cameras.
                </p>
                    <GoogleButton
                    type="light"
                    onClick={() => {window.location.href='http://localhost:8000/auth'}}
                    />
            </div>
            <div className="col-4 text-center">
                <img src={phone} className="img-fluid iphone" alt="" />
            </div>
        </div>
    </div>
    <div class="bg-footer text-center py-3">© 2019 Copyright:
            Developer Week Austin
        </div>
    </header>
        );
    }
}

export default Main;
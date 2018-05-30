import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "franchise-section" className = "row justify-content-sm-center">
        <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
            <p className = "ml-5 h1">Waffle Time Franchise Package</p>
            <hr id = "waffle-line" className = "ml-5"/>
            <span id = "franchise-description">
                <p className = "ml-5 mb-0">Package Cost:</p>
                <p className = "ml-5 mb-3">P 250,000.00 (net of taxes)</p>
                <p className = "ml-5 mb-0">Security Deposit:</p>
                <p className = "ml-5 mb-3">P 50,000.00 - refundable upon expiration of the franchise agreement with no interest</p>
                <p className = "ml-5 mb-0">Renewal Fee: </p>
                <p className = "ml-5 mb-3">P 50,000.00</p>
                <p className = "ml-5 mb-0">Franchise Duration: </p>
                <p className = "ml-5 mb-3">Three (3) Years</p>
                <ul>
                  <h6 className = "ml-2">Package Inclusion</h6>

                  <li className = "ml-5">
                  Use of the Waffletime Trade Name Marks
                  </li>
                  <li className = "ml-5">
                  Business Operations System
                  </li>
                  <li className = "ml-5">
                  Mobilization Set-up
                  </li>
                  <li className = "ml-5">
                  Cart and Signage
                  </li>
                  <li className = "ml-5">
                  Equipment and Small Wares
                  </li>
                  <li className = "ml-5">
                  Marketing Support
                  </li>
                  <li className = "ml-5">
                  Operational and Technical Support
                  </li>
                </ul>
              <p className = "ml-5">
                <span className="oi oi-data-transfer-download"></span>
                <a href = "/" className = "ml-1"> Franchise package PDF Format </a>
              </p>
              <div id = "contact-section">
              <p className = "h5 ml-5 mt-4"><span className="oi oi-home"></span> &nbsp; Contact Information </p>
                <p className = "mb-1 ml-5 mt-4"><span className="oi oi-chevron-bottom"></span>&nbsp; Manila Office &nbsp; | &nbsp; # 69 C. Raymundo Avenue Brgy. Caniogan, Pasig City </p>
                <p className = "mb-1 ml-5"><span className="oi oi-chevron-bottom"></span>&nbsp; Iloilo Office &nbsp; | &nbsp; Door 5, Q.H.P. Building, Arsenal St. Iloilo City, 5000, Philippines</p>
                <p className = "mb-1 ml-5"><span className="oi oi-chevron-bottom"></span>&nbsp; Cebu Office &nbsp; | &nbsp; # 338-8G Victor Village, Tres De Abril, Punta Prinsesa, Labangon, Cebu City </p>
                <p className = "mb-1 ml-5"><span className="oi oi-chevron-bottom"></span>&nbsp; Cagayan de Oro Office &nbsp; | &nbsp; 3699 Las Piedras Village, Capisnon, Kauswagan, Cagayan De Oro City</p>
                <p className = "mb-4 ml-5"><span className="oi oi-chevron-bottom"></span>&nbsp; Davao Office &nbsp; | &nbsp; #32B Mariner St., Dopna Vincenta Village, Davao City </p>
                <p className = "ml-5 d-lg-inline d-md-inline d-xl-inline d-none">Waffle Time Inc., © All Rights Reserved 2018</p>
              </div>
          </span>
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mx-auto">
          <img src = {waffywalking} alt = "Walking Waffy" className = "img-fluid mt-5 ml-lg-0 ml-4 ml-md-0 ml-sm-5" />
          <p className = "h6 d-lg-none d-xl-none d-md-none d-sm-inline d-xs-inline mt-5  ml-md-0 ml-sm-5 text-center">Waffle Time Inc., © All Rights Reserved 2018</p>
        </div>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
        <div id = "footer-main">
          <img id = "footer" src = {imgfooter} alt = "Green Grasses! WAOW" className = "img-fluid" />
        </div>
        </div>
      </div>
    )
  }
}

export default Map;

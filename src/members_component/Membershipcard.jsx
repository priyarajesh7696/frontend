import React from 'react'

function Membershipcard() {
  let member = sessionStorage.getItem("name")
  return (
        <div className="membership-card">
          <div className="card-header">
            <img src="../src/assets/logo/logo.jpg" alt="Logo" className="logo" />
            <h2>DIVINE BHARAT CHAMBER OF COMMERCE</h2>
          </div>
          <div className="card-body text-center">
            <div className="member-details">
            <h4>MEMBERSHIP CARD</h4>
              <h5 className='fst-italic text-uppercase link-warning'>{member}</h5>
              <p className='fst-italic text-uppercase'>Member ID: {member}</p>
              <p className='fst-italic text-uppercase'>Membership Level: GOLD </p>
              {/* Add more member details as needed */}
            </div>
            {/* <div className="qr-code">
            
              <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${member}&size=200x200`} alt="QR Code" />
            </div> */}
          </div>
        </div>
      );
    };
    
  

export default Membershipcard
// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";
// import './Bach.css';
// export const Numbers = ({ }) => {
  

  
//   return (
//     <Col lg={12}>
//       <div className="newsletter-bx wow slideInUp">
//         <Row>
//           <Col lg={12} md={6} xl={5}>
//             <h3 className="center-text">Subscribe to our Newsletter & Never miss latest updates</h3>
           
//           </Col>
//           <Col md={6} xl={7}>
//             <form >
//               <div className="new-email-bx">
//                 <input  type="email" placeholder="Email Address"  provider/>
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </div>
//     </Col>
//   )
// }
import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import './Bach.css';

export const Numbers = ({ }) => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      // Afficher l'alerte si l'email est vide
      setShowAlert(true);
    } else {
      // Gérer l'envoi de l'email ici
      setShowAlert(false); // Cacher l'alerte si l'email est valide
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="center-text">subscribe to receive all the news</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              {showAlert && (
                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Email address is required.</span>
                </div>
              )}
              <div className="new-email-bx">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

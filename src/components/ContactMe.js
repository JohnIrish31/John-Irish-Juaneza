import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "../assets/images/contactImg.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactMe = () => {

	// const formInitialDetails = {
	// 	firstName: "",
	// 	lastName: "",
	// 	email: "",
	// 	phone: "",
	// 	message: ""
	// }

	// const [formDetails, setFormDetails] = useState(formInitialDetails);
	// const [buttonText, setButtonText] = useState("Send");
	// const [status, setStatus] = useState({});

	// const onFormUpdate = (category, value) => {
	// 	setFormDetails({
	// 		...formDetails,
	// 		[category] : value
	// 	})
	// }

	// const handleSubmit = async (e) => {
	//     e.preventDefault();
	//     setButtonText("Sending...");
	//     let response = await fetch("http://localhost:5000/contact", {
	//       method: "POST",
	//       headers: {
	//         "Content-Type": "application/json;charset=utf-8",
	//       },
	//       body: JSON.stringify(formDetails),
	//     });
	//     setButtonText("Send");
	//     let result = await response.json();
	//     setFormDetails(formInitialDetails);
	//     if (result.code == 200) {
	//       setStatus({ succes: true, message: 'Message sent successfully'});
	//     } else {
	//       setStatus({ succes: false, message: 'Something went wrong, please try again'});
	//     }
	//   };

	const [status, setStatus] = useState ({});

	const form = useRef();

	  const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_0uwc46k', 'template_t40u9sb', form.current, 'jrzD5QnfD08XiL8z0')
	      .then((result) => {
	          console.log(result.text);
	          e.target.reset();
	          if (result.code == 200) {
	                setStatus({ succes: true, message: 'Something went wrong, please try again later.'});
	              } else {
	                setStatus({ succes: false, message: 'Message sent successfully'});
	              }
	      }, (error) => {
	          console.log(error.text);
	      });
	}


	return(

	 <section className="contact" id="connect">
	      <Container>
	        <Row className="align-items-center">
	          <Col size={12} md={6}>
	            <TrackVisibility>
	              {({ isVisible }) =>
	                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
	              }
	            </TrackVisibility>
	          </Col>
	          <Col size={12} md={6}>
	            <TrackVisibility>
	              {({ isVisible }) =>
	                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
	                <h2>Get In Touch</h2>
	                <form ref={form} onSubmit={sendEmail}>
	                  <Row>
	                    <Col size={12} sm={6} className="px-1">
	                      <input type="text" name="firstName" placeholder="First Name" />
	                    </Col>
	                    <Col size={12} sm={6} className="px-1">
	                      <input type="text" name="lastName" placeholder="Last Name"/>
	                    </Col>
	                    <Col size={12} sm={6} className="px-1">
	                      <input type="email" name="email" placeholder="Email Address" />
	                    </Col>
	                    <Col size={12} sm={6} className="px-1">
	                      <input type="tel" name="phone" placeholder="Phone No."/>
	                    </Col>
	                    <Col size={12} className="px-1">
	                      <textarea rows="6" name="message" placeholder="Message"></textarea>
	                      <button type="submit"><span>Send</span></button>
	                    </Col>
        					{
        	                     status.message &&
        	                     <Col>
        	                       <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
        	                     </Col>
    	                   }
	                  </Row>
	                </form>
	              </div>}
	            </TrackVisibility>
	          </Col>
	        </Row>
	      </Container>
	    </section>

		)
}
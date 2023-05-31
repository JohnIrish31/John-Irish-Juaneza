import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import header from "../assets/images/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Banner = () => {

	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState (false);
	const toRotate = ["Full Stack Web Developer", "MERN Stack Developer"];
	const [text, setText] = useState ("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		},delta)

		return () => { clearInterval(ticker) };
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

		setText(updatedText);

		if(isDeleting){
			setDelta(prevDelta => prevDelta /2)
		}

		if(!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		}else if(isDeleting && updatedText === ""){
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500)
		}
	}

	return (
		<section className="banner" id="home">
		     <Container>
		       <Row className="align-items-center">
		         <Col xs={12} md={6} xl={7}>
		           <TrackVisibility>
		             {({ isVisible }) =>
		             <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
		               <span className="tagline">Welcome to my Space</span>
		               <h1>{`Hi! I am John a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
		                 <p>
						I'm thrilled to introduce myself as a web developer with a passion for crafting visually appealing and user-friendly websites.Through my portfolio, you'll find examples of my work showcasing responsive designs, clean code, and intuitive user interfaces. I'm eager to contribute my skills and collaborate with your team to deliver impactful digital solutions.</p>
		             </div>}
		           </TrackVisibility>
		         </Col>
		         <Col xs={12} md={6} xl={5}>
		           <TrackVisibility>
		             {({ isVisible }) =>
		               <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
		                 <img src={header} alt="Header Img"/>
		               </div>}
		           </TrackVisibility>
		         </Col>
		       </Row>
		     </Container>
		   </section>

	)
}
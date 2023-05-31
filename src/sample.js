sample.js

import Me from "../assets/images/me.png"

export const AboutMe = () => {

	return	(
			<div className="intro p-3" id="aboutMe">
				<div className="intro-left">
					<div className="i-left-wrapper">
						<h2 className="i-hello">Hello Again I'am</h2>
						<h1 className="i-name">John Irish Juaneza</h1>
						<div className="i-title">
							<div className="i-title-wrapper">
								<div className="i-title-item">Full Stack Web Developer</div>
								<div className="i-title-item">MERN Web Developer</div>
								<div className="i-title-item">E-Commerce API</div>
								<div className="i-title-item">Efficient in GitLab & GitHub</div>
								<div className="i-title-item">Efficient in MongoDB</div>
							</div>	
						</div>
						<div className="i-description">
						<p>I am a completer at Zuitt Coding Bootcamp, i undergo to an intensive coding sessions for almost two(2) months where as i learned developing from Front-End to Back-End and up to Full Stack Web Development, Learned a diffrent programming languages and used tons of tools to help me Developed an interactive web designs.</p>
						</div>
					</div>
				</div>
				<div className="intro-right">
					<div id="i-bg"></div>
					<img src={Me} alt="" className="i-img" />
				</div>
			</div>
		)
}
import Me from "../assets/images/me.png"


export const AboutMe = () => {

	const resumeLink = "https://drive.google.com/file/d/17C0Y3DCPtf7VXPC9FW4uenNhqh0UBeKu/view?usp=sharing";

	return(

		<div className="about" id="aboutMe">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={Me} alt="" className="a-img rounded" />
				</div>
			</div>
			<div className="a-right">
				<div className="a-right-wrapper">
					<h2 className="a-hello">Hello Again I'am</h2>
					<h1 className="a-name">John Irish Juaneza</h1>
					<div className="a-title">
						<div className="a-title-wrapper">
							<div className="a-title-item">Full Stack Web Developer</div>
							<div className="a-title-item">MERN Web Developer</div>
							<div className="a-title-item">E-Commerce API</div>
							<div className="a-title-item">React Js</div>
							<div className="a-title-item">Efficient in MongoDB</div>
						</div>	
					</div>
					<div className="a-description">
					<p>I am a completer at Zuitt Coding Bootcamp, I undergo to an intensive coding sessions for almost two(2) months whereas i learned developing from Front-End to Back-End and up to Full Stack Web Development, Learned a different programming languages and used tons of tools to help me Developed an interactive web designs.</p>
					</div>
					<div>
					      <p>
					        You can find my resume&nbsp;
					        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
					          <button id="btn-resume">Download</button>
					        </a>
					        &nbsp;here.
					      </p>
					    </div>
				</div>
			</div>
		</div>

		)
}
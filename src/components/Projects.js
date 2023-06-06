import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import Card1 from "../assets/images/card1.svg"
import Card2 from "../assets/images/card2.svg"
import Card3 from "../assets/images/card3.svg"

export const Projects = () => {

	const Capstone1 = "https://johnirish31.github.io/mockPortfolio/"
	const Capstone2 = "https://gitlab.com/b279-juaneza/backend/-/tree/master/CAPSTONE2-API"
	const Capstone3 = "https://fullstack-ebon.vercel.app/"

	const projects = [
		{
		     title1: "Front-End Development",
		     description: "In this Capstone1, I used all what i learned in HTML, CSS, and BOOTSTRAP in Zuitt Bootcamp, I built an static web page it is my Mock personal portfolio",
		     imgUrl: Card1,
		   },
		   {
		     title: "Back-End Development",
		     description: "In this Capstone2, I built an API using node, node Express and store it in MongoDb and Learned CRUD Operations, I also used POSTMAN for my Back-End to see wether it's working or not.",
		     imgUrl: Card2,
		   },
		   {
		     title: "Full Stack Web Development/MERN Stack Development",
		     description: "Finally in this Capstone3, I created an E-Commerce Web with different pages and rendered properlly. Using the REACT JS i manage to design and fetch the Back-End at Capstone2 and secure the data of users in MongoDb using CRUD Operations",
		     imgUrl: Card3,
		   }

		];

	return(

	<section className="project" id="projects">
 	<Container>
 		<Row>
 			<Col>
			   <h2>Projects</h2>
			   <p>Here are some of Capstone I've Done during my intensive Training Bootcamp in Zuitt</p>
			   <p>If you want to see my works please click these buttons <br/>
			   				<a href={Capstone1} target="_blank" rel="noopener noreferrer">
					          <button id="btn-capstone">Capstone1</button>
					        </a>
					        <a href={Capstone2} target="_blank" rel="noopener noreferrer">
					          <button id="btn-capstone">Capstone2</button>
					        </a>
					        <a href={Capstone3} target="_blank" rel="noopener noreferrer">
					          <button id="btn-capstone">Capstone3</button>
					        </a>
					        </p>
			   <Tab.Container id="projects-tabs" defaultActiveKey="first">
			   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
			         <Nav.Item>
			           <Nav.Link eventKey="first">CAPSTONES</Nav.Link>
			         </Nav.Item>
			         <Nav.Item>
			           <Nav.Link eventKey="second">For my Future projects</Nav.Link>
			         </Nav.Item>
		       </Nav>
		       <Tab.Content>
		       		<Tab.Pane eventKey="first">
		       			<Row>
		       				{
		       					projects.map((project, index) => {
		       						return (

		       							<ProjectCards key={index}{...project}/>
		       							
		       							)
		       					})
		       				}
		       			</Row>
		       		</Tab.Pane>
		       		<Tab.Pane eventKey="second">
		       			
		       		</Tab.Pane>
		       </Tab.Content>
		       </Tab.Container>	 				
 			</Col>
 		</Row>
 	</Container>
 	 <img className="background-image-right"></img>
	</section>

		)
}
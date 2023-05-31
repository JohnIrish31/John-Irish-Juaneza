import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbox">
        <img src={imgUrl} />
        <div className="proj-text1">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
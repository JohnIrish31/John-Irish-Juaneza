import Carousel from 'react-bootstrap/Carousel';
import HTML from "../assets/images/logo-html5.png"
import CSS from "../assets/images/logo-css3.png"
import JS from "../assets/images/logo-javascript.png"
import MONGODB from "../assets/images/logo-mongodb.png"
import NODEJS from "../assets/images/logo-nodejs.png"
import EXPRESSJS from "../assets/images/logo-expressjs.png"
import REACT from "../assets/images/logo-react.png"
import HEROKU from "../assets/images/logo-heroku.png"
import GIT from "../assets/images/logo-git.png"
import SUBLIME from "../assets/images/logo-sublime-text-3.png"
import POSTMAN from "../assets/images/logo-postman.png"
import GITLAB from "../assets/images/logo-gitlab-ci-cd.png"


export const Tools =() => {
  return (
    <div fluid id="Tools" className="text-center p-3">
    <div>
      <h3>Core Tools</h3>

      <div>
        <div>
          <img className="t-logo" width="150" src={HTML} fluid />
        </div>
        <div>
          <img className="t-logo" width="150" src={CSS} fluid />
          <img className="t-logo" width="150" src={JS} fluid />
        </div>
      </div>
        <h3 className="d-md-flex justify-content-center">Other Tools</h3>

        <div className="d-flex flex-md-column mt-3">
          <div className="d-md-flex justify-content-center">
              <img className="t-logo" width="150" src={MONGODB} />
              <img className="t-logo" width="150" src={NODEJS} />
              <img className="t-logo" width="150" src={EXPRESSJS} />
              <img className="t-logo" width="150" src={REACT} />
              <img className="t-logo" width="150" src={HEROKU} />
          </div>
          <div className="d-md-flex justify-content-center">
              <img className="t-logo" width="150" src={GIT} />
              <img className="t-logo" width="150" src={SUBLIME} />
              <img className="t-logo" width="150" src={POSTMAN} />
              <img className="t-logo" width="150" src={GITLAB} />
          </div>
        </div>
      </div>
    </div>
  );
}

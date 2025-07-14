import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://www.gigacrc.uliege.be/upload/docs/image/jpeg/2021-12/matthieu_koroma_2021-12-02_11-14-22_115.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/matthieukoroma/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthieu-koroma-49096994/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Matthieu Koroma</h1>
          <p>Chercheur itinérant</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/matthieukoroma/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/matthieu-koroma-49096994/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
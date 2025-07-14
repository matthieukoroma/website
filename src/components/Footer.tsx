import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://www.linkedin.com/in/matthieu-koroma-49096994/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/matthieukoroma" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;
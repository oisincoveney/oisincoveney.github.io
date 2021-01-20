import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkSection.module.css';
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function go(url) {
  if (typeof window !== 'undefined') window.open(url, '_blank')
}

const LinkSection = (props) => (
  <div className={styles.LinkSection}>
    <div onClick={() => go('https:\/\/www.github.com\/oisincoveney')} target="_blank" className={`card col-start-1 col-end-2 ${styles.Button}`}>
      {/* <div id="github-img"><i className="fab fa-github"></i></div> */}
      <FontAwesomeIcon className={styles.IconFormat} icon={faGithub}></FontAwesomeIcon>
      <div className={styles.IconText}>Github</div>
    </div>
    <div onClick={() => go('https:\/\/www.twitter.com\/OisinCoveney')} className={`card col-start-2 col-end-3 ${styles.Button}`}>
      {/* <div id="twitter-img"><i className="fab fa-twitter"></i></div> */}
      <FontAwesomeIcon className={styles.IconFormat + " " + styles.TwitterColor} icon={faTwitter}></FontAwesomeIcon>
      <div className={styles.IconText}>Twitter</div>
    </div>
    <div onClick={() => go('https:\/\/www.linkedin.com\/in\/oisincoveney')}
      className={`card col-start-3 col-end-4 ${styles.Button}`}>
      {/* <div id="linkedin-img"><i className="fab fa-linkedin"></i></div> */}
      <FontAwesomeIcon className={styles.IconFormat + " " + styles.LinkedinColor} icon={faLinkedin}></FontAwesomeIcon>
      <div className={styles.IconText}>LinkedIn</div>
    </div>
  </div>
);

LinkSection.propTypes = {
  // bla: PropTypes.string,
};

LinkSection.defaultProps = {
  // bla: 'test',
};

export default LinkSection;

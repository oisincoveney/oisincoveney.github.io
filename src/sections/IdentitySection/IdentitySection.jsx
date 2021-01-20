import React from 'react';
import PropTypes from 'prop-types';
import styles from './IdentitySection.module.css';
import AdjectiveCloud from '../../components/AdjectiveCloud/AdjectiveCloud';

const IdentitySection = (props) => (
  <div className="IdentitySectionWrapper card">
    <div className={styles.IdentityHeader}>Who am I?</div>
    <div>I am a</div>
    <AdjectiveCloud></AdjectiveCloud>
  </div>
);

IdentitySection.propTypes = {
  // bla: PropTypes.string,
};

IdentitySection.defaultProps = {
  // bla: 'test',
};

export default IdentitySection;

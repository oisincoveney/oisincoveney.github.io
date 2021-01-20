import React from 'react';
import PropTypes from 'prop-types';
import styles from './IdentitySection.module.css';
import AdjectiveCloud from '../../components/AdjectiveCloud/AdjectiveCloud';

const IdentitySection = (props) => (
  <div className="IdentitySectionWrapper card text-center py-10 px-5 overflow-auto">
    <div className={styles.IdentityHeader}>I am</div>
    <AdjectiveCloud textStyling="text-6xl mt-5"></AdjectiveCloud>
  </div>
);

IdentitySection.propTypes = {
  // bla: PropTypes.string,
};

IdentitySection.defaultProps = {
  // bla: 'test',
};

export default IdentitySection;

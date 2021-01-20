import React from 'react';
import PropTypes from 'prop-types';
import WorkCard from '../../components/WorkCard';
//import { Test } from './ResumeSection.styles';

const ResumeSection = ({ data }) => (
  <div className="ResumeSectionWrapper">
    {Object.values(data).map(v =>
      <div key={`outer-${v.company.replace(/\s+/g, '')}`}>
        <WorkCard key={v.company.replace(/\s+/g, '')} data={v}></WorkCard>
      </div>
    )}
  </div>
);

ResumeSection.propTypes = {
  // bla: PropTypes.string,
};

ResumeSection.defaultProps = {
  // bla: 'test',
};

export default ResumeSection;

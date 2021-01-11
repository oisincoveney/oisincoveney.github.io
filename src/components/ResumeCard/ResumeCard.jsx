import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ResumeCard.styles';
import {data} from '../../../public/Oisin_Coveney.resume'



export async function getStaticProps(context) {

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}


const ResumeCard = (props) => (
  <div className="ResumeCardWrapper">
    {JSON.stringify(props.data)}
  </div>
);

ResumeCard.propTypes = {
  // bla: PropTypes.string,
};

ResumeCard.defaultProps = {
  // bla: 'test',
};

export default ResumeCard;

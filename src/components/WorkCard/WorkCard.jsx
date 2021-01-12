import React from 'react';
import PropTypes from 'prop-types';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const WorkCard = ({ data, logo }) => {

  const { company, startDate, endDate, highlights, position, summary, website } = data


  const parseDate = (date) => {
    const m = new Date(date)
    return `${m.toLocaleString('default', {month: "long"})} ${m.getFullYear()}`
  }



  return (<div className="WorkCardWrapper card my-6 p-8 flex flex-row gap-x-10">
    {logo && <div>{logo}</div>}
    <div className="w-1/3">
      <div className="text-2xl font-bold align-middle">
        {company}
        <a href={website} target="_blank" className="text-blue-600">
          <FontAwesomeIcon className="text-blue-600 text-sm pb-1" icon={faLink}></FontAwesomeIcon>
        </a>
      </div>
      <div className="italic text">{position}</div>

      <div>{parseDate(startDate)} to {parseDate(endDate)}</div>
    </div>
    <ul className="w-2/3 col-start-2 col-end-3 row-start-1 row-end-4 list-disc">{highlights.map(v => <li>{v}</li>)}</ul>
  </div>)
};

WorkCard.propTypes = {
  // bla: PropTypes.string,
};

WorkCard.defaultProps = {
  // bla: 'test',
};

export default WorkCard;

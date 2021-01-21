import React from 'react';
import styles from "./WorkCard.module.css"
import { format } from 'date-fns'

const SkillCard = ({ word }) => {
  return <div className="popup-transition border border-gray-200 rounded-full px-5 py-2 mx-1 my-1 font-semibold text-lg hover:shadow-lg">{word}</div>
}


const WorkCard = ({ data }) => {

  const { company, startDate, endDate, highlights, position, skills, location } = data

  return (<div className={styles.WorkCardWrapper + " card"}>
    <div className="flex flex-row">
      <div className="col-start-1 col-end-2 flex-1">
        <div className="text-4xl font-black mb-2">{company}</div>
        <div className="text-2xl font-normal">{position}</div>
      </div>
      {/* <div className="flex flex-col mr-10 items-end">
        <div className="justify-self-end">
          <span>from </span>{format(new Date(startDate), 'MMMM yyyy')}
        </div>
        <div className="justify-self-end">
          <span>to </span>{format(new Date(endDate), 'MMMM yyyy')}
        </div>
      </div> */}
    </div>
    {/* <hr className="mt-6"></hr> */}
    <div className="flex flex-row my-4 justify-start flex-wrap ">
      {skills && skills.map(s => <SkillCard word={s}></SkillCard>)}
    </div>
    {/* <hr className="mb-6"></hr> */}
    <div className="col-span-2">
      <ul className={`${styles.WorkHighlight} list-disc`}>
        {highlights.map(h => {
          return <li className={`text-xl my-2`}>{h + ((h.slice(-1) === '.') ? '' : '.')}</li>
        })}
      </ul>
    </div>
    <hr className="my-5"></hr>
    <div className="flex flex-row justify-between gap-x-2 italic">
      <div className="self-start font-medium">{location}</div>
      <div className="self-end text-right font-medium">
        <span>from </span>{format(new Date(startDate), 'MMMM yyyy')} <span>to </span>{format(new Date(endDate), 'MMMM yyyy')}
      </div>
    </div>

  </div>)
};

WorkCard.propTypes = {
  // bla: PropTypes.string,
};

WorkCard.defaultProps = {
  // bla: 'test',
};

export default WorkCard;

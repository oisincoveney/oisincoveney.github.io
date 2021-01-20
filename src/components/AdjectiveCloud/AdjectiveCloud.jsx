import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AdjectiveCloud.styles';
import { interval } from 'rxjs';
import styles from './AdjectiveCloud.module.css'
import { CSSTransition } from 'react-transition-group'


const adjectives = [
  "public transportation supporter",
  "passionate about helping people",
  "soccer player (when my knees aren't broken)",
  "IPA enthusiast",
  "traveller of unknown places",
  "owner of 2 huskies",
  "front-end engineer",
  "data science master's student",
  "Avid watcher of British panel shows",
  "Loves doing multiplication tables for fun",
  "Irish, Filipino, and American"
]

const Adjective = ({ desc, display }) => (
  <div className={display ? styles.AdjActive : styles.Adjective}>
    {desc}
  </div>
)

const States = Object.freeze({
  HIDDEN: 0,
  IN: 1,
  OUT: 2,
  MID: 3
})

const AdjectiveCloud = (props) => {

  const [adjIdx, setAdjIdx] = useState(0);
  const [animateState, setAnimateState] = useState(States.HIDDEN)
  const [adjective, setAdjective] = useState(null)


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAdjIdx((adjIdx + 1) % adjectives.length)
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [adjIdx])

  useEffect(() => {

    let classes = null

    if (animateState === States.HIDDEN) {

      setTimeout(() => {
        setAnimateState(States.IN)
      }, 350)
      classes = styles.AdjEnter
    }
    else if (animateState === States.IN) {

      setTimeout(() => {
        setAnimateState(States.OUT)
      }, 2000);
      
      classes = styles.AdjActive
    }
    else if (animateState === States.OUT) {

      classes = styles.AdjExit
      setTimeout(() => {
        setAnimateState(States.HIDDEN)
        setAdjIdx((adjIdx + 1) % adjectives.length)
      }, 350)
    }

    setAdjective(
      <div className={classes}>
        {adjectives[adjIdx]}
      </div>
    )

    return () => { }
  }, [animateState])

  return <div className={styles.Wrapper}>
    {adjective}
  </div>
};

AdjectiveCloud.propTypes = {
  // bla: PropTypes.string,
};

AdjectiveCloud.defaultProps = {
  // bla: 'test',
};

export default AdjectiveCloud;

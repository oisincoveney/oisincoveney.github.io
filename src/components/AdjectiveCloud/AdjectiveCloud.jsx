import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AdjectiveCloud.styles';
import { interval } from 'rxjs';
import styles from './AdjectiveCloud.module.css'
import { CSSTransition } from 'react-transition-group'


const adjectives = [
  "a public transportation supporter",
  "passionate about helping people",
  "a soccer player (when my knees aren't broken)",
  "an IPA enthusiast",
  "an urban backpacker",
  "the owner of two huskies",
  "a front-end engineer",
  "a data science master's student",
  "an avid watcher of British panel shows",
  "a multiplication table fiend",
  "Irish, Filipino, and American"
]

const States = Object.freeze({
  HIDDEN: 0,
  IN: 1,
  OUT: 2,
  MID: 3
})

const AdjectiveCloud = ({textStyling}) => {

  const [adjIdx, setAdjIdx] = useState(0);
  const [animateState, setAnimateState] = useState(States.HIDDEN)
  const [adjective, setAdjective] = useState(null)

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

  return <div className={styles.Wrapper + ' ' + textStyling}>
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

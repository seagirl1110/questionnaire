import styles from './styles.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
  const score = useSelector((state) => state.questionnaire.result);

  return (
    <div className={styles.score}>
      <span>Your Score: </span>
      <span>{score}</span>
    </div>
  );
}

export default Result;

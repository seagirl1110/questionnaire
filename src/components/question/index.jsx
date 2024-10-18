import styles from './styles.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseAnswer } from '../../redux/slices/questionnaireSlice';

function Question({ id, question, answerColl, currentAnswer }) {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name: questionId, value: answerId } = evt.target;
    dispatch(chooseAnswer({ questionId, answerId }));
  };

  return (
    <div className={styles.wrapper}>
      <h3>{question}</h3>
      {answerColl.map((item) => (
        <div className={styles.inner} key={item.id}>
          <input
            type="radio"
            value={item.id}
            name={id}
            id={`answer-${item.id}`}
            onChange={handleChange}
            checked={currentAnswer === item.id}
          />
          <label htmlFor={`answer-${item.id}`}>{item.value}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;

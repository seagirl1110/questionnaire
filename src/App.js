import './App.css';
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/question';
import Result from './components/result';
import { submitAnswer } from './redux/slices/questionnaireSlice';

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const questionColl = useSelector((state) => state.questionnaire.data);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitAnswer());
    setIsSubmit(true);
  };

  return (
    <div className="App">
      <h1 className="title">Questionnaire</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        {questionColl.map((item) => (
          <Question key={item.id} {...item} />
        ))}
        <button className="form-btn">Submit</button>
      </form>
      {isSubmit && <Result />}
    </div>
  );
}

export default App;

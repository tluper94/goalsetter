import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, createGoal } from '../features/goals/goalsSlice';

const GoalForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const goalData = { text: text };

    dispatch(createGoal(goalData));
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'></label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;

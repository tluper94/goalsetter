import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalsSlice';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteGoal(goal._id));
  };
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={onClick} className='close'>
        X
      </button>
    </div>
  );
};

export default GoalItem;

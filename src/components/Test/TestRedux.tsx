import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement, incrementByAmount } from '../../store/slices/testSlice';

const TestRedux: React.FC = () => {
  const count = useSelector((state: RootState) => state.test.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Test Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  );
};

export default TestRedux;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { RootState } from '../../store/store';
import { increment, decrement } from '../../store/slices/testSlice';

const TestRedux: React.FC = () => {
  const dispatch = useDispatch();
  const { value, status } = useSelector((state: RootState) => state.test);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Redux Test Component</Typography>
      <Typography variant="body1">Value: {value}</Typography>
      <Typography variant="body2">Status: {status}</Typography>
      <Box sx={{ mt: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => dispatch(increment())}
          sx={{ mr: 1 }}
        >
          Increment
        </Button>
        <Button 
          variant="contained" 
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default TestRedux;

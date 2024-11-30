import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

interface PerformanceCardsProps {
  balance: number;
  isTrading: boolean;
}

const PerformanceCards: React.FC<PerformanceCardsProps> = ({ balance, isTrading }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Balance</Typography>
          <Typography variant="h4"></Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Status</Typography>
          <Typography variant="h4">{isTrading ? 'Trading' : 'Paused'}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PerformanceCards;

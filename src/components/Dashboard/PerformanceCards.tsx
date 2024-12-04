import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

interface PerformanceCardsProps {
  balance: number;
  isTrading: boolean;
  totalProfit: number;
}

const PerformanceCards: React.FC<PerformanceCardsProps> = ({ balance, isTrading, totalProfit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper elevation={3} sx={{ 
          p: 2, 
          borderRadius: 2,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }}>
          <Typography variant="h6" color="textSecondary">Balance</Typography>
          <Typography variant="h4">${balance.toLocaleString()}</Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={4}>
        <Paper elevation={3} sx={{ 
          p: 2, 
          borderRadius: 2,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }}>
          <Typography variant="h6" color="textSecondary">Status</Typography>
          <Typography 
            variant="h4" 
            color={isTrading ? 'success.main' : 'warning.main'}
          >
            {isTrading ? 'Trading' : 'Paused'}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={3} sx={{ 
          p: 2, 
          borderRadius: 2,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }}>
          <Typography variant="h6" color="textSecondary">Total Profit</Typography>
          <Typography 
            variant="h4" 
            color={totalProfit >= 0 ? 'success.main' : 'error.main'}
          >
            ${totalProfit.toLocaleString()}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PerformanceCards;

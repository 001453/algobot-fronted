import React from 'react';
import { Grid, Box } from '@mui/material';
import PerformanceCards from '../components/Dashboard/PerformanceCards';
import PortfolioChart from '../components/Dashboard/PortfolioChart';
import ActivePositions from '../components/Dashboard/ActivePositions';
import { Position } from '../types/position';

const Dashboard: React.FC = () => {
  const balance = 10000;
  const positions: Position[] = [
    { 
      id: '1', 
      pair: 'BTC/USDT', 
      entryPrice: 30000, 
      currentPrice: 31000, 
      amount: 0.1, 
      profit: 100 
    },
    { 
      id: '2', 
      pair: 'ETH/USDT', 
      entryPrice: 2000, 
      currentPrice: 1950, 
      amount: 1, 
      profit: -50 
    },
  ];
  const isTrading = true;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <PerformanceCards balance={balance} isTrading={isTrading} />
          <Box sx={{ mt: 3 }}>
            <PortfolioChart />
          </Box>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <ActivePositions positions={positions} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import PerformanceCards from '../components/Dashboard/PerformanceCards';
import PortfolioChart from '../components/Dashboard/PortfolioChart';
import ActivePositions from '../components/Dashboard/ActivePositions';
import { Position } from '../types';

const Dashboard: React.FC = () => {
  const balance = 10000;
  const positions: Position[] = [
    // ... pozisyon verileri
  ];
  const isTrading = true;

  return (
    <Grid container spacing={3}>
      {/* ... diğer Grid öğeleri */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Active Positions
          </Typography>
          <ActivePositions positions={positions} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
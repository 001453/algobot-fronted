import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import PerformanceCards from './PerformanceCards';
import PortfolioChart from './PortfolioChart';
import ActivePositions from './ActivePositions';
import { Position } from '../types/position'; // Position türünü ayrı bir dosyadan import ediyoruz

interface DashboardProps {
  // Eğer prop'lar eklemek isterseniz buraya ekleyebilirsiniz
}

const Dashboard: React.FC<DashboardProps> = () => {
  const balance = 10000;
  const positions: Position[] = [
    {
      id: '1',
      symbol: 'BTC/USDT',
      entryPrice: 50000,
      currentPrice: 51000,
      amount: 0.1,
      pnl: 100
    },
    {
      id: '2',
      symbol: 'ETH/USDT',
      entryPrice: 3000,
      currentPrice: 3100,
      amount: 1,
      pnl: 100
    }
  ];
  const isTrading = true;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <PerformanceCards
            balance={balance}
            activePositions={positions.length}
            isTrading={isTrading}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Portfolio Performance
          </Typography>
          <PortfolioChart data={positions} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
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
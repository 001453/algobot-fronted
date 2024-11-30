@"
import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import PerformanceCards from '../components/Dashboard/PerformanceCards';
import PortfolioChart from '../components/Dashboard/PortfolioChart';
import ActivePositions from '../components/Dashboard/ActivePositions';
import { Position } from '../types/position';

interface DashboardProps {
  // Eğer props kullanmıyorsanız, bu interface'i kaldırabilirsiniz
}

const Dashboard: React.FC<DashboardProps> = () => {
  // Bu veriler normalde bir API'dan veya state'ten gelecektir
  const balance = 10000;
  const positions: Position[] = [
    // Örnek pozisyonlar
    { id: '1', pair: 'BTC/USDT', entryPrice: '30000', currentPrice: '31000', amount: '0.1', profit: '100' },
    { id: '2', pair: 'ETH/USDT', entryPrice: '2000', currentPrice: '1950', amount: '1', profit: '-50' },
  ];
  const isTrading = true;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Performance Overview
          </Typography>
          <PerformanceCards balance={balance} isTrading={isTrading} />
          <PortfolioChart />
        </Paper>
      </Grid>
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
"@ | Out-File -FilePath .\src\pages\Dashboard.tsx -Encoding utf8
import React, { useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useWebSocket } from '../../hooks/useWebSocket';
import PerformanceCards from './PerformanceCards';
import PortfolioChart from './PortfolioChart';
import ActivePositions from './ActivePositions';
import { Position, PositionType } from '../../types';

interface PortfolioData {
  positions: Position[];
  balance: number;
  isTrading: boolean;
}

const Dashboard: React.FC = () => {
  const wsService = useWebSocket();
  const { data: portfolioData, isLoading } = useQuery<PortfolioData>(['portfolio'], fetchPortfolioData, {
    refetchInterval: 30000,
  });

  const defaultPositions: Position[] = [
    { 
      id: '1', 
      pair: 'BTC/USDT', 
      entryPrice: '30000', 
      currentPrice: '31000', 
      amount: '0.1', 
      profit: '100',
      openTime: new Date(),
      leverage: 1,
      type: 'long'
    },
    { 
      id: '2', 
      pair: 'ETH/USDT', 
      entryPrice: '2000', 
      currentPrice: '1950', 
      amount: '1', 
      profit: '-50',
      openTime: new Date(),
      leverage: 1,
      type: 'short'
    },
  ];

  const positions = portfolioData?.positions || defaultPositions;
  const balance = portfolioData?.balance || 10000;
  const isTrading = portfolioData?.isTrading || true;

  useEffect(() => {
    const handlePortfolioUpdate = (data: PortfolioData) => {
      // Handle real-time portfolio updates
    };

    wsService.subscribe('portfolio-updates', handlePortfolioUpdate);

    return () => {
      wsService.unsubscribe('portfolio-updates');
    };
  }, [wsService]);

  const handlePositionClose = (positionId: string) => {
    // Handle position closing logic
  };

  if (isLoading) {
    return <Box>Loading dashboard data...</Box>;
  }

  const totalProfit = positions.reduce((acc, pos) => acc + Number(pos.profit), 0);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <PerformanceCards 
            balance={balance} 
            isTrading={isTrading} 
            totalProfit={totalProfit}
          />
          <Box sx={{ mt: 3 }}>
            <PortfolioChart positions={positions} />
          </Box>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <ActivePositions 
            positions={positions}
            onPositionClose={handlePositionClose}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

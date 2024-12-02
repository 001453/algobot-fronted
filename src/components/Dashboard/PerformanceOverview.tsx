import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const GradientCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
  color: 'white',
  borderRadius: 16,
  padding: theme.spacing(3),
  height: '100%',
}));

const StatBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 12,
  padding: theme.spacing(2),
  backdropFilter: 'blur(10px)',
}));

const PerformanceOverview = () => {
  return (
    <GradientCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" mb={3}>
            <AccountBalanceWalletIcon sx={{ fontSize: 40, mr: 2 }} />
            <Box>
              <Typography variant="h6">Total Balance</Typography>
              <Typography variant="h4">$45,678.90</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <StatBox>
            <Typography variant="subtitle2">Daily Profit</Typography>
            <Box display="flex" alignItems="center">
              <TrendingUpIcon sx={{ color: '#4caf50', mr: 1 }} />
              <Typography variant="h6">+$1,234.56</Typography>
            </Box>
          </StatBox>
        </Grid>
        <Grid item xs={6}>
          <StatBox>
            <Typography variant="subtitle2">Win Rate</Typography>
            <Typography variant="h6">76.5%</Typography>
          </StatBox>
        </Grid>
      </Grid>
    </GradientCard>
  );
};

export default PerformanceOverview;

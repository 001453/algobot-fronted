import React from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SecurityIcon from '@mui/icons-material/Security';

const StatusCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(3),
  height: '100%',
  border: `1px solid ${theme.palette.divider}`,
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 'bold',
  fontSize: '0.9rem',
}));

const TradingStatus = () => {
  return (
    <StatusCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" mb={3}>
            <AutoGraphIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
            <Typography variant="h6">Trading Status</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1">Bot Status</Typography>
            <StatusChip
              label="Active"
              color="success"
              variant="outlined"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1">Current Strategy</Typography>
            <Typography variant="body1" fontWeight="bold" color="primary">
              MACD Crossover
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <SecurityIcon sx={{ mr: 1, color: 'warning.main' }} />
              <Typography variant="body1">Risk Level</Typography>
            </Box>
            <Typography variant="body1" color="warning.main" fontWeight="bold">
              Medium
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </StatusCard>
  );
};

export default TradingStatus;

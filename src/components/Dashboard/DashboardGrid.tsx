import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  }
}));

const DashboardGrid: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Performance Overview */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            {/* Performance Content */}
          </StyledCard>
        </Grid>

        {/* Trading Status */}
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard>
            {/* Status Content */}
          </StyledCard>
        </Grid>

        {/* Portfolio Chart */}
        <Grid item xs={12} lg={8}>
          <StyledCard>
            {/* Chart Content */}
          </StyledCard>
        </Grid>

        {/* Active Positions */}
        <Grid item xs={12} lg={4}>
          <StyledCard>
            {/* Positions Content */}
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardGrid;

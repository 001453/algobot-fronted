import React from 'react';
import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Position } from '../../types';

interface ActivePositionsProps {
  positions: Position[];
  onPositionClose: (id: number) => void;
}

const PositionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: 12,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const ActivePositions: React.FC<ActivePositionsProps> = ({ positions }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Active Positions
      </Typography>
      
      {positions.map((position) => (
        <PositionCard key={position.id} elevation={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" color="primary">
                  {position.pair}
                </Typography>
                <Chip
                  icon={Number(position.profit) >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
                  label={`${Number(position.profit) > 0 ? '+' : ''}${position.profit}%`}
                  color={Number(position.profit) >= 0 ? 'success' : 'error'}
                  variant="outlined"
                />
              </Box>
            </Grid>
            
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary">
                Entry Price
              </Typography>
              <Typography variant="body1">
                ${Number(position.entryPrice).toLocaleString()}
              </Typography>
            </Grid>
            
            <Grid item xs={6}>
              <Typography variant="body2" color="textSecondary">
                Current Price
              </Typography>
              <Typography variant="body1">
                ${Number(position.currentPrice).toLocaleString()}
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                Amount
              </Typography>
              <Typography variant="body1">
                {position.amount} {position.pair.split('/')[0]}
              </Typography>
            </Grid>
          </Grid>
        </PositionCard>
      ))}
    </Box>
  );
};

export default ActivePositions;

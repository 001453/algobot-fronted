import React from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';

const MarketData = () => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle2">BTC/USDT</Typography>
          <Typography variant="h6">$42,150.00</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2">24s Değişim</Typography>
          <Typography variant="h6" color="success.main">+2.5%</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2">24s Hacim</Typography>
          <Typography variant="h6">$1.2B</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MarketData;

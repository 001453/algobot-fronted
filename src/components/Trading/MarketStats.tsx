import { Box, Typography, Paper } from '@mui/material';

interface MarketStatsProps {
  balance: number;
}

export default function MarketStats({ balance }: MarketStatsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">Available Balance</Typography>
        <Typography variant="h6">${balance.toLocaleString()}</Typography>
      </Paper>
      
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">24h Volume</Typography>
        <Typography variant="h6">$1,234,567</Typography>
      </Paper>
      
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">24h Change</Typography>
        <Typography variant="h6" color="success.main">+2.5%</Typography>
      </Paper>
    </Box>
  );
}

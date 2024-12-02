import React from 'react';
import { Box, Typography, ButtonGroup, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const ChartCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(3),
  height: '400px',
}));

// Sample data - replace with real data
const data = [
  { date: '1/1', value: 4000 },
  { date: '2/1', value: 3000 },
  { date: '3/1', value: 5000 },
  { date: '4/1', value: 2780 },
  { date: '5/1', value: 1890 },
  { date: '6/1', value: 2390 },
  { date: '7/1', value: 3490 },
];

const PortfolioChart = () => {
  return (
    <ChartCard>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Portfolio Performance</Typography>
        <ButtonGroup size="small">
          <Button>1D</Button>
          <Button>1W</Button>
          <Button>1M</Button>
          <Button>1Y</Button>
        </ButtonGroup>
      </Box>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1976d2"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PortfolioChart;

import React, { useState } from 'react';
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
import { Position } from '../../types';

const ChartCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 16,
  padding: theme.spacing(3),
  height: '400px',
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

interface TimeRange {
  label: string;
  days: number;
}

const timeRanges: TimeRange[] = [
  { label: '1D', days: 1 },
  { label: '1W', days: 7 },
  { label: '1M', days: 30 },
  { label: '1Y', days: 365 },
];

interface PortfolioChartProps {
  positions: Position[];
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({ positions }) => {
  const [selectedRange, setSelectedRange] = useState<TimeRange>(timeRanges[2]);

  const data = [
    { date: '1/1', value: 4000 },
    { date: '2/1', value: 3000 },
    { date: '3/1', value: 5000 },
    { date: '4/1', value: 2780 },
    { date: '5/1', value: 1890 },
    { date: '6/1', value: 2390 },
    { date: '7/1', value: 3490 },
  ];

  return (
    <ChartCard>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Portfolio Performance</Typography>
        <ButtonGroup size="small">
          {timeRanges.map((range) => (
            <Button
              key={range.label}
              onClick={() => setSelectedRange(range)}
              variant={selectedRange.label === range.label ? 'contained' : 'outlined'}
            >
              {range.label}
            </Button>
          ))}
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
          <CartesianGrid strokeDasharray="3 3" stroke="#rgba(0, 0, 0, 0.1)" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#666' }}
            axisLine={{ stroke: '#ccc' }}
          />
          <YAxis 
            tick={{ fill: '#666' }}
            axisLine={{ stroke: '#ccc' }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            contentStyle={{ background: '#fff', border: '1px solid #ccc' }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1976d2"
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PortfolioChart;

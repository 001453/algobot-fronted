import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  date: string;
  value: number;
}

interface Position {
  id: string;
  symbol: string;
  entryPrice: number;
  currentPrice: number;
  amount: number;
  pnl: number;
}

interface PortfolioChartProps {
  data: Position[];
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({ data }) => {
  // Positions verilerini chart verilerine dönüştürme
  const chartData: ChartData[] = data.map((position) => ({
    date: position.symbol, // Gerçek uygulamada burada tarih olmalı
    value: position.currentPrice * position.amount
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          formatter={(value: number) => [`$${value.toFixed(2)}`, 'Portfolio Value']}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#2196f3" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PortfolioChart;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '1 Dec', value: 10000 },
  { date: '2 Dec', value: 10500 },
  { date: '3 Dec', value: 10300 },
  { date: '4 Dec', value: 11000 },
  { date: '5 Dec', value: 11200 },
  { date: '6 Dec', value: 11100 },
  { date: '7 Dec', value: 11500 },
];

export default function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          formatter={(value) => [`$${value}`, 'Portfolio Value']}
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

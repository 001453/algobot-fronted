import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TradeHistory = () => {
  const trades = [
    { id: 1, pair: 'BTC/USDT', type: 'BUY', price: '42150', amount: '0.1', time: '2024-01-02 10:30' },
    { id: 2, pair: 'ETH/USDT', type: 'SELL', price: '2250', amount: '1.5', time: '2024-01-02 10:25' }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pair</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.pair}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>{trade.price}</TableCell>
              <TableCell>{trade.amount}</TableCell>
              <TableCell>{trade.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradeHistory;

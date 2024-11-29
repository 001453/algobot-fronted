import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function History() {
  const trades = [
    { id: 1, pair: 'BTC/USDT', type: 'BUY', price: '42,000', amount: '0.1', date: '2024-01-27' },
    { id: 2, pair: 'ETH/USDT', type: 'SELL', price: '2,300', amount: '1.5', date: '2024-01-26' },
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
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.pair}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>{trade.price}</TableCell>
              <TableCell>{trade.amount}</TableCell>
              <TableCell>{trade.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

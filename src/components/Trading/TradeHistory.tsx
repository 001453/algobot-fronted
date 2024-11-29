import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
}

interface TradeHistoryProps {
  positions: Position[];
}

export default function TradeHistory({ positions }: TradeHistoryProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pair</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Entry Price</TableCell>
            <TableCell align="right">Current Price</TableCell>
            <TableCell align="right">Profit/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.pair}</TableCell>
              <TableCell align="right">{position.amount}</TableCell>
              <TableCell align="right">${position.entryPrice}</TableCell>
              <TableCell align="right">${position.currentPrice}</TableCell>
              <TableCell 
                align="right"
                sx={{ 
                  color: position.profit.startsWith('+') ? 'success.main' : 'error.main' 
                }}
              >
                {position.profit}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import { List, ListItem, ListItemText, Typography, Chip, Box } from '@mui/material';

interface Position {
  id: number;
  pair: string;
  entryPrice: string;
  currentPrice: string;
  profit: string;
  amount: string;
}

interface ActivePositionsProps {
  positions: Position[];
}

const ActivePositions: React.FC<ActivePositionsProps> = ({ positions }) => {
  return (
    <List>
      {positions.map((position) => (
        <ListItem
          key={position.id}
          divider
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start',
            gap: 1 
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {position.pair}
            </Typography>
            <Chip 
              label={position.profit}
              color={position.profit.startsWith('+') ? 'success' : 'error'}
              size="small"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
            <ListItemText 
              primary="Entry"
              secondary={`$${position.entryPrice}`}
              primaryTypographyProps={{ variant: 'caption' }}
            />
            <ListItemText 
              primary="Current"
              secondary={`$${position.currentPrice}`}
              primaryTypographyProps={{ variant: 'caption' }}
            />
            <ListItemText 
              primary="Amount"
              secondary={position.amount}
              primaryTypographyProps={{ variant: 'caption' }}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default ActivePositions;
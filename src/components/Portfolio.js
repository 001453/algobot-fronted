import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Portfolio = () => {
  const positions = [
    { asset: 'BTC', amount: '0.5', value: '21,075 USDT' },
    { asset: 'ETH', amount: '4.2', value: '9,450 USDT' }
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Portfolio</Typography>
      <Typography variant="subtitle1">Total Value: $30,525 USDT</Typography>
      <List>
        {positions.map((position, index) => (
          <React.Fragment key={position.asset}>
            <ListItem>
              <ListItemText 
                primary={position.asset} 
                secondary={`Amount: ${position.amount}`}
              />
              <Typography>{position.value}</Typography>
            </ListItem>
            {index < positions.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export default Portfolio;

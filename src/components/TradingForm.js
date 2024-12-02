import React, { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TradingForm = () => {
  const [orderType, setOrderType] = useState('market');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [leverage, setLeverage] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      orderType,
      price,
      amount,
      stopLoss,
      takeProfit,
      leverage
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Order Type</InputLabel>
        <Select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
          <MenuItem value="market">Market Order</MenuItem>
          <MenuItem value="limit">Limit Order</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Stop Loss"
        type="number"
        value={stopLoss}
        onChange={(e) => setStopLoss(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Take Profit"
        type="number"
        value={takeProfit}
        onChange={(e) => setTakeProfit(e.target.value)}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Leverage</InputLabel>
        <Select value={leverage} onChange={(e) => setLeverage(e.target.value)}>
          {[1, 2, 5, 10, 20, 50, 100].map((value) => (
            <MenuItem key={value} value={value.toString()}>
              {value}x
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Place Order
      </Button>
    </Box>
  );
};

export default TradingForm;

import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface TradingControlsProps {
  onPairChange?: (pair: string) => void;
}

const TradingControls: React.FC<TradingControlsProps> = ({ onPairChange }) => {
  const [selectedPair, setSelectedPair] = useState<string>('');

  const handlePairChange = (event: SelectChangeEvent<string>) => {
    const newPair = event.target.value;
    setSelectedPair(newPair);
    if (onPairChange) {
      onPairChange(newPair);
    }
  };

  const tradingPairs = [
    { value: 'BTCUSDT', label: 'BTC/USDT' },
    { value: 'ETHUSDT', label: 'ETH/USDT' },
    { value: 'BNBUSDT', label: 'BNB/USDT' },
    // Diğer trading çiftleri buraya eklenebilir
  ];

  return (
    <FormControl fullWidth>
      <InputLabel id="trading-pair-label">Trading Pair</InputLabel>
      <Select
        labelId="trading-pair-label"
        id="trading-pair-select"
        value={selectedPair}
        label="Trading Pair"
        onChange={handlePairChange}
      >
        {tradingPairs.map((pair) => (
          <MenuItem key={pair.value} value={pair.value}>
            {pair.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TradingControls;
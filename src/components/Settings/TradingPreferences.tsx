import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, TextField, MenuItem, Typography, Divider, Button } from '@mui/material';

interface TradingPreferencesProps {
  preferences: {
    autoTrade: boolean;
    maxPositions: number;
    riskLevel: 'low' | 'medium' | 'high';
    stopLoss: number;
    takeProfit: number;
  };
  onSave: (preferences: TradingPreferencesProps['preferences']) => void;
}

const TradingPreferences: React.FC<TradingPreferencesProps> = ({ preferences: initialPreferences, onSave }) => {
  const [preferences, setPreferences] = useState(initialPreferences);

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setPreferences({
      ...preferences,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(preferences);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Automated Trading
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={preferences.autoTrade}
              onChange={handleChange('autoTrade')}
            />
          }
          label="Enable Auto Trading"
        />
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Position Settings
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Max Positions"
            type="number"
            value={preferences.maxPositions}
            onChange={handleChange('maxPositions')}
            sx={{ width: 200 }}
          />
          <TextField
            select
            label="Risk Level"
            value={preferences.riskLevel}
            onChange={handleChange('riskLevel')}
            sx={{ width: 200 }}
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </TextField>
        </Box>
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Risk Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Stop Loss (%)"
            type="number"
            value={preferences.stopLoss}
            onChange={handleChange('stopLoss')}
            sx={{ width: 200 }}
          />
          <TextField
            label="Take Profit (%)"
            type="number"
            value={preferences.takeProfit}
            onChange={handleChange('takeProfit')}
            sx={{ width: 200 }}
          />
        </Box>
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
}

export default TradingPreferences;
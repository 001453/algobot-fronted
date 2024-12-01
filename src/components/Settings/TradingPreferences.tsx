import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, TextField, MenuItem, Typography, Divider, Button } from '@mui/material';
import { TradingPreferences as TradingPreferencesType } from '../../types/settings';

interface TradingPreferencesProps {
  settings: TradingPreferencesType;
  onSave: (settings: Partial<TradingPreferencesType>) => void;
}

const TradingPreferences: React.FC<TradingPreferencesProps> = ({ settings: initialSettings, onSave }) => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (name: keyof TradingPreferencesType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings({
      ...settings,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(settings);
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
              checked={settings.autoTrade}
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
            value={settings.maxPositions}
            onChange={handleChange('maxPositions')}
            sx={{ width: 200 }}
          />
          <TextField
            select
            label="Risk Level"
            value={settings.riskLevel}
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
            value={settings.stopLoss}
            onChange={handleChange('stopLoss')}
            sx={{ width: 200 }}
          />
          <TextField
            label="Take Profit (%)"
            type="number"
            value={settings.takeProfit}
            onChange={handleChange('takeProfit')}
            sx={{ width: 200 }}
          />
        </Box>
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Save Trading Preferences
      </Button>
    </Box>
  );
};

export default TradingPreferences;

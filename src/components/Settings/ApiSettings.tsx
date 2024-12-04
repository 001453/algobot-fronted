import React, { useState } from 'react';
import { Box, TextField, Button, Alert, Switch, FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { updateApiSettings } from '../../store/slices/settingsSlice';

interface ApiSettingsProps {
  settings: {
    apiKey: string;
    apiSecret: string;
    enableTrading: boolean;
  };
  onSave: (settings: { apiKey: string; apiSecret: string; enableTrading: boolean }) => void;
}

export default function ApiSettings({ settings, onSave }: ApiSettingsProps) {
  const [apiKey, setApiKey] = useState(settings.apiKey);
  const [apiSecret, setApiSecret] = useState(settings.apiSecret);
  const [enableTrading, setEnableTrading] = useState(settings.enableTrading);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newSettings = { apiKey, apiSecret, enableTrading };
    dispatch(updateApiSettings(newSettings));
    onSave(newSettings);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Alert severity="info">
        Enter your exchange API credentials to enable trading functionality
      </Alert>

      <TextField
        label="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="API Secret"
        type="password"
        value={apiSecret}
        onChange={(e) => setApiSecret(e.target.value)}
        fullWidth
        required
      />

      <FormControlLabel
        control={
          <Switch
            checked={enableTrading}
            onChange={(e) => setEnableTrading(e.target.checked)}
            color="primary"
          />
        }
        label="Enable Trading"
      />

      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        sx={{ alignSelf: 'flex-start' }}
      >
        Save API Settings
      </Button>
    </Box>
  );
}

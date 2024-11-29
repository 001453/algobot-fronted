import { Box, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';

interface ApiSettingsProps {
  settings: {
    apiKey: string;
    apiSecret: string;
  };
  onSave: (settings: { apiKey: string; apiSecret: string }) => void;
}

export default function ApiSettings({ settings, onSave }: ApiSettingsProps) {
  const [apiKey, setApiKey] = useState(settings.apiKey);
  const [apiSecret, setApiSecret] = useState(settings.apiSecret);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({ apiKey, apiSecret });
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

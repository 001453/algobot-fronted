import { Box, FormControlLabel, Switch, TextField, Typography, Divider, Alert } from '@mui/material';
import { useState } from 'react';

interface NotificationSettingsProps {
  notifications: {
    emailAlerts: boolean;
    tradeAlerts: boolean;
    priceAlerts: boolean;
    email: string;
  };
  onSave: (notifications: NotificationSettingsProps['notifications']) => void;
}

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    tradeAlerts: true,
    priceAlerts: false,
    email: 'user@example.com',
  });

  const handleChange = (name: string) => (event: any) => {
    setNotifications({
      ...notifications,
      [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Alert severity="info">
        Configure your notification preferences to stay updated with your trading activities
      </Alert>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Email Settings
        </Typography>
        <TextField
          fullWidth
          label="Email Address"
          value={notifications.email}
          onChange={handleChange('email')}
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={notifications.emailAlerts}
              onChange={handleChange('emailAlerts')}
            />
          }
          label="Enable Email Notifications"
        />
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Trading Alerts
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notifications.tradeAlerts}
              onChange={handleChange('tradeAlerts')}
            />
          }
          label="Trade Execution Alerts"
        />
        <FormControlLabel
          control={
            <Switch
              checked={notifications.priceAlerts}
              onChange={handleChange('priceAlerts')}
            />
          }
          label="Price Movement Alerts"
        />
      </Box>
    </Box>
  );
}

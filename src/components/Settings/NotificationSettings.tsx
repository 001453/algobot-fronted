import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, TextField, Typography, Divider, Alert, Button } from '@mui/material';

interface NotificationSettingsProps {
  notifications: {
    emailAlerts: boolean;
    tradeAlerts: boolean;
    priceAlerts: boolean;
    email: string;
    pushNotifications: boolean;
    telegramAlerts: boolean;
    telegramChatId: string;
  };
  onSave: (notifications: NotificationSettingsProps['notifications']) => void;
}

export default function NotificationSettings({ notifications: initialNotifications, onSave }: NotificationSettingsProps) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications({
      ...notifications,
      [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(notifications);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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

      <Divider />

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Additional Notifications
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notifications.pushNotifications}
              onChange={handleChange('pushNotifications')}
            />
          }
          label="Enable Push Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={notifications.telegramAlerts}
              onChange={handleChange('telegramAlerts')}
            />
          }
          label="Enable Telegram Alerts"
        />
        {notifications.telegramAlerts && (
          <TextField
            fullWidth
            label="Telegram Chat ID"
            value={notifications.telegramChatId}
            onChange={handleChange('telegramChatId')}
            sx={{ mt: 2 }}
          />
        )}
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Save Notification Settings
      </Button>
    </Box>
  );
}
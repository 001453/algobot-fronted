import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, TextField, Typography, Divider, Alert, Button } from '@mui/material';
import { NotificationSettings as NotificationSettingsType } from '../../types/settings';

interface NotificationSettingsProps {
  settings: NotificationSettingsType;
  onSave: (settings: Partial<NotificationSettingsType>) => void;
}

export default function NotificationSettings({ settings: initialSettings, onSave }: NotificationSettingsProps) {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (name: keyof NotificationSettingsType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings({
      ...settings,
      [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(settings);
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
          value={settings.email}
          onChange={handleChange('email')}
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.emailAlerts}
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
              checked={settings.tradeAlerts}
              onChange={handleChange('tradeAlerts')}
            />
          }
          label="Trade Execution Alerts"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.priceAlerts}
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
              checked={settings.pushNotifications}
              onChange={handleChange('pushNotifications')}
            />
          }
          label="Enable Push Notifications"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.telegramAlerts}
              onChange={handleChange('telegramAlerts')}
            />
          }
          label="Enable Telegram Alerts"
        />
        {settings.telegramAlerts && (
          <TextField
            fullWidth
            label="Telegram Chat ID"
            value={settings.telegramChatId}
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

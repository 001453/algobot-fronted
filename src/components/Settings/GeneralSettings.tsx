import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Switch, 
  FormControlLabel, 
  Button, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
  SelectChangeEvent 
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface GeneralSettingsType {
  darkMode: boolean;
  language: string;
  timeZone: string;
  currency: string;
  dateFormat: string;
}

interface GeneralSettingsProps {
  settings: GeneralSettingsType;
  onSave: (settings: GeneralSettingsType) => void;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ settings, onSave }) => {
  const [localSettings, setLocalSettings] = useState<GeneralSettingsType>(settings);
  const { t } = useTranslation();

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(localSettings);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControlLabel
        control={
          <Switch
            checked={localSettings.darkMode}
            onChange={handleSwitchChange}
            name="darkMode"
          />
        }
        label={t('general.darkMode')}
      />

      <FormControl fullWidth>
        <InputLabel id="language-label">{t('general.language')}</InputLabel>
        <Select
          labelId="language-label"
          value={localSettings.language}
          onChange={handleSelectChange}
          name="language"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="tr">Türkçe</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label={t('general.timeZone')}
        name="timeZone"
        value={localSettings.timeZone}
        onChange={handleTextChange}
      />

      <FormControl fullWidth>
        <InputLabel id="currency-label">{t('general.currency')}</InputLabel>
        <Select
          labelId="currency-label"
          value={localSettings.currency}
          onChange={handleSelectChange}
          name="currency"
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="TRY">TRY</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label={t('general.dateFormat')}
        name="dateFormat"
        value={localSettings.dateFormat}
        onChange={handleTextChange}
      />

      <Button type="submit" variant="contained" color="primary">
        {t('general.saveSettings')}
      </Button>
    </Box>
  );
};

export default GeneralSettings;

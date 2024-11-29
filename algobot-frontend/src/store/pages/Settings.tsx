import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Tab, Tabs, Typography, Button } from '@mui/material';
import { RootState } from '../store';
import { updateGeneralSettings, updateApiSettings, updateTradingPreferences, updateNotificationSettings, resetSettings } from '../store/settingsSlice';
import GeneralSettings from '../components/GeneralSettings';
import ApiSettings from '../components/ApiSettings';
import TradingPreferences from '../components/TradingPreferences';
import NotificationSettings from '../components/NotificationSettings';
import { useTranslation } from 'react-i18next';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleGeneralSettingsUpdate = (newSettings: typeof settings.general) => {
    dispatch(updateGeneralSettings(newSettings));
  };

  const handleApiSettingsUpdate = (newSettings: typeof settings.api) => {
    dispatch(updateApiSettings(newSettings));
  };

  const handleTradingPreferencesUpdate = (newSettings: typeof settings.trading) => {
    dispatch(updateTradingPreferences(newSettings));
  };

  const handleNotificationSettingsUpdate = (newSettings: typeof settings.notifications) => {
    dispatch(updateNotificationSettings(newSettings));
  };

  const handleResetSettings = () => {
    dispatch(resetSettings());
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="settings tabs">
          <Tab label={t('settings.general')} {...a11yProps(0)} />
          <Tab label={t('settings.api')} {...a11yProps(1)} />
          <Tab label={t('settings.trading')} {...a11yProps(2)} />
          <Tab label={t('settings.notifications')} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GeneralSettings settings={settings.general} onSave={handleGeneralSettingsUpdate} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApiSettings settings={settings.api} onSave={handleApiSettingsUpdate} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TradingPreferences settings={settings.trading} onSave={handleTradingPreferencesUpdate} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NotificationSettings settings={settings.notifications} onSave={handleNotificationSettingsUpdate} />
      </TabPanel>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" color="secondary" onClick={handleResetSettings}>
          {t('settings.resetAll')}
        </Button>
      </Box>
    </Box>
  );
}
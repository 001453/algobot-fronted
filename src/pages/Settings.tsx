import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { RootState } from '../store/rootReducer';
import { updateTradingPreferences, updateNotificationSettings } from '../store/settingsSlice';
import GeneralSettings from '../components/Settings/GeneralSettings';
import TradingPreferences from '../components/Settings/TradingPreferences';
import NotificationSettings from '../components/Settings/NotificationSettings';
import { TradingPreferences as TradingPreferencesType, NotificationSettings as NotificationSettingsType } from '../types';
import { TabPanel } from '../components/TabPanel';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);
  const [tabValue, setTabValue] = useState(0);

  const handleTradingPreferencesUpdate = (tradingPrefs: TradingPreferencesType) => {
    dispatch(updateTradingPreferences(tradingPrefs));
  };

  const handleNotificationUpdate = (notificationSettings: NotificationSettingsType) => {
    dispatch(updateNotificationSettings(notificationSettings));
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="General" />
        <Tab label="Trading" />
        <Tab label="Notifications" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <GeneralSettings 
          settings={settings.general} 
          onSave={(generalSettings: any) => {/* Genel ayarları güncelle */}}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <TradingPreferences
          preferences={settings.trading}
          onSave={handleTradingPreferencesUpdate}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <NotificationSettings
          settings={settings.notifications}
          onSave={handleNotificationUpdate}
        />
      </TabPanel>
    </Box>
  );
};

export default Settings;
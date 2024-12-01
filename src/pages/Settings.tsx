import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { RootState } from '../store';
import { 
  updateTradingPreferences, 
  updateNotificationSettings, 
  updateGeneralSettings 
} from '../store/settingsSlice';
import GeneralSettings from '../components/Settings/GeneralSettings';
import TradingPreferences from '../components/Settings/TradingPreferences';
import NotificationSettings from '../components/Settings/NotificationSettings';
import { 
  TradingPreferences as TradingPreferencesType, 
  NotificationSettings as NotificationSettingsType, 
  GeneralSettings as GeneralSettingsType 
} from '../types/settings';
import TabPanel from '../components/TabPanel';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);
  const [tabValue, setTabValue] = useState(0);

  const handleGeneralSettingsUpdate = (generalSettings: Partial<GeneralSettingsType>) => {
    dispatch(updateGeneralSettings(generalSettings));
  };

  const handleTradingPreferencesUpdate = (tradingPrefs: Partial<TradingPreferencesType>) => {
    dispatch(updateTradingPreferences(tradingPrefs));
  };

  const handleNotificationUpdate = (notificationSettings: Partial<NotificationSettingsType>) => {
    dispatch(updateNotificationSettings(notificationSettings));
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="General" />
        <Tab label="Trading" />
        <Tab label="Notifications" />
      </Tabs>
      
      <TabPanel value={tabValue} index={0}>
        <GeneralSettings 
          settings={settings.general} 
          onSave={handleGeneralSettingsUpdate}
        />
      </TabPanel>
      
      <TabPanel value={tabValue} index={1}>
        <TradingPreferences
          settings={settings.trading}
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

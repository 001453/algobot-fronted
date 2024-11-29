import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Box } from '@mui/material';
import { RootState } from '../../store/rootReducer';
import { updateTradingPreferences, updateNotificationSettings, updateGeneralSettings } from '../../store/settingsSlice';
import GeneralSettings from '../../components/Settings/GeneralSettings';
import TradingPreferences from '../../components/Settings/TradingPreferences';
import NotificationSettings from '../../components/Settings/NotificationSettings';
import { TradingPreferencesType, NotificationSettingsType, GeneralSettingsType } from '../../types/settings';
import TabPanel from '../../components/TabPanel';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);
  const [tabValue, setTabValue] = useState(0);

  const handleGeneralSettingsUpdate = (generalSettings: GeneralSettingsType) => {
    dispatch(updateGeneralSettings(generalSettings));
  };

  const handleTradingPreferencesUpdate = (tradingPrefs: TradingPreferencesType) => {
    dispatch(updateTradingPreferences(tradingPrefs));
  };

  const handleNotificationUpdate = (notificationSettings: NotificationSettingsType) => {
    dispatch(updateNotificationSettings(notificationSettings));
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
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
          notifications={settings.notifications}
          onSave={handleNotificationUpdate}
        />
      </TabPanel>
    </Box>
  );
};

export default Settings;
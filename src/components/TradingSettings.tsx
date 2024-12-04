import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { updateTradingSettings } from '../store/slices/settingsSlice';

const TradingSettings: React.FC = () => {
  const dispatch = useAppDispatch();
  const tradingSettings = useAppSelector((state) => state.settings.trading);

  const handleMaxPositionsChange = (value: number) => {
    dispatch(updateTradingSettings({ maxPositions: value }));
  };

  const handleRiskLevelChange = (level: 'low' | 'medium' | 'high') => {
    dispatch(updateTradingSettings({ riskLevel: level }));
  };

  return (
    <div className="p-4">
      <h2>Trading Settings</h2>
      
      <div className="mb-4">
        <label>Max Positions</label>
        <input 
          type="number"
          value={tradingSettings.maxPositions}
          onChange={(e) => handleMaxPositionsChange(Number(e.target.value))}
        />
      </div>

      <div className="mb-4">
        <label>Risk Level</label>
        <select 
          value={tradingSettings.riskLevel}
          onChange={(e) => handleRiskLevelChange(e.target.value as 'low' | 'medium' | 'high')}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default TradingSettings;

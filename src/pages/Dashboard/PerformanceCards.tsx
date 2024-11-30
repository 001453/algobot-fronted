import React from 'react';

interface PerformanceCardsProps {
  balance: number;
  activePositions: number;
  isTrading: boolean;
}

const PerformanceCards: React.FC<PerformanceCardsProps> = ({ balance, activePositions, isTrading }) => {
  return (
    <div>
      <p>Balance: {balance}</p>
      <p>Active Positions: {activePositions}</p>
      <p>Trading Status: {isTrading ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default PerformanceCards;
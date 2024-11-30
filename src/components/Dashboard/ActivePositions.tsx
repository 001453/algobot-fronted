import React from 'react';
import { Position } from '../../types/position';

interface ActivePositionsProps {
  positions: Position[];
}

const ActivePositions: React.FC<ActivePositionsProps> = ({ positions }) => {
  return (
    <div>
      <h3>Active Positions</h3>
      {positions.map((position) => (
        <div key={position.id}>
          <p>Pair: {position.pair}</p>
          <p>Entry Price: {position.entryPrice}</p>
          <p>Current Price: {position.currentPrice}</p>
          <p>Amount: {position.amount}</p>
          <p>Profit: {position.profit}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivePositions;
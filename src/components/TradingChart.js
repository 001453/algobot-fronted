import React from 'react';
import { Box } from '@mui/material';

const TradingChart = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.TradingView.widget({
        width: '100%',
        height: 500,
        symbol: 'BINANCE:BTCUSDT',
        interval: '15',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'tr',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        container_id: 'tradingview_chart'
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Box id="tradingview_chart" sx={{ width: '100%', height: 500 }} />;
};

export default TradingChart;

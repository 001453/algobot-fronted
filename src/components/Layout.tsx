import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // reducers will be added here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
"@ | Out-File -FilePath "$PWD\src\store\store.ts" -Encoding utf8

# theme.ts dosyasını oluştur
New-Item -ItemType File -Force -Path "$PWD\src\theme\theme.ts"
@"
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // theme customization will be done here
});
"@ | Out-File -FilePath "$PWD\src\theme\theme.ts" -Encoding utf8

# Layout.tsx dosyasını düzelt
@"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';

const Layout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const someState = useSelector((state: RootState) => state.someReducer);

  return (
    <div>
      {/* Your layout content here */}
    </div>
  );
};

export default Layout;
"@ | Out-File -FilePath "$PWD\src\components\Layout.tsx" -Encoding utf8

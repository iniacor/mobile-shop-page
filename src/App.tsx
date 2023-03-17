import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EmotionCache } from '@emotion/react';
import Layout from './components/Layout/Layout';
import CategoryPage from './pages/Category';
import ProductCardPage from './pages/Product';

import createEmotionCache from '@theme/createEmotionCache';
import ThemeProvider from '@theme/ThemeProvider';
import theme from '@theme';
import { CssBaseline } from '@mui/material';

interface MyAppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { emotionCache = clientSideEmotionCache } = props;

  return (
    <>
      <ThemeProvider theme={theme} emotionCache={emotionCache}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CategoryPage />} />
              <Route path="/" element={<CategoryPage />} />
              <Route path=":id" element={<ProductCardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

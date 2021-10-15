import { FC, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import ReactGa from 'react-ga';

import GlobalStyle, { Container, theme } from './styles/globalStyle';
import LanguageProvider from './globalStorage/LanguageProvider';
import Banner from './views/sections/Banner';

const App: FC = () => {
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_METRIC_ID || '');

    ReactGa.pageview('/');
  }, []);

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <Banner />
          </LanguageProvider>
        </ThemeProvider>

        <GlobalStyle />
      </Container>
    </HelmetProvider>
  );
};

export default App;

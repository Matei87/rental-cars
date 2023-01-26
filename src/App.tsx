import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './app/pages/Homepage';
import Terms from './app/pages/Terms';
import Privacy from './app/pages/Privacy';
import { Navbar } from './app/components/navBar';
import { Footer } from './app/components/footer';
import Faq from './app/pages/Faq';
import {
  AppContainer,
  PageContainer,
} from './app/pages/Privacy/privacy.styled';

const App: FC = () => {
  return (
    <AppContainer>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='rental-cars' element={<HomePage />} />
            <Route path='terms-and-conditions' element={<Terms />} />
            <Route path='privacy-policy' element={<Privacy />} />
            <Route path='faq' element={<Faq />} />
            <Route
              path='*'
              element={<Navigate to='rental-cars' replace={true} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </AppContainer>
  );
};

export default App;

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ROUTES } from '@/utils/constants';

// Lazy-loaded pages
const Home = React.lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const About = React.lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const IndividualProducts = React.lazy(() => import('@/pages/IndividualProducts').then((m) => ({ default: m.IndividualProducts })));
const CorporateProducts = React.lazy(() => import('@/pages/CorporateProducts').then((m) => ({ default: m.CorporateProducts })));
const ProductDetail = React.lazy(() => import('@/pages/ProductDetail').then((m) => ({ default: m.ProductDetail })));
const MotorRepair = React.lazy(() => import('@/pages/MotorRepair').then((m) => ({ default: m.MotorRepair })));
const Contact = React.lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));
const Careers = React.lazy(() => import('@/pages/Careers').then((m) => ({ default: m.Careers })));
const NotFound = React.lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const Terms = React.lazy(() => import('@/pages/Terms').then((m) => ({ default: m.Terms })));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><LoadingSpinner /></div>}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.INDIVIDUAL_PRODUCTS} element={<IndividualProducts />} />
              <Route path={ROUTES.CORPORATE_PRODUCTS} element={<CorporateProducts />} />
              <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
              <Route path={ROUTES.MOTOR_REPAIR} element={<MotorRepair />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              <Route path={ROUTES.CAREERS} element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

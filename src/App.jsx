import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/home/Home'));
const Detailed = lazy(() => import('./routes/detailed/Detailed'));
const Information = lazy(() => import('./routes/information/Information'));
const Cart = lazy(() => import('./routes/cart/Cart'));
const NotFound = lazy(() => import('./routes/notfound/NotFound'));

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__inner">
            <Routes>
              <Route
                path="mediasoft-react-course-test/"
                element={
                  <Suspense fallback={<p>Загрузка...</p>}>
                    <Home />
                  </Suspense>
                }></Route>
              <Route
                path="mediasoft-react-course-test/products/:productId"
                element={
                  <Suspense fallback={<p>Загрузка...</p>}>
                    <Detailed />
                  </Suspense>
                }></Route>
              <Route
                path="mediasoft-react-course-test/info"
                element={
                  <Suspense fallback={<p>Загрузка...</p>}>
                    <Information />
                  </Suspense>
                }></Route>
              <Route
                path="mediasoft-react-course-test/cart"
                element={
                  <Suspense fallback={<p>Загрузка...</p>}>
                    <Cart />
                  </Suspense>
                }></Route>
              <Route
                path="mediasoft-react-course-test/*"
                element={
                  <Suspense fallback={<p>Загрузка...</p>}>
                    <NotFound />
                  </Suspense>
                }></Route>
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

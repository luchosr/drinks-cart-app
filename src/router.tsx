import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './views/Indexpage';
import Layout from './layouts/Layout';

const FavoritesPage = lazy(() => import('./views/FavoritesPage'));
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Indexpage />} index />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback={<p>Cargando...</p>}>
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './views/Indexpage';
import FavoritesPage from './views/FavoritesPage';
import Layout from './layouts/Layout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Indexpage />} index />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

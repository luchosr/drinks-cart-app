import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './views/Indexpage';
import FavoritesPage from './views/FavoritesPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexpage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

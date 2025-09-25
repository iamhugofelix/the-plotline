import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx'
import TvDetailsPage from './pages/TvDetailsPage/TvDetailsPage.jsx'
import TvPage from './pages/TvPage/TvPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/tv-series" element={<TvPage />} />
        <Route path="/movie/:id" element={<TvDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom';
import './App.css';
import { StickerAlbum } from './pages/stickerAlbum/StickerAlbum';
import { Dashboard } from './pages/dashboard/Dashboard';

const router = Router([
  {
    path: "/sticker-album",
    element: <StickerAlbum />,
  },
  {
    path: "/*",
    element: <Dashboard />,
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
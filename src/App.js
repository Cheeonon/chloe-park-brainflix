import './styles/App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDescription from './components/VideoDescription/VideoDescription';
import Video from './components/Video/Video';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
        <Route path="/videos/:videosId" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

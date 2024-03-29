import './styles/App.scss';
import PageHeader from './components/PageHeader/PageHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
        <Route path="/videos/:videosId" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

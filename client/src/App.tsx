import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { Sidebar } from './components';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Sidebar />}>
              <Route path='/' element={<Home />} />
              <Route path='/friends' element={<h2>friends</h2>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SidebarLayout } from './components';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/friends' element={<div>friends</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
